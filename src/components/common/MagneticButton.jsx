import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function MagneticButton({ children, className = '', strength = 20, ...props }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 14, mass: 0.2 });
  const y = useSpring(my, { stiffness: 180, damping: 14, mass: 0.2 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.22), transparent 42%)`;

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const cx = px - rect.width / 2;
    const cy = py - rect.height / 2;
    mx.set((cx / (rect.width / 2)) * strength);
    my.set((cy / (rect.height / 2)) * strength);
    glowX.set((px / rect.width) * 100);
    glowY.set((py / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background }} />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
