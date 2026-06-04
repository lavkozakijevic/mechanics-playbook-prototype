// Mechanics Playbook — Auth
// Change PASSWORD to anything you like. Share it with people you want to give full access.
// This is client-side only — it controls the UI experience, not server access.

const MP_PASSWORD = 'gamebiz2026';
const MP_KEY = 'mp_unlocked';

// Free tier: what's visible without login
const FREE = {
  mechanics:   ['streak'],
  casestudies: ['royal-match'],
  systems:     ['royal-match'],
  cheatsheets: ['launching-streak'],
};

function isUnlocked() {
  return localStorage.getItem(MP_KEY) === '1';
}

function isFree(type, id) {
  if (isUnlocked()) return true;
  return (FREE[type] || []).includes(id);
}

function mpLogin(pw) {
  if (pw === MP_PASSWORD) {
    localStorage.setItem(MP_KEY, '1');
    return true;
  }
  return false;
}

function mpLogout() {
  localStorage.removeItem(MP_KEY);
  location.reload();
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
// Injects the login modal into the page if not already present

function ensureModal() {
  if (document.getElementById('mp-modal')) return;

  const style = document.createElement('style');
  style.textContent = `
    #mp-overlay {
      position: fixed; inset: 0; background: rgba(10,10,10,0.55);
      display: flex; align-items: center; justify-content: center;
      z-index: 9999; padding: 20px;
      backdrop-filter: blur(3px);
      opacity: 0; transition: opacity 0.18s;
    }
    #mp-overlay.show { opacity: 1; }
    #mp-modal {
      background: var(--card, #fff);
      border: 1px solid var(--border, #e5e5e0);
      border-radius: 12px;
      padding: 28px 28px 24px;
      width: 100%; max-width: 360px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.18);
      transform: translateY(8px); transition: transform 0.18s;
    }
    #mp-overlay.show #mp-modal { transform: translateY(0); }
    #mp-modal-label {
      font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
      text-transform: uppercase; color: var(--muted,#888);
      margin-bottom: 10px;
    }
    #mp-modal h2 {
      font-family: var(--d, system-ui); font-size: 18px;
      font-weight: 700; letter-spacing: -0.02em;
      color: var(--text, #0a0a0a); margin-bottom: 6px;
    }
    #mp-modal p {
      font-size: 13px; color: var(--sub, #555);
      line-height: 1.55; margin-bottom: 20px;
    }
    #mp-pw {
      width: 100%; padding: 11px 14px;
      font-size: 14px; font-family: inherit;
      border: 1px solid var(--border, #e5e5e0);
      border-radius: 7px;
      background: var(--bg, #f5f4f0);
      color: var(--text, #0a0a0a);
      outline: none; margin-bottom: 10px;
      transition: border-color 0.15s;
    }
    #mp-pw:focus { border-color: var(--text, #0a0a0a); }
    #mp-pw.err { border-color: #F03636; }
    #mp-pw-err {
      font-size: 12px; color: #F03636;
      margin-bottom: 12px; display: none;
    }
    #mp-submit {
      width: 100%; padding: 12px;
      background: var(--text, #0a0a0a);
      color: var(--bg, #f5f4f0);
      border: none; border-radius: 7px;
      font-size: 14px; font-weight: 600;
      font-family: inherit; cursor: pointer;
      transition: opacity 0.15s;
    }
    #mp-submit:hover { opacity: 0.85; }
    #mp-cancel {
      display: block; text-align: center;
      margin-top: 12px; font-size: 12px;
      color: var(--muted, #888); cursor: pointer;
      background: none; border: none;
      font-family: inherit;
    }
    #mp-cancel:hover { color: var(--text, #0a0a0a); }
    /* lock-chip styles moved to styles.css */
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'mp-overlay';
  overlay.innerHTML = `
    <div id="mp-modal">
      <div id="mp-modal-label">Full library access</div>
      <h2>Sign in to continue</h2>
      <p>Enter the access password to unlock all mechanics, case studies, systems, and cheatsheets.</p>
      <input id="mp-pw" type="password" placeholder="Access password" autocomplete="current-password">
      <div id="mp-pw-err">Incorrect password — try again</div>
      <button id="mp-submit">Unlock full library</button>
      <button id="mp-cancel">Cancel</button>
    </div>`;
  document.body.appendChild(overlay);

  // Events
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.getElementById('mp-cancel').addEventListener('click', closeModal);
  document.getElementById('mp-submit').addEventListener('click', submitLogin);
  document.getElementById('mp-pw').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitLogin();
    document.getElementById('mp-pw').classList.remove('err');
    document.getElementById('mp-pw-err').style.display = 'none';
  });

  requestAnimationFrame(() => overlay.classList.add('show'));
  setTimeout(() => document.getElementById('mp-pw').focus(), 80);
}

function submitLogin() {
  const pw = document.getElementById('mp-pw').value;
  if (mpLogin(pw)) {
    closeModal();
    // Reload to show full content
    setTimeout(() => location.reload(), 120);
  } else {
    const inp = document.getElementById('mp-pw');
    inp.classList.add('err');
    inp.value = '';
    document.getElementById('mp-pw-err').style.display = 'block';
    inp.focus();
  }
}

function showLoginModal() {
  ensureModal();
}

function closeModal() {
  const ov = document.getElementById('mp-overlay');
  if (!ov) return;
  ov.classList.remove('show');
  setTimeout(() => ov.remove(), 200);
}

// ── LOCK ICON SVG ─────────────────────────────────────────────────────────────
function lockIcon(size = 12) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
}
