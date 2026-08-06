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

  const toggle = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  const skip = useCallback((delta) => {
    const a = audioRef.current;
    if (!a) return;
    const max = Number.isFinite(a.duration) ? a.duration : a.currentTime + delta;
    a.currentTime = Math.max(0, Math.min(a.currentTime + delta, max));
    setCurrent(a.currentTime);
  }, []);

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

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !Number.isFinite(a.duration)) return;
    a.currentTime = Number(e.target.value);
    setCurrent(a.currentTime);
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
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        >
          <span className="aplayer__btn-ico" aria-hidden="true">{playing ? PauseIcon : PlayIcon}</span>
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
