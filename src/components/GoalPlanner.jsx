import { useState } from 'react';
import { Target, Bell, Moon } from 'lucide-react';

export default function GoalPlanner() {
  const [dailyLimit, setDailyLimit] = useState(60);
  const [breakInterval, setBreakInterval] = useState(15);
  const [nightBlock, setNightBlock] = useState(true);

  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Target size={18} /> Plan your goals</h2>
          <span className="text-sm text-gray-500">Personalized limits</span>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Daily limit</span>
              <span className="text-sm font-medium text-gray-900">{Math.round(dailyLimit)} minutes</span>
            </div>
            <input
              type="range"
              min={10}
              max={120}
              step={5}
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
              className="w-full accent-fuchsia-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-700">Break reminder every</span>
              <span className="text-sm font-medium text-gray-900">{breakInterval} minutes</span>
            </div>
            <input
              type="range"
              min={5}
              max={30}
              step={5}
              value={breakInterval}
              onChange={(e) => setBreakInterval(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                <Moon size={16} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Quiet hours</div>
                <div className="text-xs text-gray-500">Reduce notifications at night</div>
              </div>
            </div>
            <label className="inline-flex items-center cursor-pointer select-none">
              <input type="checkbox" className="sr-only peer" checked={nightBlock} onChange={(e) => setNightBlock(e.target.checked)} />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-900 transition-colors relative">
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Bell size={16} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">Gentle nudges</div>
                <div className="text-xs text-gray-500">Get subtle reminders before you over-scroll</div>
              </div>
            </div>
            <button className="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50">Customize</button>
          </div>
        </div>
      </div>
    </section>
  );
}
