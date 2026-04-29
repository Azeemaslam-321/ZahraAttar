import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

export default function Categories() {
  return (
    <section id="categories" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 block">
            Shop by Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="text-[#8a8a8a] max-w-lg mx-auto">
            From the depths of oud to the delicacy of rose — find your signature scent
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative h-72 sm:h-80 rounded-lg overflow-hidden border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all duration-500">
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />

                {/* Gold glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c9a84c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                  <span className="text-[#c9a84c]/60 text-sm font-serif mb-1" dir="rtl">
                    {category.nameAr}
                  </span>
                  <h3 className="font-serif text-white text-xl sm:text-2xl mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#8a8a8a] text-xs sm:text-sm mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#c9a84c] text-xs tracking-wider uppercase">
                      {category.count} Attars
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#c9a84c] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
