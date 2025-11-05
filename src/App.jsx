import Header from './components/Header';
import FocusTimer from './components/FocusTimer';
import UsageStats from './components/UsageStats';
import GoalPlanner from './components/GoalPlanner';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <FocusTimer />
            <UsageStats />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <GoalPlanner />
            <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Mindful tips</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                <li>Turn your phone grayscale during focus sessions.</li>
                <li>Place Instagram on the last page of your home screen.</li>
                <li>Batch check messages at set times instead of constantly.</li>
                <li>Hide like counts to reduce endless scrolling.</li>
              </ul>
            </section>
          </div>
        </div>

        <section className="text-center text-xs text-gray-500">
          Designed to work alongside Instagram to build healthier habits. This demo shows the look and feel of the extension dashboard.
        </section>
      </main>
    </div>
  );
}

export default App;
