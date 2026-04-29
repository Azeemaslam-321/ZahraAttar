import { useMemo, useState } from 'react';
import { Layers3, Sparkles, SwatchBook } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products, type Product } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface CollectionGalleryProps {
  title: string;
  description: string;
  accentLabel?: string;
  initialCategory?: string;
  initialSegment?: 'All' | 'Men' | 'Women' | 'Unisex';
}

const segmentFilters: Array<'All' | 'Men' | 'Women' | 'Unisex'> = ['All', 'Men', 'Women', 'Unisex'];

export default function CollectionGallery({
  title,
  description,
  accentLabel = 'Curated Catalog',
  initialCategory = 'All',
  initialSegment = 'All',
}: CollectionGalleryProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    []
  );

  const categoryParam = searchParams.get('category');
  const segmentParam = searchParams.get('segment');
  const category = categoryParam && categories.includes(categoryParam) ? categoryParam : initialCategory;
  const segment =
    segmentParam === 'Men' || segmentParam === 'Women' || segmentParam === 'Unisex' || segmentParam === 'All'
      ? segmentParam
      : initialSegment;

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category === 'All' || product.category === category;
    const segmentMatch = segment === 'All' || product.segment === segment;
    return categoryMatch && segmentMatch;
  });

  const spotlightStats = [
    { label: 'Available now', value: `${filteredProducts.length}`, icon: Layers3 },
    { label: 'Fragrance', value: category === 'All' ? 'All notes' : category.replace(' Attar', ''), icon: SwatchBook },
    { label: 'For', value: segment === 'All' ? 'Everyone' : segment, icon: Sparkles },
  ];

  const updateFilters = ({
    nextCategory = category,
    nextSegment = segment,
  }: {
    nextCategory?: string;
    nextSegment?: 'All' | 'Men' | 'Women' | 'Unisex';
  }) => {
    const nextParams = new URLSearchParams(searchParams);

    if (nextCategory === 'All') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', nextCategory);
    }

    if (nextSegment === 'All') {
      nextParams.delete('segment');
    } else {
      nextParams.set('segment', nextSegment);
    }

    setSearchParams(nextParams, { replace: true });
  };

  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 border-b border-[var(--line-soft)] pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">{accentLabel}</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:min-w-[320px]">
          {spotlightStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-3 sm:p-4">
                <Icon size={16} className="text-[var(--accent-gold)]" />
                <p className="mt-2 font-serif text-lg text-[var(--text-primary)] sm:text-xl">{stat.value}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
        <aside className="h-fit overflow-hidden rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--bg-elevated)] shadow-[0_14px_40px_rgba(0,0,0,0.06)] lg:sticky lg:top-24">
          <div className="border-b border-[var(--line-soft)] bg-[linear-gradient(180deg,var(--panel-soft),transparent)] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">Browse Easily</p>
                <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-[var(--text-primary)] sm:text-[1.95rem]">Filter products</h3>
              </div>
              <button
                onClick={() => {
                  setSearchParams({}, { replace: true });
                }}
                className="rounded-full border border-[var(--line-soft)] bg-white/40 px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition hover:border-[var(--accent-rust)] hover:text-[var(--text-primary)]"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="border-b border-[var(--line-soft)] p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-sage)]">Who is it for</p>
            <div className="mt-4 space-y-2.5">
              {segmentFilters.map((item) => (
                <button
                  key={item}
                  onClick={() => updateFilters({ nextSegment: item })}
                  className={`w-full rounded-[1.15rem] border px-4 py-3.5 text-left transition ${
                    segment === item
                      ? 'border-[var(--accent-sage)] bg-[rgba(95,111,82,0.14)] text-[var(--text-primary)]'
                      : 'border-[var(--line-soft)] bg-[var(--panel-soft)] text-[var(--text-muted)] hover:border-[var(--accent-sage)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="block font-serif text-xl">{item}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.24em]">
                    {item === 'All' ? 'See everything' : item === 'Men' ? 'Depth & wood' : item === 'Women' ? 'Floral & musk' : 'Balanced trails'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">Attar Variety</p>
            <div className="mt-4 space-y-2.5">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => updateFilters({ nextCategory: item })}
                  className={`w-full rounded-[1.05rem] border px-4 py-3 text-left text-[10px] uppercase tracking-[0.18em] transition sm:text-[11px] sm:tracking-[0.22em] ${
                    category === item
                      ? 'border-[var(--accent-rust)] bg-[rgba(156,88,63,0.08)] text-[var(--text-primary)] shadow-[inset_0_0_0_1px_rgba(156,88,63,0.08)]'
                      : 'border-[var(--line-soft)] bg-[var(--panel-soft)] text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-start justify-between gap-3 rounded-[1.25rem] border border-[var(--line-soft)] bg-[var(--panel-soft)] px-4 py-4 text-sm text-[var(--text-secondary)] sm:items-center sm:px-6">
            <p className="max-w-[28rem] text-sm leading-6">
              Showing <span className="text-[var(--text-primary)]">{filteredProducts.length}</span> original attars for{' '}
              <span className="text-[var(--accent-gold)]">{category}</span> and{' '}
              <span className="text-[var(--accent-sage)]">{segment}</span> shoppers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProduct ? <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} /> : null}
    </section>
  );
}
