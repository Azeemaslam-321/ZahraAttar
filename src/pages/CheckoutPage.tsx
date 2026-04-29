import { useMemo, useState } from 'react';
import { Lock, MessageCircleMore } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { useCart } from '../context/useCart';
import { createWhatsAppLink, lucknowSeoKeywords, storePhoneDisplay } from '../data/storeInfo';

interface CheckoutForm {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  pincode: string;
  notes: string;
}

const initialForm: CheckoutForm = {
  fullName: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  pincode: '',
  notes: '',
};

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState<CheckoutForm>(initialForm);

  const canSend = items.length > 0 && form.fullName && form.phone && form.city && form.address && form.pincode;

  const whatsappLink = useMemo(() => {
    const orderLines = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name} x${item.quantity} - Rs.${(item.product.price * item.quantity).toLocaleString()}`
      )
      .join('\n');

    const message = [
      'Hi, I want to place an order from Zahra Attars.',
      '',
      'Customer Details:',
      `Name: ${form.fullName || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Email: ${form.email || '-'}`,
      `City: ${form.city || '-'}`,
      `Address: ${form.address || '-'}`,
      `Pincode: ${form.pincode || '-'}`,
      `Notes: ${form.notes || '-'}`,
      '',
      'Cart Items:',
      orderLines || '-',
      '',
      `Total: Rs.${totalPrice.toLocaleString()}`,
    ].join('\n');

    return createWhatsAppLink(message);
  }, [form, items, totalPrice]);

  return (
    <>
      <Seo
        title="Checkout Attar Order in Lucknow | Zahra Attars"
        description="Fill your attar order details for Lucknow delivery and send the full order on WhatsApp with a simple local ecommerce checkout flow."
        keywords={lucknowSeoKeywords}
      />
      <PageHero
        eyebrow="Checkout"
        title={
          <>
            Fill the order details,
            <span className="text-[var(--accent-gold)]"> then send on WhatsApp.</span>
          </>
        }
        description={`Customer apni sari delivery details yahan fill karega. "Pay now" abhi intentionally inactive hai, aur complete order summary WhatsApp par ${storePhoneDisplay} par chali jayegi.`}
        image="/images/attar-2.jpg"
        accent="rgba(143, 78, 56, 0.34)"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {items.length === 0 ? (
          <div className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-8 text-center">
            <p className="font-serif text-3xl text-[var(--text-primary)]">Your cart is empty</p>
            <p className="mt-4 text-sm text-[var(--text-secondary)]">Add products first, then the checkout form will prepare the WhatsApp order for you.</p>
            <Link
              to="/collection"
              className="mt-6 inline-flex rounded-full border border-[var(--line-soft)] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--text-primary)]"
            >
              Back to Collection
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-4 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-gold)]">Delivery Details</p>
              <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2">
                <LabelInput
                  label="Full Name"
                  value={form.fullName}
                  onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
                  required
                />
                <LabelInput
                  label="Phone Number"
                  value={form.phone}
                  onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
                  required
                />
                <LabelInput
                  label="Email"
                  value={form.email}
                  onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
                />
                <LabelInput
                  label="City"
                  value={form.city}
                  onChange={(value) => setForm((prev) => ({ ...prev, city: value }))}
                  required
                />
                <div className="sm:col-span-2">
                  <LabelInput
                    label="Full Address"
                    value={form.address}
                    onChange={(value) => setForm((prev) => ({ ...prev, address: value }))}
                    required
                  />
                </div>
                <LabelInput
                  label="Pincode"
                  value={form.pincode}
                  onChange={(value) => setForm((prev) => ({ ...prev, pincode: value }))}
                  required
                />
                <div className="sm:col-span-2">
                  <LabelTextarea
                    label="Order Notes"
                    value={form.notes}
                    onChange={(value) => setForm((prev) => ({ ...prev, notes: value }))}
                  />
                </div>
              </div>
            </div>

            <div className="border border-[var(--line-soft)] bg-[var(--panel-soft)] p-4 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--accent-sage)]">Order Summary</p>
              <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3 border border-[var(--line-soft)] bg-[color:var(--bg-elevated)]/60 p-3">
                    <img src={item.product.image} alt={item.product.name} className="h-14 w-14 shrink-0 object-cover sm:h-16 sm:w-16" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-base text-[var(--text-primary)] sm:text-lg">{item.product.name}</p>
                      <p className="text-xs text-[var(--text-secondary)] sm:text-sm">Qty {item.quantity}</p>
                    </div>
                    <p className="text-xs font-semibold text-[var(--accent-gold)] sm:text-sm">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--line-soft)] pt-5">
                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Total</span>
                  <span className="font-semibold text-[var(--text-primary)]">₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Delivery Charges</span>
                  <span className="font-semibold text-[var(--text-muted)] line-through">Not Charged</span>
                </div>
                <p className="mt-2 text-xs text-[var(--text-muted)]">Delivery charge removed. Customer se alag se kuch add nahi liya jayega.</p>
              </div>

              <button
                type="button"
                disabled
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] opacity-70 sm:text-sm sm:tracking-[0.22em]"
              >
                <Lock size={15} />
                Pay Now Coming Soon
              </button>

              <a
                href={canSend ? whatsappLink : undefined}
                target="_blank"
                rel="noreferrer"
                className={`mt-3 flex w-full items-center justify-center gap-2 rounded-sm px-3 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm sm:tracking-[0.22em] ${
                  canSend
                    ? 'bg-[linear-gradient(135deg,#d8c08c,#5f6f52)] text-[#101010] hover:shadow-[0_0_24px_rgba(95,111,82,0.28)]'
                    : 'pointer-events-none border border-dashed border-[var(--line-soft)] text-[var(--text-muted)]'
                }`}
              >
                <MessageCircleMore size={16} />
                Via WhatsApp Send Details
              </a>
              <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                Required fields fill karne ke baad yeh button WhatsApp open karega with full customer details, cart items, and final total.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function LabelInput({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number';
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-[11px] sm:tracking-[0.24em]">
        {label} {required ? '*' : ''}
      </span>
      <input
        type={type}
        min={type === 'number' ? 0 : undefined}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full border border-[var(--line-soft)] bg-[color:var(--bg-elevated)]/65 px-3.5 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-gold)] sm:px-4"
      />
    </label>
  );
}

function LabelTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-[11px] sm:tracking-[0.24em]">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        className="w-full resize-none border border-[var(--line-soft)] bg-[color:var(--bg-elevated)]/65 px-3.5 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent-gold)] sm:px-4"
      />
    </label>
  );
}
