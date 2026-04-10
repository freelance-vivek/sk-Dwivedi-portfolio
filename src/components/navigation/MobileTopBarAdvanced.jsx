import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { siteImages } from '../../data/homeData';

function MobileTopBarAdvanced() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        width: scrolled ? 'calc(100% - 1rem)' : '100%',
        y: scrolled ? 6 : 0,
        borderRadius: scrolled ? '1.75rem' : '0rem',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="fixed left-1/2 top-0 z-50 -translate-x-1/2 px-2"
    >
      <motion.div
        animate={{
          paddingTop: scrolled ? '0.75rem' : '1rem',
          paddingBottom: scrolled ? '0.75rem' : '1rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : '0 0 0 rgba(0,0,0,0)',
          backgroundColor: scrolled ? 'rgba(246,249,255,0.82)' : 'rgba(246,249,255,0.96)',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        className="flex items-center justify-between border border-white/40 backdrop-blur-2xl"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ width: scrolled ? 36 : 40, height: scrolled ? 36 : 40 }}
            className="overflow-hidden rounded-full bg-surface-container shadow-inner"
          >
            <img alt="SK Logo" className="h-full w-full object-cover" src={siteImages.logo} />
          </motion.div>

          <motion.span
            animate={{ fontSize: scrolled ? '1rem' : '1.125rem', letterSpacing: scrolled ? '-0.02em' : '-0.03em' }}
            className="font-bold text-[#00478d]"
          >
            SK DWIVEDI
          </motion.span>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.03 }}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-primary neumorphic-elevated"
        >
          <span className="material-symbols-outlined">search</span>
        </motion.button>
      </motion.div>
    </motion.header>
  );
}

export default MobileTopBarAdvanced;
