import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coreLucknowAreas, createWhatsAppLink, lucknowAudienceLine, storeAddress, storePhoneDisplay } from '../data/storeInfo';

const footerGroups = [
  {
    title: 'Browse',
    links: [
      { label: 'Collection', to: '/collection' },
      { label: 'Ritual', to: '/ritual' },
      { label: 'House', to: '/house' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'WhatsApp Order', to: '/concierge' },
      { label: 'Gift Curation', to: '/concierge' },
      { label: 'Lucknow Delivery', to: '/ritual' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--nav-border)] bg-[var(--footer-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line-soft)] bg-[linear-gradient(135deg,#d8c08c,#7d4a35)]">
                <span className="font-serif text-xl font-bold text-[var(--bg-main)]">Z</span>
              </div>
              <div>
                <p className="font-serif text-xl tracking-[0.18em] text-[var(--text-primary)]">ZAHRA</p>
                <p className="text-[10px] uppercase tracking-[0.34em] text-[var(--text-muted)]">Lucknow Attars</p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              Zahra Attars is made for Lucknow ecommerce with alcohol-free oud, musk, rose, and sandalwood
              blends. {lucknowAudienceLine}
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              WhatsApp ordering for Chowk, Aminabad, Kaiserbagh, Nakhas, Husainabad, Saadatganj, Aliganj,
              Hazratganj, Indira Nagar, and Gomti Nagar.
            </p>

            <a
              href={createWhatsAppLink('Hi, I want to order attar in Lucknow from Zahra Attars. Please share fragrance options and delivery details.')}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
            >
              Start WhatsApp Order
              <ArrowUpRight size={14} />
            </a>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">{group.title}</p>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-[var(--accent-gold)]">Contact</p>
            <div className="space-y-4 text-sm text-[var(--text-secondary)]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-[var(--accent-sage)]" />
                <span>{storeAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[var(--accent-sage)]" />
                <span>{storePhoneDisplay}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[var(--accent-sage)]" />
                <span>hello@zahraattars.com</span>
              </div>
            </div>
            <p className="mt-5 text-xs leading-6 text-[var(--text-muted)]">
              Popular Lucknow areas: {coreLucknowAreas.join(', ')}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--nav-border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Built for a more premium fragrance experience, not just another single-page storefront.</p>
          <p>© 2026 Zahra Attars</p>
        </div>
      </div>
    </footer>
  );
}
