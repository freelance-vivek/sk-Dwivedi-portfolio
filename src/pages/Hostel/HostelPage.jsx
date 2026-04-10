import useMobile from '../../hooks/useMobile';

function DesktopHostel() {
  return (
    <>
      <header className="relative max-w-7xl mx-auto overflow-hidden px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#7c5800] neumorphic-recessed">The Sanctuary // Residence</div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#00478d] leading-[1.1]">The Peace of <br /> <span className="text-[#feb700]">The Sanctuary</span></h1>
            <p className="max-w-lg text-lg leading-relaxed text-[#424752]">A Home Away From Home. We believe that physical environment is a silent educator.</p>
          </div>
          <div className="relative">
            <div className="h-[500px] w-full overflow-hidden rounded-xl bg-white p-4 neumorphic-elevated">
              <img alt="Hostel Sanctuary" className="h-full w-full rounded-lg object-cover shadow-inner" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZhCwrtFll_9W4sfoZBOR7kDuTgTwpdLK_JjyWzOzmCDrqiRW9FAeBaJt75q4sgrAXh7ObFFjC1Zv-HEQcl_4bJRKdMrBR0dk-UWwjaEkE7KmirgD_DEhfrPmmEzduPzuMM-rjR5NNL1Ng6snIV0sfQV-FJoL_qaB7l54UCDzXz5JRZFqpJM7-c-OIJeXWbA31_VVaQciiWkMF6KWF45BJZhG2NIttM_wbJfaIgSzdZDku-xrGnovWkG_BZlvp_X9wYoN6C2fNK5JH" />
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {['Absolute Discipline', 'Unmatched Safety', 'Body-Fuel Nutrition'].map((t, i) => (
            <div key={t} className="flex flex-col gap-6 rounded-xl bg-white p-10 neumorphic-elevated">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-primary neumorphic-recessed">
                <span className="material-symbols-outlined text-3xl">{i === 0 ? 'policy' : i === 1 ? 'shield_lock' : 'restaurant'}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#00478d]">{t}</h3>
              <p className="text-sm leading-relaxed text-[#424752]">A premium hostel environment that supports discipline, safety and healthy living.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function MobileHostel() {
  return (
    <main className="px-6 pb-36 pt-24">
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#00478d]">The Sanctuary</h1>
      <img alt="Hostel" className="mb-6 h-72 w-full rounded-2xl object-cover neumorphic-elevated" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZhCwrtFll_9W4sfoZBOR7kDuTgTwpdLK_JjyWzOzmCDrqiRW9FAeBaJt75q4sgrAXh7ObFFjC1Zv-HEQcl_4bJRKdMrBR0dk-UWwjaEkE7KmirgD_DEhfrPmmEzduPzuMM-rjR5NNL1Ng6snIV0sfQV-FJoL_qaB7l54UCDzXz5JRZFqpJM7-c-OIJeXWbA31_VVaQciiWkMF6KWF45BJZhG2NIttM_wbJfaIgSzdZDku-xrGnovWkG_BZlvp_X9wYoN6C2fNK5JH" />
      <p className="text-[#424752]">A peaceful residential environment built for focus, rest and academic excellence.</p>
    </main>
  );
}

export default function HostelPage() {
  const mobile = useMobile();
  return mobile ? <MobileHostel /> : <DesktopHostel />;
}
