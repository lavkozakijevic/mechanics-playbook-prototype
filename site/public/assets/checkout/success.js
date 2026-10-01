/* Success page. Paying and having access are different things: access exists
   only once the server has recorded the subscription. This asks the server every
   two seconds (GET /api/entitlement answers "active" or "pending" and nothing
   else) and changes the page only when the server says "active". It gives up
   quietly after a minute; the subscription is still being recorded and a reload
   will show it. */
(function () {
  var root = document.querySelector("[data-success]");
  if (!root || root.getAttribute("data-active") === "true") return;

  var heading = root.querySelector("[data-heading]");
  var statusEl = root.querySelector("[data-status]");
  var next = root.querySelector("[data-continue]");
  var started = Date.now();
  var INTERVAL_MS = 2000;
  var GIVE_UP_MS = 60000;

  function done() {
    heading.textContent = "You're in";
    statusEl.textContent = "Your subscription is active.";
    next.hidden = false;
  }

  function poll() {
    fetch("/api/entitlement", { credentials: "same-origin", cache: "no-store" })
      .then(function (res) {
        if (res.status === 401) {
          window.location.assign("/login/?next=" + encodeURIComponent("/checkout/success/"));
          return null;
        }
        return res.ok ? res.json() : null;
      })
      .then(function (body) {
        if (body && body.state === "active") return done();
        again();
      })
      .catch(again);
  }

  function again() {
    if (Date.now() - started > GIVE_UP_MS) {
      statusEl.textContent =
        "This is taking longer than usual. Your payment went through, and access appears as soon as it's confirmed. Reload this page in a minute.";
      return;
    }
    window.setTimeout(poll, INTERVAL_MS);
  }

  again();
})();
