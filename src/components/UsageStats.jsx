import { Activity, Clock, Target } from 'lucide-react';

const Stat = ({ label, value, sub }) => (
  <div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-semibold text-gray-900">{value}</div>
    {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
  </div>
);

export default function UsageStats() {
  return (
    <section className="w-full">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Activity size={18} /> Usage overview</h2>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <Stat label="Avg daily" value="42m" sub="down 18%" />
          <Stat label="Longest session" value="27m" sub="on Sunday" />
          <Stat label="Sessions avoided" value="12" sub="with reminders" />
          <Stat label="Goal progress" value="86%" sub="this week" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 text-gray-700 mb-3"><Clock size={16} /> Time by day</div>
            <div className="flex items-end gap-2 h-28 w-full">
              {[32, 40, 24, 56, 44, 30, 20].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gradient-to-t from-blue-200 to-fuchsia-300 rounded-t-md" style={{ height: `${h}%` }} />
                  <span className="text-[10px] text-gray-500">{"SMTWTFS"[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2 text-gray-700 mb-3"><Target size={16} /> Goal adherence</div>
            <div className="space-y-3">
              {[['Open app after 8pm', 72], ['Breaks every 15m', 88], ['Daily limit under 1h', 92]].map(([label, val], i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{label}</span>
                    <span className="text-gray-500">{val}%</span>
                  </div>
                  <div className="h-2 w-full bg-white border border-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-fuchsia-500 to-blue-500" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
