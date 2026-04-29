import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, type Product } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const mensProducts = products.filter((product) => product.segment === 'Men');
  const womensProducts = products.filter((product) => product.segment === 'Women');
  const unisexProducts = products.filter((product) => product.segment === 'Unisex');

  return (
    <section id="collection" className="relative py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-[#c9a84c]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 block">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Shop Our{' '}
            <span className="bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">
              Full Collection
            </span>
          </h2>
          <p className="text-[#8a8a8a] max-w-lg mx-auto">
            Discover bestselling attars, dedicated men&apos;s and women&apos;s picks, and a larger catalog built around long-lasting alcohol-free blends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {[
            {
              title: 'All Products',
              count: products.length,
              copy: 'Browse the complete attar lineup in one place.',
              href: '#collection',
            },
            {
              title: "Men's Section",
              count: mensProducts.length,
              copy: 'Woody, musky, leathery, and deeper signature profiles.',
              href: '#mens',
            },
            {
              title: "Women's Section",
              count: womensProducts.length,
              copy: 'Soft florals, elegant musks, and luminous daily wear.',
              href: '#womens',
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-[#c9a84c]/15 bg-[#111111]/80 px-5 py-6 sm:px-6 sm:py-7 hover:border-[#c9a84c]/35 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-[#8a8a8a] text-xs tracking-[0.25em] uppercase">{item.title}</span>
              <div className="mt-3 flex items-end justify-between gap-3">
                <p className="text-3xl sm:text-4xl font-serif text-white">{item.count}</p>
                <span className="text-[#c9a84c] text-xs uppercase tracking-[0.25em]">Products</span>
              </div>
              <p className="mt-3 text-sm text-[#8a8a8a] leading-relaxed">{item.copy}</p>
            </motion.a>
          ))}
        </div>

        <div className="space-y-14 sm:space-y-20">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Shop All</span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white">Complete Attar Catalog</h3>
                <p className="mt-2 text-sm sm:text-base text-[#8a8a8a] max-w-2xl">
                  Everything in one place, including men&apos;s, women&apos;s, and unisex fragrance options.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-[#8a8a8a]">
                <span className="rounded-full border border-[#c9a84c]/15 px-3 py-2">{products.length} Total</span>
                <span className="rounded-full border border-[#c9a84c]/15 px-3 py-2">{unisexProducts.length} Unisex</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewProduct={setSelectedProduct}
                />
              ))}
            </div>
          </div>

          <div id="mens" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">For Men</span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white">Men&apos;s Attar Collection</h3>
                <p className="mt-2 text-sm sm:text-base text-[#8a8a8a] max-w-2xl">
                  Bolder scent profiles with oud, musk, sandalwood, leather, and evening-friendly depth.
                </p>
              </div>
              <span className="rounded-full border border-[#c9a84c]/15 px-3 py-2 text-xs uppercase tracking-[0.25em] text-[#8a8a8a] w-fit">
                {mensProducts.length} Products
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {mensProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewProduct={setSelectedProduct}
                />
              ))}
            </div>
          </div>

          <div id="womens" className="scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
              <div>
                <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">For Women</span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white">Women&apos;s Attar Collection</h3>
                <p className="mt-2 text-sm sm:text-base text-[#8a8a8a] max-w-2xl">
                  Floral, elegant, creamy, and soft musk-based blends designed for graceful everyday wear.
                </p>
              </div>
              <span className="rounded-full border border-[#c9a84c]/15 px-3 py-2 text-xs uppercase tracking-[0.25em] text-[#8a8a8a] w-fit">
                {womensProducts.length} Products
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {womensProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onViewProduct={setSelectedProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
