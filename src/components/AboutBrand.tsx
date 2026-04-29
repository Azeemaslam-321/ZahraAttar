import { motion } from 'framer-motion';
import { storeArea, storeCity } from '../data/storeInfo';

export default function AboutBrand() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#c9a84c]/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#c9a84c]/15">
              <img
                src="/images/about-brand.jpg"
                alt="Zahra Attars Heritage"
                className="w-full h-[350px] sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-[#111111]/90 backdrop-blur-xl border border-[#c9a84c]/20 rounded-lg p-5 shadow-2xl"
            >
              <div className="text-[#c9a84c] font-serif text-3xl font-bold">25+</div>
              <div className="text-[#8a8a8a] text-xs tracking-wider uppercase">Years of Heritage</div>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#c9a84c]/20 rounded-tl-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#c9a84c] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
              A Legacy of{' '}
              <span className="bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">
                Pure Fragrance
              </span>
            </h2>

            <div className="space-y-4 text-[#8a8a8a] leading-relaxed">
              <p>
                Rooted in {storeArea}, {storeCity}, Zahra Attars carries forward a 25-year legacy of crafting
                fine traditional attars for modern fragrance lovers. Our journey began with a simple belief:
                true fragrance should feel pure, memorable, and close to the people who wear it every day.
              </p>
              <p>
                Every attar in our collection is handcrafted using time-honored techniques passed down through
                generations. We source the rarest oud, the most delicate roses, and the purest musk from across
                the world, then curate them for customers in {storeCity} who want premium quality without
                compromising on authenticity.
              </p>
              <p>
                Our mission is simple: to bring beautifully made attars to families across {storeArea},
                {storeCity} at prices that honor both the craft and the customer. Because luxury fragrance
                should feel personal, accessible, and proudly local.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: 'Tradition', value: 'Since 1998' },
                { label: 'Purity', value: '100% Natural' },
                { label: 'Craft', value: 'Handmade' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 border border-[#c9a84c]/10 rounded-md">
                  <div className="text-[#c9a84c] font-serif text-lg font-bold">{item.value}</div>
                  <div className="text-[#8a8a8a] text-xs tracking-wider uppercase mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
