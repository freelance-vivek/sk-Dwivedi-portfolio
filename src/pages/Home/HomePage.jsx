import { motion } from 'framer-motion';
import PremiumButton from '../../components/common/PremiumButton';
import Reveal from '../../components/common/Reveal';
import { siteImages } from '../../data/homeData';
import useMobile from '../../hooks/useMobile';

function DesktopHome() {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-24">
      <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <Reveal>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full neumorphic-recessed text-[#7c5800] font-bold text-xs tracking-widest uppercase">
              THE CALL TO ADVENTURE
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-[#00478d] leading-tight mb-6">
              Mastering Modern <br />
              <span className="text-[#171c21]">Science &amp; Physics</span>
            </h1>
            <p className="text-lg text-[#424752] max-w-md mb-10 leading-relaxed opacity-80">
              The success equation starts here. Step into a world where complex theories become intuitive realities.
            </p>
            <div className="flex flex-wrap gap-6">
              <PremiumButton className="neumorphic-extruded bg-[#00478d] text-white">Begin Your Odyssey</PremiumButton>
              <PremiumButton className="neumorphic-recessed text-[#00478d] bg-transparent">View Curriculum</PremiumButton>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-[#f6f9ff] p-4 neumorphic-extruded">
            <img src={siteImages.founder} alt="Founder" className="h-[500px] w-full rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-10 left-10 right-10 rounded-2xl border border-white/30 bg-white/20 p-6 shadow-2xl backdrop-blur-xl">
              <p className="mb-1 text-xs font-bold tracking-[0.2em] text-[#00478d]">FOUNDER &amp; VISIONARY</p>
              <h3 className="text-2xl font-bold text-[#171c21]">SK Dwivedi</h3>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-3 gap-10 mb-24">
        {['Physics Mastery', 'Chemical Sciences', 'Advanced Mathematics'].map((t, i) => (
          <motion.div whileHover={{ y: -8 }} key={t} className="rounded-3xl border-b-8 border-[#00478d] bg-[#f6f9ff] p-10 neumorphic-extruded">
            <span className="material-symbols-outlined mb-8 block text-5xl text-[#00478d]">{i === 0 ? 'blur_on' : i === 1 ? 'science' : 'functions'}</span>
            <h3 className="mb-4 text-2xl font-bold">{t}</h3>
            <p className="text-sm text-[#424752]">High-impact preparation with conceptual clarity and rank-focused practice.</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

function MobileHome() {
  return (
    <main className="overflow-x-hidden px-0 pb-36 pt-24">
      <section className="px-6 pt-8 pb-12">
        <div className="mb-6 inline-block rounded-full bg-white px-4 py-1 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c5800]">The Physics Odyssey</span>
        </div>
        <h1 className="text-[3.5rem] font-extrabold leading-[0.9] tracking-tighter text-[#00478d]">Mastering<br />Science.</h1>
        <p className="mt-4 max-w-[85%] leading-relaxed text-[#424752] opacity-80">Step into a realm where complex equations transform into intuitive laws.</p>
        <div className="relative mt-8">
          <img src={siteImages.founder} alt="Founder" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[-12px_-12px_30px_#ffffff,12px_12px_30px_rgba(0,0,0,0.1)]" />
          <div className="absolute -bottom-6 right-0 rounded-xl border border-white/20 bg-white/20 p-5 backdrop-blur-xl neumorphic-extruded">
            <span className="block text-lg font-bold text-[#00478d]">SK Dwivedi</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#7c5800]">Founder &amp; Mentor</span>
          </div>
        </div>
      </section>

      <section className="bg-white/60 px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold">The Training Ground</h2>
        <div className="rounded-2xl bg-[#f6f9ff] p-3 neumorphic-extruded">
          <img src={siteImages.lab} alt="Lab" className="mb-4 h-48 w-full rounded-xl object-cover" />
          <h3 className="mb-2 px-2 text-xl font-bold text-[#00478d]">Kinetic Laboratory</h3>
          <p className="px-2 pb-4 text-sm text-[#424752]">Where theory meets reality with experiments designed for deep discovery.</p>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  const mobile = useMobile();
  return mobile ? <MobileHome /> : <DesktopHome />;
}
