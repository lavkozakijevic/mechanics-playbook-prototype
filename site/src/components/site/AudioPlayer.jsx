/* Website kit — Audio player for shortcasts. A compact, self-contained player
   with play/pause, a seekable progress bar, and elapsed / total time. Styled
   with the site's tokens; no external dependencies. */
import React, { useRef, useState, useCallback } from "react";

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

function fmt(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, durationLabel }) {
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

  const onTime = () => setCurrent(audioRef.current?.currentTime ?? 0);
  const onMeta = () => {
    setDuration(audioRef.current?.duration ?? 0);
    setReady(true);
  };
  const onEnded = () => { setPlaying(false); setCurrent(0); };

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
        onEnded={onEnded}
      />
      <button
        type="button"
        className="aplayer__btn"
        onClick={toggle}
        aria-label={playing ? `Pause ${title}` : `Play ${title}`}
      >
        <span className="aplayer__btn-ico" aria-hidden="true">{playing ? PauseIcon : PlayIcon}</span>
      </button>

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
          <span className="aplayer__t aplayer__t--dur">{ready ? fmt(duration) : (durationLabel || "--:--")}</span>
        </div>
      </div>
    </div>
  );
}
