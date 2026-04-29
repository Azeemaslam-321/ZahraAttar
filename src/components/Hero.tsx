import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { storeArea, storeCity } from '../data/storeInfo';

type SmokeParticleConfig = {
  id: number;
  delay: number;
  x: number;
  duration: number;
  driftA: number;
  driftB: number;
  repeatDelay: number;
};

function getWave(seed: number) {
  return Math.sin(seed * 12.9898) * 43758.5453;
}

const smokeParticles: SmokeParticleConfig[] = Array.from({ length: 15 }, (_, i) => {
  const base = Math.abs(getWave(i + 1));

  return {
    id: i,
    delay: i * 0.8,
    x: 30 + (base % 1) * 40,
    duration: 4 + (Math.abs(getWave(i + 5)) % 1) * 3,
    driftA: ((Math.abs(getWave(i + 9)) % 1) - 0.5) * 100,
    driftB: ((Math.abs(getWave(i + 13)) % 1) - 0.5) * 200,
    repeatDelay: (Math.abs(getWave(i + 17)) % 1) * 3,
  };
});

function SmokeParticle({ delay, x, duration, driftA, driftB, repeatDelay }: SmokeParticleConfig) {
  return (
    <motion.div
      className="absolute bottom-0 w-1 rounded-full"
      style={{
        left: `${x}%`,
        background: 'linear-gradient(to top, rgba(201,168,76,0.15), transparent)',
        filter: 'blur(8px)',
      }}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: [0, 200, 350],
        opacity: [0, 0.6, 0],
        x: [0, driftA, driftB],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: 'easeOut',
      }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-attar.jpg"
          alt="Luxury Attar"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
      </div>

      {/* Gold ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#c9a84c]/3 rounded-full blur-[100px]" />

      {/* Smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {smokeParticles.map((p) => (
          <SmokeParticle key={p.id} {...p} />
        ))}
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-[#c9a84c]/30 rounded-full text-[#c9a84c] text-xs sm:text-sm tracking-[0.25em] uppercase backdrop-blur-sm">
            ✦ Premium Attars From {storeArea}, {storeCity} ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6 sm:mb-8"
        >
          Discover the
          <br />
          <span className="bg-gradient-to-r from-[#e8d48b] via-[#c9a84c] to-[#a07c1c] bg-clip-text text-transparent">
            Essence of Luxury
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#8a8a8a] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed"
        >
          Premium attars crafted for timeless fragrance in {storeArea}, {storeCity} where traditional richness
          meets modern luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#collection"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#c9a84c] to-[#a07c1c] text-[#0a0a0a] font-bold text-sm sm:text-base tracking-wider uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8d48b] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 sm:px-10 py-3.5 sm:py-4 border border-[#c9a84c]/30 text-[#c9a84c] text-sm sm:text-base tracking-wider uppercase rounded-sm hover:border-[#c9a84c]/60 hover:bg-[#c9a84c]/5 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '50+', label: 'Attars' },
            { value: '10K+', label: 'Customers' },
            { value: '4.9', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#c9a84c] font-serif text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-[#8a8a8a] text-xs sm:text-sm tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#8a8a8a] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={16} className="text-[#c9a84c]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
