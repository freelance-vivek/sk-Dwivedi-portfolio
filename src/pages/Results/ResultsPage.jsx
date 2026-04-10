import useMobile from '../../hooks/useMobile';

function DesktopResults() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-24">
      <section className="mb-32 flex flex-col items-center text-center">
        <span className="mb-4 font-bold tracking-widest text-[#7c5800]">THE VICTORY MANIFESTED</span>
        <h1 className="mb-8 text-5xl md:text-7xl font-extrabold tracking-tighter text-[#00478d] leading-tight">Sculpting Success in <br /> The Physical Realm</h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#424752]">At Physics Odyssey, we don&apos;t just teach laws; we defy them.</p>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 neumorphic-recessed"><span className="mb-2 text-6xl font-black text-[#00478d]">150+</span><span className="text-xs font-bold uppercase tracking-widest text-[#7c5800]">NIT Admissions</span></div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 neumorphic-recessed"><span className="mb-2 text-6xl font-black text-[#feb700]">98%</span><span className="text-xs font-bold uppercase tracking-widest text-[#00478d]">Success Rate</span></div>
        </div>
      </section>
    </main>
  );
}

function MobileResults() {
  return (
    <main className="px-6 pb-36 pt-24">
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#00478d]">Results</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white p-6 text-center neumorphic-recessed"><div className="text-4xl font-black text-[#00478d]">150+</div><div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#7c5800]">NIT</div></div>
        <div className="rounded-2xl bg-white p-6 text-center neumorphic-recessed"><div className="text-4xl font-black text-[#feb700]">98%</div><div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#00478d]">Rate</div></div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  const mobile = useMobile();
  return mobile ? <MobileResults /> : <DesktopResults />;
}
