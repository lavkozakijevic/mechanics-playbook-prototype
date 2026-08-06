/* Website kit — Audio player for shortcasts. A compact, self-contained player
   with play/pause, 15-second skip back/forward, a seekable progress bar, and
   elapsed / total time read from the file. Styled with the site's tokens; no
   external dependencies. */
import React, { useRef, useState, useCallback, useEffect } from "react";

const SKIP = 15;

const PlayIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);
// Circular arrow with "15" — replay/forward-15 style.
const Back15 = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <text x="12.2" y="15.2" fontSize="7.5" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none">15</text>
  </svg>
);
const Fwd15 = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <text x="11.8" y="15.2" fontSize="7.5" fontWeight="700" textAnchor="middle" fill="currentColor" stroke="none">15</text>
  </svg>
);

function fmt(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [seekable, setSeekable] = useState(false);
  const blobUrlRef = useRef(null);

  // Fetch the whole file into memory once and play it from a blob URL. A blob is
  // fully seekable regardless of whether the host serves HTTP range requests —
  // some static hosts don't, and without ranges the browser can't seek an mp3,
  // so currentTime just resets to the start. Returns true once seekable.
  const ensureSeekable = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return false;
    if (blobUrlRef.current) return true;
    setLoading(true);
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      const url = URL.createObjectURL(await res.blob());
      blobUrlRef.current = url;
      const pos = a.currentTime;
      const wasPlaying = !a.paused;
      a.src = url;
      a.load();
      await new Promise((resolve) => {
        a.addEventListener("loadedmetadata", resolve, { once: true });
      });
      if (Number.isFinite(a.duration)) { setDuration(a.duration); setReady(true); }
      if (pos) { a.currentTime = pos; setCurrent(pos); }
      setSeekable(true);
      if (wasPlaying) await a.play().catch(() => {});
      return true;
    } catch {
      // Keep the streaming src; playback still works even if seeking is limited.
      return false;
    } finally {
      setLoading(false);
    }
  }, [src]);

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      // Play instantly from the stream; the blob is only fetched when the user
      // first seeks (skip / scrub), so playback starts with no download wait.
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  const skip = useCallback(async (delta) => {
    const a = audioRef.current;
    if (!a) return;
    if (!blobUrlRef.current) await ensureSeekable();
    const max = Number.isFinite(a.duration) ? a.duration : a.currentTime + delta;
    a.currentTime = Math.max(0, Math.min(a.currentTime + delta, max));
    setCurrent(a.currentTime);
  }, [ensureSeekable]);

  const onTime = () => setCurrent(audioRef.current?.currentTime ?? 0);
  const onMeta = () => {
    const a = audioRef.current;
    if (!a || !Number.isFinite(a.duration)) return;
    setDuration(a.duration);
    setReady(true);
  };
  const onEnded = () => { setPlaying(false); setCurrent(0); };

  // The <audio> element is server-rendered, so `loadedmetadata` can fire before
  // this island hydrates and the handler is attached. On mount, adopt whatever
  // state the element already has so the duration isn't stuck on the placeholder.
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (Number.isFinite(a.duration)) {
      setDuration(a.duration);
      setReady(true);
    }
    if (a.currentTime) setCurrent(a.currentTime);
    if (!a.paused) setPlaying(true);
  }, []);

  // Release the in-memory blob when the player unmounts.
  useEffect(() => () => {
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
  }, []);

  const seek = async (e) => {
    const a = audioRef.current;
    const value = Number(e.target.value);
    setCurrent(value);
    if (!blobUrlRef.current) await ensureSeekable();
    if (a && Number.isFinite(a.duration)) a.currentTime = value;
  };

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className="aplayer" data-playing={playing || undefined}>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={onTime}
        onLoadedMetadata={onMeta}
        onDurationChange={onMeta}
        onEnded={onEnded}
      />
      <div className="aplayer__controls">
        <button
          type="button"
          className="aplayer__skip"
          onClick={() => skip(-SKIP)}
          disabled={!ready}
          aria-label={`Rewind ${SKIP} seconds`}
        >
          <span className="aplayer__skip-ico" aria-hidden="true">{Back15}</span>
        </button>
        <button
          type="button"
          className="aplayer__btn"
          onClick={toggle}
          disabled={loading}
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
          aria-busy={loading || undefined}
        >
          <span className="aplayer__btn-ico" aria-hidden="true">
            {loading ? <span className="aplayer__spin" /> : (playing ? PauseIcon : PlayIcon)}
          </span>
        </button>
        <button
          type="button"
          className="aplayer__skip"
          onClick={() => skip(SKIP)}
          disabled={!ready}
          aria-label={`Forward ${SKIP} seconds`}
        >
          <span className="aplayer__skip-ico" aria-hidden="true">{Fwd15}</span>
        </button>
      </div>

      <div className="aplayer__body">
        <input
          type="range"
          className="aplayer__scrub"
          min={0}
          max={duration || 0}
          step="any"
          value={current}
          onChange={seek}
          disabled={!ready}
          aria-label={`Seek within ${title}`}
          style={{ "--aplayer-pct": `${pct}%` }}
        />
        <div className="aplayer__times">
          <span className="aplayer__t">{fmt(current)}</span>
          <span className="aplayer__t aplayer__t--dur">{ready ? fmt(duration) : "--:--"}</span>
        </div>
      </div>
    </div>
  );
}
