import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileBottomNavItems } from '../../data/homeData';

function useScrollDirection(threshold = 8) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastY.current) < threshold) return;
      if (currentY > lastY.current && currentY > 80) setVisible(false);
      else setVisible(true);
      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return visible;
}

function MobileBottomNav() {
  const visible = useScrollDirection();
  const location = useLocation();

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-md -translate-x-1/2"
          aria-label="Mobile bottom navigation"
        >
          <div className="relative rounded-[3rem] bg-[#f6f9ff] px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(0,0,0,0.03)]">
            <div className="flex items-end justify-between gap-1">
              {mobileBottomNavItems.map((item) => {
                const isActive = item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path);
                return (
                  <NavLink key={item.path} to={item.path} className="relative flex-1">
                    <motion.div whileTap={{ scale: 0.9 }} className="relative flex flex-col items-center justify-center py-2 transition-all duration-200 ease-out">
                      {isActive && (
                        <motion.div
                          layoutId="mobile-nav-pill"
                          className="absolute inset-x-1 inset-y-0 rounded-full bg-[#00478d] shadow-inner"
                          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                        />
                      )}

                      <span className={`material-symbols-outlined relative z-10 ${isActive ? 'text-white' : 'text-[#7c5800]'}`}>
                        {item.icon}
                      </span>
                      <span className={`relative z-10 mt-1 font-['Plus_Jakarta_Sans'] ${isActive ? 'text-[8px] text-white' : 'text-[10px] text-[#7c5800]'} font-semibold uppercase tracking-widest`}>
                        {item.label}
                      </span>
                    </motion.div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default MobileBottomNav;
