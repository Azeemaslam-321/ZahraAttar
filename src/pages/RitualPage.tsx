import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { lucknowSeoKeywords } from '../data/storeInfo';

const rituals = [
  {
    title: 'Morning Signature',
    mood: 'Clean presence',
    copy: 'Soft musk and floral brightness for office, visits, and everyday polish.',
    route: '/collection',
    accent: 'var(--accent-sage)',
  },
  {
    title: 'Evening Entrance',
    mood: 'Bold depth',
    copy: 'Oud, amber, leather, and richer woods for dinners, weddings, and standout nights.',
    route: '/collection',
    accent: 'var(--accent-rust)',
  },
  {
    title: 'Quiet Ritual',
    mood: 'Reflective calm',
    copy: 'Sandalwood-led blends that feel intimate, grounded, and meditative on skin.',
    route: '/house',
    accent: 'var(--accent-gold)',
  },
];

const wardrobeMoments = [
  'Office and daily wear',
  'Jumma and festive gatherings',
  'Wedding gifting and boxed sets',
  'Evening statement attars',
];

export default function RitualPage() {
  return (
    <>
      <Seo
        title="Attar for Eid, Jumma and Daily Wear in Lucknow"
        description="Find the right attar in Lucknow for Eid, Jumma, nikah gifting, office wear, and evening occasions with alcohol-free oud, musk, and floral blends."
        keywords={lucknowSeoKeywords}
      />
      <PageHero
        eyebrow="Attar by Occasion"
        title={
          <>
            Pick attars by
            <span className="text-[var(--accent-sage)]"> Eid, Jumma, gifting, and daily wear.</span>
          </>
        }
        description="This page is built around the way many Lucknow buyers think about fragrance: Friday wear, family gatherings, wedding gifting, evening presence, and clean daily-use attars."
        image="/images/about-brand.jpg"
        accent="rgba(95, 111, 82, 0.42)"
        actions={
          <>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#d9cca1,#5f6f52)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#120f0b]"
            >
              Browse by Occasion
            </Link>
            <Link
              to="/concierge"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line-soft)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)]"
            >
              Order on WhatsApp
            </Link>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {rituals.map((ritual, index) => (
            <motion.div
              key={ritual.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-white/10 bg-[var(--panel-soft)] p-7"
            >
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: ritual.accent }}>{ritual.mood}</p>
              <h2 className="mt-4 font-serif text-3xl text-[var(--text-primary)]">{ritual.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{ritual.copy}</p>
              <Link
                to={ritual.route}
                className="mt-8 inline-flex text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)] transition hover:text-[var(--accent-gold)]"
              >
                Explore route
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden border border-white/10">
            <img src="/images/category-sandalwood.jpg" alt="Fragrance ritual" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center border border-white/10 bg-[var(--panel-soft)] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Scent Wardrobe</p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">Give customers a reason to stay longer.</h2>
            <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              A site starts feeling premium when it helps people imagine how they will wear the product. This page introduces that layer, so the website feels more thoughtful and brand-led.
            </p>
            <div className="mt-8 grid gap-3">
              {wardrobeMoments.map((item) => (
                <div key={item} className="border border-white/8 px-4 py-3 text-sm text-[var(--text-secondary)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
