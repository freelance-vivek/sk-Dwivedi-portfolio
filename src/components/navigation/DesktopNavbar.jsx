import { NavLink } from 'react-router-dom';
import { desktopNavbarLinks, siteImages } from '../../data/homeData';
import MagneticButton from '../common/MagneticButton';

export default function DesktopNavbar() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-[#f6f9ff] px-8 py-4 shadow-[-8px_-8px_20px_#ffffff,8px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover neumorphic-elevated"
            alt="SK Dwivedi logo"
            src={siteImages.logo}
          />
          <span className="text-2xl font-black uppercase tracking-tighter text-[#00478d]">
            SK DWIVEDI
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {desktopNavbarLinks.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-[#00478d] py-1 font-bold text-[#00478d] transition-all duration-300 ease-out'
                  : 'py-1 font-medium text-[#44474e] transition-all duration-300 ease-out hover:text-[#005eb8]'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <MagneticButton className="rounded-full bg-[#00478d] px-6 py-2 font-bold text-white shadow-[-4px_-4px_12px_#ffffff,4px_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-95">
          Enroll Now
        </MagneticButton>
      </nav>
    </div>
  );
}
