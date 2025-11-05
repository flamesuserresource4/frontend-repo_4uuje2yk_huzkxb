import { useEffect, useMemo, useState } from 'react';
import { PlayCircle, PauseCircle, RotateCcw } from 'lucide-react';

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export default function FocusTimer() {
  const presets = [5, 10, 15, 25];
  const [minutes, setMinutes] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const [running, setRunning] = useState(false);

  // Keep seconds in sync when minutes changes via preset
  useEffect(() => {
    setSecondsLeft(minutes * 60);
  }, [minutes]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const progress = useMemo(() => {
    const total = minutes * 60 || 1;
    const ratio = 1 - secondsLeft / total;
    return Math.min(1, Math.max(0, ratio));
  }, [minutes, secondsLeft]);

  const circle = {
    size: 160,
    stroke: 10,
  };
  const radius = (circle.size - circle.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * progress;

  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Focus session</h2>
          <div className="flex gap-2">
            {presets.map((m) => (
              <button
                key={m}
                onClick={() => {
                  setRunning(false);
                  setMinutes(m);
                }}
                className={`px-3 py-1.5 rounded-lg text-sm border ${minutes === m ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="flex items-center justify-center">
            <svg width={circle.size} height={circle.size} className="block">
              <circle
                cx={circle.size / 2}
                cy={circle.size / 2}
                r={radius}
                stroke="#E5E7EB"
                strokeWidth={circle.stroke}
                fill="none"
              />
              <circle
                cx={circle.size / 2}
                cy={circle.size / 2}
                r={radius}
                stroke="url(#grad)"
                strokeWidth={circle.stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                transform={`rotate(-90 ${circle.size / 2} ${circle.size / 2})`}
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <div className="text-5xl font-bold tracking-tight text-gray-900">
              {formatTime(secondsLeft)}
            </div>
            <p className="text-gray-600">Stay present. We’ll gently nudge you when time’s up.</p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <button
                onClick={() => setRunning((r) => !r)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white shadow ${running ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gray-900 hover:bg-black'}`}
              >
                {running ? <PauseCircle size={18} /> : <PlayCircle size={18} />}
                {running ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setRunning(false);
                  setSecondsLeft(minutes * 60);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
