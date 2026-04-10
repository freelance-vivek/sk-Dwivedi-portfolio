import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useMobile from '../hooks/useMobile';
import DesktopNavbar from '../components/navigation/DesktopNavbar';
import MobileTopBarAdvanced from '../components/navigation/MobileTopBarAdvanced';
import MobileBottomNav from '../components/navigation/MobileBottomNav';
import ScrollProgressOrb from '../components/common/ScrollProgressOrb';
import Footer from '../components/navigation/Footer';

export default function MainLayout() {
  const location = useLocation();
  const isMobile = useMobile();

  return (
    <div className="min-h-screen bg-[#f6f9ff] text-on-surface">
      {isMobile ? <MobileTopBarAdvanced /> : <DesktopNavbar />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
      <ScrollProgressOrb />
      {isMobile ? <MobileBottomNav /> : null}
    </div>
  );
}
