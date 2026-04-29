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
    { label: 'Visible now', value: `${filteredProducts.length}`, icon: Layers3 },
    { label: 'Family', value: category === 'All' ? 'All notes' : category.replace(' Attar', ''), icon: SwatchBook },
    { label: 'Focus', value: segment, icon: Sparkles },
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
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">{accentLabel}</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">{description}</p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {spotlightStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-4">
                  <Icon size={18} className="text-[var(--accent-gold)]" />
                  <p className="mt-3 font-serif text-xl text-[var(--text-primary)] sm:mt-4 sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-[11px] sm:tracking-[0.24em]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden border border-[var(--line-soft)] bg-[linear-gradient(180deg,var(--panel-soft),transparent)]">
          <div className="grid border-b border-[var(--line-soft)] sm:grid-cols-2">
            <div className="border-b border-[var(--line-soft)] p-4 sm:border-b-0 sm:border-r sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">By Fragrance Family</p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => updateFilters({ nextCategory: item })}
                    className={`rounded-full border px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] transition sm:px-4 sm:text-[11px] sm:tracking-[0.22em] ${
                      category === item
                        ? 'border-[var(--accent-gold)] bg-[var(--panel-highlight)] text-[var(--text-primary)]'
                        : 'border-[var(--line-soft)] text-[var(--text-muted)] hover:border-[var(--accent-gold)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent-sage)]">By Wearing Mood</p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2.5">
                {segmentFilters.map((item) => (
                  <button
                    key={item}
                    onClick={() => updateFilters({ nextSegment: item })}
                    className={`rounded-2xl border px-4 py-3.5 text-left transition sm:py-4 ${
                      segment === item
                        ? 'border-[var(--accent-sage)] bg-[rgba(95,111,82,0.14)] text-[var(--text-primary)]'
                        : 'border-[var(--line-soft)] text-[var(--text-muted)] hover:border-[var(--accent-sage)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                      <span className="block font-serif text-xl sm:text-2xl">{item}</span>
                      <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] sm:text-[11px] sm:tracking-[0.24em]">
                      {item === 'All' ? 'See everything' : item === 'Men' ? 'Depth & wood' : item === 'Women' ? 'Floral & musk' : 'Balanced trails'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-3 px-4 py-4 text-sm text-[var(--text-secondary)] sm:items-center sm:px-6">
            <p className="max-w-[22rem] text-sm leading-6">
              Showing <span className="text-[var(--text-primary)]">{filteredProducts.length}</span> attars for{' '}
              <span className="text-[var(--accent-gold)]">{category}</span> and{' '}
              <span className="text-[var(--accent-sage)]">{segment}</span>.
            </p>
            <button
              onClick={() => {
                setSearchParams({}, { replace: true });
              }}
              className="rounded-full border border-[var(--line-soft)] px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition hover:border-[var(--accent-rust)] hover:text-[var(--text-primary)] sm:text-[11px] sm:tracking-[0.24em]"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onViewProduct={setSelectedProduct}
          />
        ))}
      </div>

      {selectedProduct ? <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} /> : null}
    </section>
  );
}
