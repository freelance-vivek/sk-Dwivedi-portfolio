import { motion, useScroll, useSpring } from 'framer-motion';
function polarToCartesian(cx, cy, r, angle) { const rad = ((angle - 90) * Math.PI) / 180; return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }; }
function describeArc(x, y, radius, startAngle, endAngle) { const start = polarToCartesian(x, y, radius, endAngle); const end = polarToCartesian(x, y, radius, startAngle); const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'; return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`; }
export default function ScrollProgressOrb() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });
  const arcPath = describeArc(30, 30, 24, 0, 359.99);
  return (
    <motion.button whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.06 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-28 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/25 backdrop-blur-xl shadow-[-8px_-8px_20px_#ffffff,8px_8px_20px_rgba(0,0,0,0.1)]" aria-label="Scroll to top">
      <svg viewBox="0 0 60 60" className="absolute inset-0 h-full w-full -rotate-90">
        <path d={arcPath} fill="none" stroke="rgba(124,88,0,0.14)" strokeWidth="2.5" strokeLinecap="round" />
        <motion.path d={arcPath} fill="none" stroke="rgba(254,183,0,0.95)" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: smooth }} />
      </svg>
      <span className="material-symbols-outlined relative z-10 text-[#00478d]">rocket_launch</span>
    </motion.button>
  );
}
