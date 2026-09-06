/* Website kit — cookie consent banner. Blocks Clarity and Google Analytics
   entirely until the visitor chooses; nothing loads before consent. The
   choice persists in localStorage and can be reopened from the footer's
   "Cookie preferences" link via the "open-cookie-preferences" window event,
   so withdrawing consent is as easy as giving it. */
import React, { useEffect, useState } from "react";
import { Button } from "../ds/Button.jsx";

const STORAGE_KEY = "cookie-consent"; // "granted" | "denied"
const GA_MEASUREMENT_ID = "G-0GGBXGRTG5";
const CLARITY_PROJECT_ID = "ye6iht7xsx";

let scriptsLoaded = false;

function loadAnalytics() {
  if (scriptsLoaded) return;
  scriptsLoaded = true;

  // Google Analytics (GA4)
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  // Microsoft Clarity
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      loadAnalytics();
    } else if (stored !== "denied") {
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-preferences", reopen);
    return () => window.removeEventListener("open-cookie-preferences", reopen);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    loadAnalytics();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__in">
        <p className="cookie-banner__text">
          We use cookies for analytics (Google Analytics and Microsoft Clarity) to understand how the site is used. They are only set if you accept. See our <a href="/privacy-policy/">Privacy Policy</a>.
        </p>
        <div className="cookie-banner__actions">
          <Button variant="secondary" size="sm" onClick={reject}>Reject</Button>
          <Button variant="accent" size="sm" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
