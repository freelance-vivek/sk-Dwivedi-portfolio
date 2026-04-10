import { Link } from 'react-router-dom';

const links = [
  { label: 'Privacy Policy', href: '/contact' },
  { label: 'Terms of Service', href: '/contact' },
  { label: 'Faculty Portal', href: '/contact' },
  { label: 'Student Login', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t-0 bg-[#eff4fb] px-8 py-12 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-bold uppercase text-[#7c5800]">SK DWIVEDI</span>
          <span className="text-center font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest text-[#44474e] md:text-left">
            © 2024 SK DWIVEDI Institute. All Rights Reserved.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest text-[#44474e] opacity-80 transition-colors hover:text-[#00478d] hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
