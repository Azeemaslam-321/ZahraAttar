import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { categories, products } from '../data/products';
import { coreLucknowAreas, lucknowAudienceLine, lucknowSeoKeywords } from '../data/storeInfo';

const houseCodes = [
  {
    title: 'Lucknow Focus',
    copy: 'Built for online attar selling in Lucknow with local delivery language, festive gifting demand, and WhatsApp-first conversion.',
  },
  {
    title: 'Traditional Relevance',
    copy: 'Content now speaks to oud, musk, rose, Eid gifting, Jumma wear, nikah orders, and old Lucknow fragrance taste.',
  },
  {
    title: 'Broad Appeal',
    copy: 'The store leads with traditional attar preferences and still stays open for all fragrance buyers across Lucknow.',
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
      />
      <PageHero
        eyebrow="Lucknow Attar Delivery"
        title={
          <>
            Buy attars online in
            <span className="text-[var(--accent-gold)]"> Lucknow for gifting, daily wear, and festive use.</span>
          </>
        }
        description={`Zahra Attars brings alcohol-free oud, musk, rose, and sandalwood fragrances to Lucknow with easy WhatsApp ordering and local delivery relevance. ${lucknowAudienceLine}`}
        image="/images/hero-attar.jpg"
        accent="rgba(122, 74, 53, 0.48)"
        actions={
          <>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#dcc58d,#8f4e38)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#120f0b]"
            >
              Shop Lucknow Collection
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/ritual"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line-soft)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)] transition hover:border-[var(--accent-sage)] hover:text-[var(--accent-sage)]"
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
              className="border border-white/10 bg-[var(--panel-soft)] p-7"
            >
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-rust)]">{code.title}</p>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{code.copy}</p>
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
              Real local content built to rank for attar buyers in Lucknow.
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
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-gold)]">Collection</p>
                <h3 className="mt-3 max-w-sm font-serif text-3xl text-[var(--feature-card-text)]">Attars for Chowk, Aminabad, Aliganj, and delivery across Lucknow.</h3>
              </div>
            </Link>

          <Link to="/collection?category=Rose%20Attar&segment=Women#catalog" className="border border-[var(--line-soft)] bg-[var(--ritual-card-surface)] p-7 transition hover:border-[var(--accent-sage)]">
            <Sparkles size={22} className="text-[var(--accent-sage)]" />
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-sage)]">Traditional Picks</p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--text-primary)]">Choose attars for Eid, Jumma, nikah gifting, and everyday wear.</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">This page helps customers browse by use case instead of only product names, which fits how local fragrance shoppers often buy.</p>
          </Link>

          <Link to="/collection?category=Gift%20Hampers#catalog" className="border border-[var(--line-soft)] bg-[var(--concierge-card-surface)] p-7 transition hover:border-[var(--accent-rust)]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--accent-rust)]">WhatsApp Orders</p>
            <h3 className="mt-9 font-serif text-2xl text-[var(--text-primary)]">Bulk gifting, family orders, and quick help for Lucknow buyers.</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Useful for weddings, festive gifting, and customers who want direct attar suggestions before ordering.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Popular in Lucknow</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">Best-selling attars for traditional and modern fragrance buyers.</h2>
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
            We are shaping the content around strong local search intent for these Lucknow areas: {coreLucknowAreas.join(', ')}.
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
