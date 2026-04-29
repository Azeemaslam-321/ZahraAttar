import { motion } from 'framer-motion';
import { Droplets, Clock, Leaf, Gem } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: '100% Alcohol-Free',
    description: 'Pure, skin-friendly formulations with zero alcohol. Safe for sensitive skin and perfect for daily wear.',
  },
  {
    icon: Clock,
    title: 'Long Lasting 12+ Hours',
    description: 'Our concentrated attars are designed to last from morning to night, keeping you enveloped in luxury.',
  },
  {
    icon: Leaf,
    title: 'Premium Natural Ingredients',
    description: 'Sourced from the finest gardens and forests worldwide. Every drop is nature\'s purest essence.',
  },
  {
    icon: Gem,
    title: 'Affordable Luxury',
    description: 'World-class quality at honest prices. Because true luxury should be accessible, not exclusive.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/3 rounded-full blur-[200px]" />

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
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The Zahra{' '}
            <span className="bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-[#8a8a8a] max-w-lg mx-auto">
            What makes our attars stand apart from the rest — a commitment to purity, longevity, and unmatched quality
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 bg-[#111111]/60 backdrop-blur-sm border border-[#c9a84c]/10 rounded-lg hover:border-[#c9a84c]/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.06)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#c9a84c]/10 to-transparent border border-[#c9a84c]/15 flex items-center justify-center mb-5 group-hover:border-[#c9a84c]/30 transition-colors duration-300">
                <feature.icon size={24} className="text-[#c9a84c]" />
              </div>

              <h3 className="font-serif text-white text-lg sm:text-xl mb-3 group-hover:text-[#c9a84c] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">{feature.description}</p>

              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
