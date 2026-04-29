import { Link, useNavigate } from 'react-router-dom';
import CollectionGallery from '../components/CollectionGallery';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { useCart } from '../context/useCart';
import { categories, products } from '../data/products';
import { coreLucknowAreas, lucknowSeoKeywords } from '../data/storeInfo';

export default function CollectionPage() {
  const navigate = useNavigate();
  const { addItem, setIsOpen } = useCart();
  const hamperProducts = products.filter((product) => product.category === 'Gift Hampers');

  return (
    <>
      <Seo
        title="Attar Collection in Lucknow | Oud, Musk, Rose & More"
        description="Browse Zahra Attars collection for Lucknow with oud, musk, rose, sandalwood, Eid gifting, Jumma wear, and citywide delivery for Chowk, Aminabad, Nakhas, Kaiserbagh, Aliganj, and more."
        keywords={lucknowSeoKeywords}
      />
      <PageHero
        eyebrow="Lucknow Attar Collection"
        title={
          <>
            Shop attars in Lucknow,
            <span className="text-[var(--accent-gold)]"> filtered by fragrance and use.</span>
          </>
        }
        description={`A complete attar collection for Lucknow online buyers with alcohol-free oud, musk, rose, and sandalwood options. Useful for daily wear, Eid gifting, Jumma use, and wedding shopping across ${coreLucknowAreas.slice(0, 6).join(', ')} and beyond.`}
        image="/images/attar-5.jpg"
        accent="rgba(95, 111, 82, 0.36)"
        actions={
          <>
            <Link
              to="/ritual"
              className="inline-flex w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#d6c692,#5f6f52)] px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-[#120f0b] sm:w-auto sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Shop by Occasion
            </Link>
            <Link
              to="/concierge"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--line-soft)] px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-[var(--text-primary)] sm:w-auto sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
            >
              Order on WhatsApp
            </Link>
          </>
        }
        stats={[
          { value: 'Men', label: 'Oud & Wood' },
          { value: 'Women', label: 'Rose & Musk' },
          { value: 'Unisex', label: 'Festive & Daily' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Shop by Variety</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
              Upar hi dekh lo kis type ke attars available hain.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              User-friendly view so customers can quickly understand whether they want oud, rose, musk, sandalwood, or ready gift hampers before going deeper into the collection.
            </p>
          </div>
          <Link
            to="/ritual"
            className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)] transition hover:text-[var(--accent-gold)]"
          >
            Need help choosing?
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${encodeURIComponent(category.name)}#catalog`}
              className="overflow-hidden border border-[var(--line-soft)] bg-[var(--panel-soft)] transition hover:-translate-y-1 hover:border-[var(--accent-gold)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">{category.count} options</p>
                <h3 className="mt-2 font-serif text-2xl text-[var(--text-primary)]">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-[var(--line-soft)] bg-[linear-gradient(135deg,rgba(156,88,63,0.14),rgba(216,192,140,0.08))] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-rust)]">Gift Hampers</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
                Hamper options bhi ready hain for Eid, family gifting, and nikah orders.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                If customers want gifting instead of a single attar bottle, yahan se unko seedha hamper variety visible ho jayegi.
              </p>
            </div>
            <Link
              to="/concierge"
              className="inline-flex w-full items-center justify-center rounded-full border border-[var(--line-soft)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)] sm:w-auto"
            >
              Bulk order help
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {hamperProducts.map((product) => (
              <div key={product.id} className="overflow-hidden border border-[var(--line-soft)] bg-[var(--panel-soft)] sm:grid sm:grid-cols-[0.9fr_1.1fr]">
                <div className="aspect-[4/3] overflow-hidden sm:aspect-auto">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-rust)]">{product.volume}</p>
                  <h3 className="mt-2 font-serif text-2xl text-[var(--text-primary)]">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{product.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full border border-[var(--line-soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold text-[var(--accent-gold)]">₹{product.price.toLocaleString()}</p>
                      <p className="text-sm text-[var(--text-muted)] line-through">₹{product.originalPrice.toLocaleString()}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          addItem(product);
                          setIsOpen(true);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#d8c08c,#8f4e38)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#120f0b]"
                      >
                        Add hamper
                      </button>
                      <button
                        onClick={() => {
                          addItem(product);
                          navigate('/checkout');
                        }}
                        className="inline-flex items-center justify-center rounded-full border border-[var(--line-soft)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--text-primary)]"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CollectionGallery
        accentLabel="Browse Lucknow Store"
        title="Explore attars by note family, mood, and everyday use."
        description="Use these filters the way local buyers search: oud attar in Lucknow, musk for daily wear, floral gifting options, and long-lasting alcohol-free attars for family and festive use."
      />
    </>
  );
}
