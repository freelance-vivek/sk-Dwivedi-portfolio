import useMobile from '../../hooks/useMobile';

function DesktopCourses() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <header className="mb-24 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-[#7c5800]">The Knowledge Path</span>
        <h1 className="mb-8 text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-[#00478d]">Navigating <br /> <span className="text-[#feb700]">Universal Laws</span></h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#424752] opacity-80">An odyssey through the foundational principles of reality.</p>
      </header>
      <section className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="group relative overflow-hidden rounded-xl bg-white p-10 neumorphic-elevated md:col-span-8"><h3 className="mb-4 text-3xl font-bold text-[#00478d]">Advanced Mechanics</h3><p className="max-w-lg text-[#424752]">Deep dive into classical and quantum dynamics.</p></div>
        <div className="rounded-xl bg-white p-10 neumorphic-elevated md:col-span-4"><h3 className="mb-4 text-2xl font-bold">Calculus Mastery</h3><p className="text-sm text-[#424752]">Mastering the language of change.</p></div>
      </section>
    </main>
  );
}

function MobileCourses() {
  return (
    <main className="px-6 pb-36 pt-24">
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#00478d]">Courses</h1>
      <div className="space-y-4">
        {['Advanced Mechanics', 'Calculus Mastery', 'Organic Synthesis'].map((item) => (
          <div key={item} className="rounded-2xl bg-white p-6 neumorphic-elevated">
            <h3 className="mb-2 text-xl font-bold text-[#00478d]">{item}</h3>
            <p className="text-sm text-[#424752]">Structured learning paths focused on conceptual clarity and performance.</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function CoursesPage() {
  const mobile = useMobile();
  return mobile ? <MobileCourses /> : <DesktopCourses />;
}
