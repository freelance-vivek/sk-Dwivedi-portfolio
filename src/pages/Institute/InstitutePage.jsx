import useMobile from '../../hooks/useMobile';

function DesktopInstitute() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <header className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row">
        <div className="max-w-2xl">
          <span className="mb-4 block text-xs font-bold tracking-[0.2em] text-[#7c5800]">FACILITY BLUEPRINT // BEOHARI HQ</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#00478d] leading-[0.9]">The Training <br /><span className="text-[#171c21]">Ground.</span></h1>
        </div>
        <div className="max-w-xs pb-2 text-right">
          <p className="text-sm italic leading-relaxed text-[#424752]">&quot;Physics is not a subject of the books, it&apos;s a phenomenon of the physical world. Here, we build the lens to see it.&quot;</p>
          <span className="mt-2 block text-[10px] font-bold tracking-widest text-[#7c5800]">— SK DWIVEDI</span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <section className="group md:col-span-8">
          <div className="rounded-xl bg-white p-1 neumorphic-extruded transition-all duration-500 hover:shadow-none">
            <div className="relative h-[450px] overflow-hidden rounded-lg">
              <img className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALFfnrxnutBn2kvdN-Kj7uMm9Ndk_O1MZFZMRpmTNZCSslIgVXCYXol9Lcf3gp1aep5pMU2bfce4RAhaQsZJKGl5S7mrvyBjgLz7B459kN9SgOqw4w3Wq0V7KS4UmFX8QA8ZHQNgAdm-_YlXEHLqqmYIPVDKSCaPHM1W9WWPueswBM3RrNAiAmRqUYHj2CVmMFAdRjhnag9rnd4qr7vHyJFigq9wgX2v-yVyaLOtsZmIDwy6QG3_Zq4bI9ek-mZYjZqSXXQN1Cjw0c" alt="Experimental Quantum Labs" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#00478d]/80 to-transparent p-10">
                <span className="mb-2 text-[10px] font-bold tracking-[0.3em] text-[#feb700]">SECTOR 01</span>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Experimental Quantum Labs</h2>
                <p className="max-w-md text-sm leading-relaxed text-[#c8daff]">Our flagship research space equipped with high-precision optics and computational clusters for real-time kinematic analysis.</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="flex items-center justify-center rounded-xl bg-white p-8 neumorphic-recessed md:col-span-4">
          <div className="text-center">
            <span className="material-symbols-outlined mb-6 block text-4xl text-[#7c5800]">format_quote</span>
            <p className="mb-6 text-lg font-medium leading-tight text-[#00478d]">The lab is where theory meets reality. If you can&apos;t measure it, you don&apos;t know it.</p>
            <div className="mx-auto mb-4 h-px w-12 bg-[#c2c6d4]"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#424752]">MASTER&apos;S PRINCIPLE</span>
          </div>
        </aside>
      </div>
    </main>
  );
}

function MobileInstitute() {
  return (
    <main className="px-6 pb-36 pt-24">
      <header className="mb-10">
        <span className="mb-4 block text-xs font-bold tracking-[0.2em] text-[#7c5800]">FACILITY BLUEPRINT</span>
        <h1 className="text-4xl font-extrabold tracking-tight text-[#00478d]">The Training Ground</h1>
      </header>
      <div className="rounded-2xl bg-white p-3 neumorphic-extruded">
        <img className="mb-4 h-56 w-full rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALFfnrxnutBn2kvdN-Kj7uMm9Ndk_O1MZFZMRpmTNZCSslIgVXCYXol9Lcf3gp1aep5pMU2bfce4RAhaQsZJKGl5S7mrvyBjgLz7B459kN9SgOqw4w3Wq0V7KS4UmFX8QA8ZHQNgAdm-_YlXEHLqqmYIPVDKSCaPHM1W9WWPueswBM3RrNAiAmRqUYHj2CVmMFAdRjhnag9rnd4qr7vHyJFigq9wgX2v-yVyaLOtsZmIDwy6QG3_Zq4bI9ek-mZYjZqSXXQN1Cjw0c" alt="Lab" />
        <h2 className="mb-2 text-2xl font-bold text-[#00478d]">Experimental Quantum Labs</h2>
        <p className="text-sm leading-relaxed text-[#424752]">A premium academic core designed for hands-on discovery and measurable learning outcomes.</p>
      </div>
    </main>
  );
}

export default function InstitutePage() {
  const mobile = useMobile();
  return mobile ? <MobileInstitute /> : <DesktopInstitute />;
}
