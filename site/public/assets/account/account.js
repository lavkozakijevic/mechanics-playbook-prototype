/* Account page. Sign out only: ends the session, then goes to the home page.
   Plain script, no build step. The page decides nothing about access. */
(function () {
  var btn = document.querySelector("[data-signout]");
  if (!btn) return;
  btn.addEventListener("click", function () {
    btn.disabled = true;
    fetch("/api/auth/logout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
      credentials: "same-origin"
    })
      .catch(function () { /* the redirect below either way */ })
      .then(function () { window.location.assign("/"); });
  });
})();
