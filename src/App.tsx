import { useState } from 'react';
import { UXAnalysis } from '@/types/analysis';
import { getTheme } from '@/types/theme';
import Header from '@/components/Header';
import InputPanel from '@/components/InputPanel';
import ResultsDashboard from '@/components/ResultsDashboard';
import SavedAudits from '@/components/SavedAudits';

type View = 'input' | 'results';

export default function App() {
  const [view, setView] = useState<View>('input');
  const [analysis, setAnalysis] = useState<UXAnalysis | null>(null);

  const theme = analysis ? getTheme(analysis.category) : getTheme('auto');

  const handleAnalyze = (result: UXAnalysis) => {
    setAnalysis(result);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSaved = (saved: UXAnalysis) => {
    setAnalysis(saved);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEdit = () => {
    setView('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNew = () => {
    setAnalysis(null);
    setView('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-theme ${theme.pageTint} text-slate-900`}>
      <Header />
      <main className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {view === 'input' && (
          <>
            <InputPanel onAnalyze={handleAnalyze} />
            <SavedAudits onOpen={handleOpenSaved} onDelete={() => {}} />
          </>
        )}
        {view === 'results' && analysis && (
          <ResultsDashboard analysis={analysis} onEdit={handleEdit} onNew={handleNew} />
        )}
      </main>
      <footer className="border-t border-slate-200/80 bg-white/50 px-4 py-6 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-xs text-slate-400">
          UXAudit — A local, rule-based UX analysis tool. No account, no external API.
        </div>
      </footer>
    </div>
  );
}
