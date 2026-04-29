import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { categories, products } from '../data/products';
import { brandStoryLine, coreLucknowAreas, lucknowAudienceLine, lucknowSeoKeywords } from '../data/storeInfo';

const houseCodes = [
  {
    title: 'Curated for Lucknow',
    copy: 'A collection shaped around the fragrance taste of Lucknow: rich oud, soft rose, clean musk, and gifting blends that feel graceful from the first look.',
  },
  {
    title: 'Built to Be Gifted',
    copy: 'From Eid gifting to nikah hampers and Jumma favourites, every section is written to help buyers quickly understand what suits the moment.',
  },
  {
    title: 'Modern Buying Flow',
    copy: 'The shopping experience stays simple on phone screens, with direct collection browsing, easy checkout, and WhatsApp ordering when someone wants help.',
  },
];

const featuredProducts = products.slice(0, 3);
const quickShopLinks = [
  { label: 'Oud Attar', to: '/collection?category=Oud%20Attar#catalog' },
  { label: 'Rose Attar', to: '/collection?category=Rose%20Attar#catalog' },
  { label: 'Musk Attar', to: '/collection?category=Musk%20Attar#catalog' },
  { label: 'Gift Hampers', to: '/collection?category=Gift%20Hampers#catalog' },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Best Attar Shop in Lucknow | Zahra Attars Online"
        description="Shop alcohol-free attars in Lucknow with oud, musk, rose, and sandalwood options. Ideal for Eid, Jumma, nikah gifting, and daily wear across Chowk, Aminabad, Kaiserbagh, Nakhas, Aliganj, Hazratganj, and more."
        keywords={lucknowSeoKeywords}
        path="/"
      />
      <PageHero
        eyebrow="Lucknow Attar Delivery"
        title={
          <>
            Original attars for
            <span className="text-[var(--accent-gold)]"> Lucknow buyers who want elegance, depth, and lasting fragrance.</span>
          </>
        }
        description={`Zahra Attars is designed for customers who want a refined online attar experience in Lucknow. ${brandStoryLine} ${lucknowAudienceLine}`}
        image="/images/hero-attar.jpg"
        accent="rgba(122, 74, 53, 0.48)"
        actions={
          <>
            <Link
              to="/collection"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#dcc58d,#8f4e38)] px-6 py-3.5 text-[10px] uppercase tracking-[0.24em] text-[#120f0b] sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Shop Lucknow Collection
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/ritual"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--line-soft)] px-6 py-3.5 text-[10px] uppercase tracking-[0.24em] text-[var(--text-primary)] transition hover:border-[var(--accent-sage)] hover:text-[var(--accent-sage)] sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Find by Occasion
            </Link>
          </>
        }
        stats={[
          { value: `${products.length}`, label: 'Attars Online' },
          { value: 'Lucknow', label: 'City Focus' },
          { value: '25+', label: 'Years of Fragrance' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {houseCodes.map((code, index) => (
            <motion.div
              key={code.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-6 sm:p-7"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-rust)]">{code.title}</p>
              <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">{code.copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {quickShopLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="rounded-full border border-[var(--line-soft)] px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[var(--text-secondary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--text-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Lucknow Ecommerce</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
              A storefront that feels premium to clients and natural to read.
            </h2>
          </div>
          <Link
            to="/house"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)] transition hover:text-[var(--accent-gold)]"
          >
            See our local story
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <Link
              to="/collection?category=Oud%20Attar#catalog"
              className="group relative min-h-[24rem] overflow-hidden border border-[var(--line-soft)]"
            >
              <img src="/images/attar-1.jpg" alt="Collection page" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[var(--feature-card-overlay)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-gold)]">Collection</p>
                <h3 className="mt-3 max-w-sm font-serif text-2xl text-[var(--feature-card-text)] sm:text-3xl">Attars selected for Chowk, Aminabad, Aliganj, and homes across Lucknow.</h3>
              </div>
            </Link>

          <Link to="/collection?category=Rose%20Attar&segment=Women#catalog" className="border border-[var(--line-soft)] bg-[var(--ritual-card-surface)] p-6 transition hover:border-[var(--accent-sage)] sm:p-7">
            <Sparkles size={22} className="text-[var(--accent-sage)]" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-sage)]">Occasion Picks</p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--text-primary)]">Choose attars for Eid, Jumma, nikah gifting, and graceful daily wear.</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Instead of making customers guess from names alone, the site guides them through moments, mood, and gifting needs.</p>
          </Link>

          <Link to="/collection?category=Gift%20Hampers#catalog" className="border border-[var(--line-soft)] bg-[var(--concierge-card-surface)] p-6 transition hover:border-[var(--accent-rust)] sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-rust)]">WhatsApp Orders</p>
            <h3 className="mt-9 font-serif text-2xl text-[var(--text-primary)]">Gift hampers, family orders, and quick help for clients who want a smooth buying experience.</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Ideal for weddings, festive gifting, and buyers who prefer to confirm details on WhatsApp before placing the order.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Popular in Lucknow</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">Best-selling attars for traditional taste and modern gifting.</h2>
          </div>
          <Link to="/collection" className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            Shop all attars
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/collection?category=${encodeURIComponent(product.category)}#catalog`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden border border-[var(--line-soft)] bg-[var(--panel-soft)] transition hover:-translate-y-1 hover:border-[var(--accent-gold)]"
              >
                <div className="aspect-[1/1.05] overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-muted)]">{product.category}</p>
                  <h3 className="mt-3 font-serif text-2xl text-[var(--text-primary)]">{product.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{product.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Lucknow Coverage</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">Serving old Lucknow favourites and citywide ecommerce demand.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
            The site content now naturally includes the areas buyers search for most, including {coreLucknowAreas.join(', ')}.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${encodeURIComponent(category.name)}#catalog`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="overflow-hidden border border-[var(--line-soft)] bg-[var(--panel-soft)] transition hover:-translate-y-1 hover:border-[var(--accent-gold)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">{category.count} blends</p>
                  <h3 className="mt-3 font-serif text-xl text-[var(--text-primary)]">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{category.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
