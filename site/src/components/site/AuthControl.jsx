/* Header sign-in state. Display only: this decides which of two buttons to
   show and nothing else. What anyone may see is decided on the server, never
   here. The server-side render is always the signed-out "Log in" button, so
   every pre-built page stays identical for everyone; the email is filled in
   after load from /api/auth/me. */
import React, { useEffect, useState } from "react";
import { Button } from "../ds/Button.jsx";

export function useSignedInEmail() {
  const [email, setEmail] = useState(null);
  useEffect(() => {
    let live = true;
    fetch("/api/auth/me", { cache: "no-store", credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (live && d && typeof d.email === "string" && d.email) setEmail(d.email);
        // Display only: marks the page so locked badges and subscribe buttons
        // give way to the unlocked wording (src/styles/site.css). What anyone
        // may open is decided on the server, never from this.
        if (live && d) document.documentElement.dataset.access = d.entitled === true ? "entitled" : "none";
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  return email;
}

async function signOut() {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
      credentials: "same-origin",
    });
  } catch {
    /* reload below either way */
  }
  window.location.assign("/");
}

/** "Log in" when signed out; the address (a link to the account page) and a Sign out button when signed in. */
export function AccountButtons({ email, onNavigate }) {
  if (!email) {
    return (
      <Button variant="secondary" size="sm" as="a" href="/login/" onClick={onNavigate}>
        Log in
      </Button>
    );
  }
  return (
    <>
      <a className="nav__who" href="/account/" title="Your account" aria-label={`Your account, ${email}`} onClick={onNavigate}>{email}</a>
      <Button variant="secondary" size="sm" type="button" onClick={signOut}>
        Sign out
      </Button>
    </>
  );
}
