/* Delete-account page. Two jobs: (1) when the sign-in is too old, ask for a
   fresh email link that returns here; (2) when it is fresh, send the typed word
   to the server and, if it says the account is gone, go to the confirmation
   page. The words shown come from the page (data-msg-*), so they live in one
   place. The page decides nothing: the server checks the word and the sign-in
   time again. Plain script, no build step. */
(function () {
  var root = document.querySelector("[data-delete]");
  if (!root) return;
  var statusEl = root.querySelector("[data-delete-status]");
  var noteEl = root.querySelector("[data-delete-note]");
  var msg = function (k) { return root.getAttribute("data-msg-" + k) || ""; };

  function error(text) {
    noteEl.hidden = true;
    statusEl.textContent = text;
    statusEl.hidden = false;
  }
  function note(text) {
    statusEl.hidden = true;
    noteEl.textContent = text;
    noteEl.hidden = false;
  }
  function post(url, body) {
    return fetch(url, { method: "POST", headers: { "content-type": "application/json" }, credentials: "same-origin", body: JSON.stringify(body) })
      .then(function (res) {
        return res.json().then(function (b) { return { status: res.status, body: b }; }, function () { return { status: res.status, body: {} }; });
      });
  }

  // 1. A fresh sign-in is needed first.
  var send = root.querySelector("[data-fresh-send]");
  if (send) {
    send.addEventListener("click", function () {
      send.disabled = true;
      post("/api/auth/login", { email: root.getAttribute("data-email"), next: "/account/delete/" })
        .then(function (r) {
          if (r.status === 200) return note(msg("sent"));
          send.disabled = false;
          error(r.status === 429 ? msg("rate_limited") : msg("send_failed"));
        })
        .catch(function () { send.disabled = false; error(msg("network")); });
    });
  }

  // 2. The typed confirmation.
  var form = root.querySelector("[data-delete-form]");
  if (!form) return;
  var input = form.querySelector("input");
  var submit = form.querySelector("[data-delete-submit]");
  var word = root.getAttribute("data-confirm-word");
  input.addEventListener("input", function () { submit.disabled = input.value.trim() !== word; });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value.trim() !== word) return error(msg("confirm"));
    submit.disabled = true;
    post("/api/account/delete", { confirm: input.value })
      .then(function (r) {
        if (r.status === 200) return window.location.assign("/account/deleted/");
        var code = r.body && r.body.error;
        if (code === "unauthorized") return window.location.assign("/login/?next=" + encodeURIComponent("/account/delete/"));
        if (code === "reauth_required") return window.location.reload();
        submit.disabled = false;
        error(msg(code) || msg("unavailable"));
      })
      .catch(function () { submit.disabled = false; error(msg("network")); });
  });
})();
