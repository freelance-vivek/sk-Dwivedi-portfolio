import useMobile from '../../hooks/useMobile';

function DesktopContact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-20 max-w-3xl text-left">
        <div className="mb-4 font-bold tracking-widest text-[#7c5800] opacity-80">ENROLLMENT 2024 // ADMISSIONS OPEN</div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#00478d] leading-tight">Start Your <span className="text-[#feb700]">Story</span> In The Quantum Realm.</h1>
        <p className="mt-6 max-w-xl text-lg text-[#424752]">Your journey towards mastering the laws of the universe begins with a single conversation.</p>
      </header>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <section className="lg:col-span-7"><div className="rounded-xl bg-white p-8 md:p-12 neumorphic-raised"><form className="space-y-8"><div className="grid grid-cols-1 gap-8 md:grid-cols-2"><input className="w-full rounded-lg p-4 neumorphic-inset" placeholder="Full Name" /><input className="w-full rounded-lg p-4 neumorphic-inset" placeholder="Email Address" /></div><select className="w-full rounded-lg p-4 neumorphic-inset"><option>IIT-JEE Advanced Physics</option></select><textarea rows="5" className="w-full rounded-lg p-4 neumorphic-inset" placeholder="Tell us about your academic goals..." /><button className="flex items-center justify-center gap-3 rounded-full bg-[#00478d] px-12 py-4 text-lg font-bold text-white neumorphic-raised">Begin Your Story <span className="material-symbols-outlined">arrow_forward</span></button></form></div></section>
        <aside className="space-y-12 lg:col-span-5"><div className="space-y-6"><h2 className="text-2xl font-bold tracking-tight text-[#00478d]">Connect with the Institute</h2><div className="grid gap-6"><div className="rounded-lg border-l-4 border-[#feb700] bg-white p-6 neumorphic-flat"><div className="flex items-start gap-4"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-inner text-primary"><span className="material-symbols-outlined">location_on</span></div><div><h4 className="mb-1 text-xs font-bold uppercase tracking-widest text-[#00478d]">Campus Headquarters</h4><p className="text-on-surface">The Sanctuary, Beohari</p><p className="text-sm text-[#424752]">Madhya Pradesh, 484774</p></div></div></div></div></div></aside>
      </div>
    </main>
  );
}

function MobileContact() {
  return (
    <main className="px-6 pb-36 pt-24">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#00478d]">Contact</h1>
      <p className="mb-6 text-[#424752]">Let&apos;s start your academic journey with one conversation.</p>
      <div className="rounded-2xl bg-white p-6 neumorphic-raised"><input className="mb-4 w-full rounded-lg p-4 neumorphic-inset" placeholder="Full Name" /><input className="mb-4 w-full rounded-lg p-4 neumorphic-inset" placeholder="Email" /><textarea rows="4" className="mb-4 w-full rounded-lg p-4 neumorphic-inset" placeholder="Your Inquiry" /><button className="w-full rounded-full bg-[#00478d] px-8 py-4 font-bold text-white">Begin Your Story</button></div>
    </main>
  );
}

export default function ContactPage() {
  const mobile = useMobile();
  return mobile ? <MobileContact /> : <DesktopContact />;
}
