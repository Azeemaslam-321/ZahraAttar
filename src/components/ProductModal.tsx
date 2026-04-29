import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Star, Minus, Plus, Check } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/useCart';
import { createWhatsAppLink, storeArea, storeCity } from '../data/storeInfo';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-[var(--line-soft)] bg-[var(--bg-elevated)] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(10,10,10,0.8)] text-white transition-colors hover:text-[var(--accent-gold)] backdrop-blur-sm"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square md:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-[rgba(20,20,20,0.3)] md:block" />
              {discount > 0 && (
                <span className="absolute left-4 top-4 rounded-sm bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0a0a0a]">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-1.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[#c9a84c] text-[#c9a84c]' : 'text-[#333]'}
                  />
                ))}
                <span className="ml-1.5 text-sm text-[var(--text-secondary)]">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h2 className="mb-1 font-serif text-2xl text-[var(--text-primary)] sm:text-3xl">{product.name}</h2>
              {product.nameAr && (
                 <p className="mb-4 text-sm text-[var(--accent-gold)]/70" dir="rtl">{product.nameAr}</p>
              )}

              <div className="flex items-baseline gap-3 mb-5">
                 <span className="text-2xl font-bold text-[var(--accent-gold)] sm:text-3xl">
                  ₹{product.price.toLocaleString()}
                </span>
                 <span className="text-lg text-[var(--text-muted)] line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-emerald-400 text-sm font-medium">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </span>
              </div>

               <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">{product.description}</p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-[#c9a84c] shrink-0" />
                     <span className="text-[var(--text-secondary)]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Volume */}
               <div className="mb-6 flex items-center gap-3 border-b border-[var(--line-soft)] pb-6">
                 <span className="text-sm text-[var(--text-secondary)]">Volume:</span>
                 <span className="font-medium text-[var(--text-primary)]">{product.volume}</span>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-4">
                 <div className="flex items-center overflow-hidden rounded-md border border-[var(--line-soft)]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                     className="flex h-10 w-10 items-center justify-center text-[var(--text-secondary)] transition-colors hover:bg-[var(--panel-highlight)] hover:text-[var(--accent-gold)]"
                  >
                    <Minus size={16} />
                  </button>
                   <span className="flex h-10 w-12 items-center justify-center border-x border-[var(--line-soft)] font-medium text-[var(--text-primary)]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                     className="flex h-10 w-10 items-center justify-center text-[var(--text-secondary)] transition-colors hover:bg-[var(--panel-highlight)] hover:text-[var(--accent-gold)]"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm tracking-wider uppercase rounded-sm transition-all duration-300 ${
                    added
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] text-[#0a0a0a] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Cart — ₹{(product.price * quantity).toLocaleString()}
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Order */}
              <a
                href={createWhatsAppLink(`Hi, I'd like to order ${product.name} from ${storeArea}, ${storeCity} (Qty: ${quantity}) - Rs.${(product.price * quantity).toLocaleString()}`)}
                target="_blank"
                rel="noopener noreferrer"
                 className="flex w-full items-center justify-center gap-2 rounded-sm border border-emerald-500/30 py-3 text-sm uppercase tracking-wider text-emerald-500 transition-all duration-300 hover:bg-emerald-500/5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
