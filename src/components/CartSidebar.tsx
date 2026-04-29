import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { createWhatsAppLink, storeArea, storeCity } from '../data/storeInfo';

export default function CartSidebar() {
  const navigate = useNavigate();
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-[70]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[80] flex w-full max-w-md flex-col border-l border-[var(--line-soft)] bg-[var(--bg-elevated)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--line-soft)] p-5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-[var(--accent-gold)]" />
                <h3 className="font-serif text-lg text-[var(--text-primary)]">
                  Your Cart ({totalItems})
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="mb-4 text-[var(--text-muted)]" />
                  <p className="mb-1 text-sm text-[var(--text-secondary)]">Your cart is empty</p>
                  <p className="text-xs text-[var(--text-muted)]">Add some luxury attars to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-soft)] p-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="truncate text-sm font-medium text-[var(--text-primary)]">{item.product.name}</h4>
                        <p className="mt-0.5 text-sm font-bold text-[var(--accent-gold)]">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center rounded border border-[var(--line-soft)] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-gold)]"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-sm text-[var(--text-primary)]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded border border-[var(--line-soft)] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-gold)]"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="self-start text-[var(--text-muted)] transition-colors hover:text-red-400"
                      >
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
                <div className="border-t border-[var(--line-soft)] p-5">
                 <div className="mb-2 flex items-center justify-between">
                   <span className="text-sm text-[var(--text-secondary)]">Subtotal</span>
                   <span className="text-lg font-bold text-[var(--text-primary)]">₹{totalPrice.toLocaleString()}</span>
                 </div>
                 <p className="mb-4 text-xs text-[var(--text-muted)]">Shipping calculated at checkout</p>

                 <button
                   onClick={() => {
                     setIsOpen(false);
                     navigate('/checkout');
                   }}
                   className="mb-3 w-full rounded-sm bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] py-3.5 text-sm font-bold uppercase tracking-wider text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                 >
                   Proceed to Checkout
                 </button>

                 <div className="flex items-center justify-between">
                   <a
                    href={createWhatsAppLink(`Hi, I'd like to order from ${storeArea}, ${storeCity}: ${items.map(i => `${i.product.name} x${i.quantity}`).join(', ')} - Total: Rs.${totalPrice.toLocaleString()}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                     className="text-xs text-emerald-500 hover:underline"
                   >
                     Order via WhatsApp →
                   </a>
                   <button
                     onClick={clearCart}
                     className="text-xs text-[var(--text-muted)] transition-colors hover:text-red-400"
                   >
                     Clear Cart
                   </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
