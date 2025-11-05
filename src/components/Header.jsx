import { Settings, Clock, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 flex items-center justify-center text-white shadow">
            <Shield size={18} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Focus for Instagram</h1>
            <p className="text-xs sm:text-sm text-gray-500">A gentler way to reduce screen time</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Clock size={16} />
            <span className="text-sm">Session log</span>
          </button>
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-700" aria-label="Settings">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
