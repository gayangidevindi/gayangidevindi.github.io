import React from 'react';

function PortfolioLoader() {
  const [phase, setPhase] = React.useState('loading');

  React.useEffect(() => {
    const exitTimer = window.setTimeout(() => setPhase('exiting'), 1800);
    const removeTimer = window.setTimeout(() => setPhase('hidden'), 2400);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={`portfolio-loader fixed inset-0 z-[200] flex items-center justify-center bg-[#08080c] px-6 transition-all duration-700 ${phase === 'exiting' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className={`portfolio-loader-content flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/[0.08] bg-white/[0.025] px-7 py-10 text-center shadow-[0_24px_80px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-12 ${phase === 'exiting' ? 'scale-95 blur-sm' : 'scale-100'}`}>
        <div className="portfolio-loader-ring relative mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.08]">
          <div className="absolute inset-[-1px] rounded-full border border-transparent border-t-orange-400 border-r-amber-500" />
          <span className="portfolio-loader-initials text-2xl font-semibold tracking-[0.18em] text-white">YASH</span>
        </div>

        <p className="portfolio-loader-name text-sm font-semibold tracking-[0.24em] text-white sm:text-base">GAYANGI DEVINDI</p>
        <p className="portfolio-loader-title mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-orange-300/70">Software Engineer</p>

        <div className="mt-10 w-full">
          <div className="mb-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            <span>Initializing portfolio</span>
            <span>Ready soon</span>
          </div>
          <div className="h-px w-full overflow-hidden bg-white/10" aria-hidden="true">
            <div className="portfolio-loader-progress h-full bg-gradient-to-r from-orange-500 to-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioLoader;
