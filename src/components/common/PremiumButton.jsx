import { motion } from 'framer-motion';
export default function PremiumButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`px-8 py-4 rounded-full font-bold ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
