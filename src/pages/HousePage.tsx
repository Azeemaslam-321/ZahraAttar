import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { reviews } from '../data/products';
import { lucknowSeoKeywords } from '../data/storeInfo';

const pillars = [
  {
    title: 'Raw Materials',
    copy: 'Oud, rose, musk, saffron, sandalwood, and resinous notes framed like a house with taste, not a discount shelf.',
  },
  {
    title: 'Slow Craft',
    copy: 'Language, pacing, and page design all now support the idea of a careful fragrance house instead of a crowded marketplace.',
  },
  {
    title: 'Local Ordering',
    copy: 'From ritual discovery to WhatsApp ordering, the experience now supports real Lucknow ecommerce conversion with local relevance.',
  },
];

export default function HousePage() {
  return (
    <>
      <Seo
        title="About Zahra Attars | Lucknow Attar Brand"
        description="Learn about Zahra Attars, a Lucknow-focused alcohol-free attar brand serving oud, musk, rose, festive gifting, and local fragrance buyers across the city."
        keywords={lucknowSeoKeywords}
      />
      <PageHero
        eyebrow="About Zahra Attars"
        title={
          <>
            A Lucknow attar brand with
            <span className="text-[var(--accent-rust)]"> tradition, trust, and local focus.</span>
          </>
        }
        description="This page gives Zahra Attars a real local identity with old Lucknow fragrance culture, alcohol-free attar preferences, festive gifting value, and citywide ecommerce relevance."
        image="/images/about-brand.jpg"
        accent="rgba(143, 78, 56, 0.38)"
        actions={
          <>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#d7c590,#8f4e38)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#120f0b]"
            >
              Explore the Brand
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
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-white/10 bg-[var(--panel-soft)] p-7"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-rust)]">{pillar.title}</p>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{pillar.copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center border border-white/10 bg-[var(--panel-soft)] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Lucknow Brand Voice</p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">Attar selling works better when the content sounds local and real.</h2>
            <p className="mt-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              Zahra now has routes that do different jobs. Home targets Lucknow ecommerce intent, Collection drives shopping, Ritual adds occasion-based discovery, and WhatsApp ordering creates trust. That layered structure makes the store feel more complete and rank-ready.
            </p>
          </div>
          <div className="grid gap-5">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="border border-white/10 bg-[rgba(255,255,255,0.03)] p-6">
                <p className="font-serif text-2xl text-[var(--text-primary)]">“</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{review.text}</p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">
                  {review.name} · {review.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
