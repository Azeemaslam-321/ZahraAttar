import { motion } from 'framer-motion';
import { useCart } from '../context/useCart';

export default function MobileStickyButton() {
  const { totalItems, totalPrice, setIsOpen, items } = useCart();

  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--line-soft)] bg-[color:var(--bg-elevated)]/95 p-3 backdrop-blur-xl md:hidden"
    >
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full items-center justify-between rounded-sm bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0a0a]"
      >
        <span>View Cart ({totalItems})</span>
        <span>₹{totalPrice.toLocaleString()}</span>
      </button>
    </motion.div>
  );
}
