import { motion } from 'framer-motion';
import { createWhatsAppLink, storeArea, storeCity } from '../data/storeInfo';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
            <span className="text-[#c9a84c] text-lg">✦</span>
            <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Experience the
            <br />
            <span className="bg-gradient-to-r from-[#e8d48b] via-[#c9a84c] to-[#a07c1c] bg-clip-text text-transparent">
              Fragrance Today
            </span>
          </h2>

          <p className="text-[#8a8a8a] text-base sm:text-lg max-w-xl mx-auto mb-10">
            Your signature scent awaits. Trusted by fragrance lovers across {storeArea}, {storeCity} for rich,
            long-lasting attars and quick WhatsApp support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#collection"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] text-[#0a0a0a] font-bold text-sm sm:text-base tracking-wider uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.4)]"
            >
              <span className="relative z-10">Buy Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href={createWhatsAppLink(`Hi, I'm from ${storeArea}, ${storeCity} and I'd like to explore your attar collection`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 sm:px-12 py-4 sm:py-5 border border-emerald-500/30 text-emerald-400 text-sm sm:text-base tracking-wider uppercase rounded-sm hover:bg-emerald-500/5 hover:border-emerald-500/50 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[#8a8a8a] text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Free Shipping Above ₹999
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              100% Genuine Products
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Easy Returns
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
