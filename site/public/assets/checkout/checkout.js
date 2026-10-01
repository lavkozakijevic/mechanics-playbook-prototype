/* Checkout page. Asks the server for a transaction (POST /api/checkout, which
   names only the plan), then hands Paddle.js the transaction id. The browser
   receives the transaction id, the public client-side token and the environment
   name, nothing else, and decides nothing about access. Plain script, no
   build step: the page's Content-Security-Policy allows no inline script. */
(function () {
  var root = document.querySelector("[data-checkout]");
  if (!root) return;

  var plan = root.getAttribute("data-plan");
  var statusEl = root.querySelector("[data-status]");
  var openBtn = root.querySelector("[data-open]");
  var transaction = null;
  var initialised = false;

  function say(text, isError) {
    statusEl.textContent = text;
    statusEl.className = "login__lead" + (isError ? " login__status login__status--error" : "");
    if (isError) statusEl.setAttribute("role", "alert");
  }

  function showOpen() {
    openBtn.hidden = false;
  }

  function onPaddleEvent(event) {
    var name = event && event.name;
    if (name === "checkout.closed") {
      say("Checkout closed. You haven't been charged. Open it again when you're ready.");
      showOpen();
    } else if (name === "checkout.completed") {
      openBtn.hidden = true;
      say("Payment received. Taking you to confirmation…");
    }
  }

  function open(t) {
    if (!window.Paddle) {
      say("The payment form couldn't load. Turn off any content blocker for this page and try again.", true);
      showOpen();
      return;
    }
    if (!initialised) {
      if (t.environment === "sandbox") window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({ token: t.clientToken, eventCallback: onPaddleEvent });
      initialised = true;
    }
    openBtn.hidden = true;
    say("Secure checkout is open.");
    window.Paddle.Checkout.open({
      transactionId: t.transactionId,
      settings: {
        displayMode: "overlay",
        theme: "light",
        successUrl: window.location.origin + "/checkout/success/",
      },
    });
  }

  function start() {
    // The transaction is made once; closing and reopening checkout reuses it.
    if (transaction) return open(transaction);
    openBtn.hidden = true;
    say("Opening secure checkout…");
    fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ plan: plan }),
    })
      .then(function (res) {
        return res.json().then(
          function (body) { return { status: res.status, body: body }; },
          function () { return { status: res.status, body: {} }; }
        );
      })
      .then(function (r) {
        if (r.status === 200 && r.body && r.body.transactionId && r.body.clientToken) {
          transaction = r.body;
          return open(transaction);
        }
        if (r.status === 401) {
          window.location.assign("/login/?next=" + encodeURIComponent("/checkout/?plan=" + plan));
        } else if (r.status === 409) {
          // Already subscribed (or paused, past due): the page says so.
          window.location.reload();
        } else if (r.status === 429) {
          say("Too many attempts. Wait a minute and try again.", true);
          showOpen();
        } else {
          say("Checkout isn't available right now. Try again in a moment.", true);
          showOpen();
        }
      })
      .catch(function () {
        say("Checkout isn't available right now. Try again in a moment.", true);
        showOpen();
      });
  }

  openBtn.addEventListener("click", start);
  start();
})();
