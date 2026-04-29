import { ArrowUpRight, Gift, MessageCircleMore, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { createWhatsAppLink, lucknowSeoKeywords, storeArea, storeCity, storePhoneDisplay } from '../data/storeInfo';

const services = [
  {
    title: 'Attar Recommendation',
    copy: 'Tell us the mood, budget, and occasion. We guide you to the right oud, musk, rose, or sandalwood option.',
    icon: MessageCircleMore,
  },
  {
    title: 'Gift Curation',
    copy: 'Perfect for nikah gifting, Eid boxes, family gifting, and premium presentation for local functions.',
    icon: Gift,
  },
  {
    title: 'Bulk and Event Orders',
    copy: 'For wedding families, festive buyers, and customers ordering multiple attars across Lucknow.',
    icon: Sparkles,
  },
];

export default function ConciergePage() {
  return (
    <>
      <Seo
        title="Order Attar on WhatsApp in Lucknow | Zahra Attars"
        description="Place attar orders on WhatsApp in Lucknow for gifting, nikah functions, Eid shopping, and family fragrance buying. Get help choosing oud, musk, rose, and alcohol-free attars."
        keywords={lucknowSeoKeywords}
      />
      <PageHero
        eyebrow="WhatsApp Orders"
        title={
          <>
            Order attars on
            <span className="text-[var(--accent-rust)]"> WhatsApp for faster local buying.</span>
          </>
        }
        description={`This page supports direct attar buying from ${storeArea}, ${storeCity} and nearby Lucknow areas. It is useful for gifting, event shopping, family orders, and customers who want help choosing the right fragrance.`}
        image="/images/attar-6.jpg"
        accent="rgba(143, 78, 56, 0.42)"
        actions={
          <a
            href={createWhatsAppLink('Hi, I want to order attar in Lucknow and need help choosing the right fragrance.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#d7c590,#8f4e38)] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#120f0b]"
          >
            Open WhatsApp
            <ArrowUpRight size={14} />
          </a>
        }
        stats={[
          { value: '1:1', label: 'Guided Help' },
          { value: 'Events', label: 'Gift Orders' },
          { value: storePhoneDisplay, label: 'Direct Line' },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="border border-white/10 bg-[var(--panel-soft)] p-7">
                <Icon size={22} className="text-[var(--accent-rust)]" />
                <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-rust)]">{service.title}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{service.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(143,78,56,0.16),rgba(255,255,255,0.03))] p-8 sm:p-12">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">How it works</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl text-[var(--text-primary)]">01</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Share who the fragrance is for, the occasion, and your budget.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[var(--text-primary)]">02</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Receive a shortlist of blends or gift directions tailored to the request.</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[var(--text-primary)]">03</p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Confirm your order directly over WhatsApp for a faster Lucknow ecommerce buying flow.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
