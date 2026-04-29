import { motion } from 'framer-motion';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/useCart';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewProduct: (product: Product) => void;
}

export default function ProductCard({ product, index, onViewProduct }: ProductCardProps) {
  const { addItem } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent-gold)] hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.72)] via-transparent to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discount > 0 && (
              <span className="px-2.5 py-1 bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] text-[#0a0a0a] text-[10px] font-bold tracking-wider uppercase rounded-sm">
                {discount}% OFF
              </span>
            )}
            {product.bestseller && (
               <span className="rounded-sm border border-[var(--accent-gold)]/30 bg-[rgba(10,10,10,0.72)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-gold)] backdrop-blur-sm">
                 Bestseller
               </span>
             )}
            {product.new && (
               <span className="rounded-sm border border-emerald-500/30 bg-[rgba(10,10,10,0.72)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-500 backdrop-blur-sm">
                 New
               </span>
            )}
          </div>

          {/* Quick actions overlay */}
           <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[rgba(10,10,10,0.34)] opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addItem(product)}
              className="w-11 h-11 bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-lg shadow-[#c9a84c]/20"
            >
              <ShoppingBag size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewProduct(product)}
               className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm"
            >
              <Eye size={18} />
            </motion.button>
          </div>
        </div>

        {/* Content */}
          <div className="p-4 sm:p-5">
           <div className="mb-2 flex items-center gap-1.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={12}
                 className={i < Math.floor(product.rating) ? 'fill-[#c9a84c] text-[#c9a84c]' : 'text-[var(--text-muted)]'}
               />
             ))}
             <span className="ml-1 text-xs text-[var(--text-muted)]">({product.reviews})</span>
           </div>

           <h3 className="mb-0.5 font-serif text-lg text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-gold)] sm:text-xl">
             {product.name}
           </h3>
           <p className="mb-3 text-xs uppercase tracking-wider text-[var(--text-muted)]">{product.category} · {product.volume}</p>

           <div className="flex items-center justify-between">
             <div className="flex items-baseline gap-2">
               <span className="text-lg font-bold text-[var(--accent-gold)]">₹{product.price.toLocaleString()}</span>
               <span className="text-sm text-[var(--text-muted)] line-through">₹{product.originalPrice.toLocaleString()}</span>
             </div>
             <button
               onClick={() => addItem(product)}
               className="rounded-md border border-[var(--accent-gold)]/30 p-2 text-[var(--accent-gold)] transition-all duration-300 hover:bg-[var(--accent-gold)] hover:text-[#0a0a0a]"
             >
               <ShoppingBag size={16} />
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
