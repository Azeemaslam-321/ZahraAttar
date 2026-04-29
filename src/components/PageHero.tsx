import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  accent?: string;
  actions?: ReactNode;
  stats?: Array<{ label: string; value: string }>;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  accent = 'rgba(121, 77, 54, 0.45)',
  actions,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-[var(--hero-image-opacity)]" />
        <div className="absolute inset-0 bg-[var(--hero-overlay-vertical)]" />
        <div className="absolute inset-0 bg-[var(--hero-overlay-horizontal)]" />
      </div>

      <div className="absolute left-1/2 top-24 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full blur-[110px] sm:top-28 sm:h-[26rem] sm:w-[26rem] sm:blur-[140px]" style={{ background: accent }} />

      <div className="relative mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[var(--accent-gold)] sm:mb-5 sm:text-[11px] sm:tracking-[0.34em]"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-4xl font-serif text-[2.45rem] leading-[1.02] text-[var(--text-primary)] sm:text-5xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-lg sm:leading-8"
          >
            {description}
          </motion.p>

          {actions ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            >
              {actions}
            </motion.div>
          ) : null}
        </div>

        {stats ? (
          <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 + index * 0.08 }}
                className="border border-[var(--line-soft)] bg-[var(--hero-stat-surface)] px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5"
              >
                <p className="font-serif text-2xl text-[var(--text-primary)] sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[11px] sm:tracking-[0.28em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
