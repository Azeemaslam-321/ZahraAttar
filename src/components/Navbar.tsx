import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, ShoppingBag, SunMedium, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { useTheme } from '../context/useTheme';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Collection', to: '/collection' },
  { name: 'Ritual', to: '/ritual' },
  { name: 'House', to: '/house' },
  { name: 'Order', to: '/concierge' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? 'border-b border-[var(--nav-border)] bg-[var(--nav-surface)] backdrop-blur-xl shadow-[var(--nav-shadow)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:gap-3 sm:px-6 lg:px-8">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--line-soft)] bg-[linear-gradient(135deg,#d8c08c,#7d4a35)] shadow-[0_12px_24px_rgba(125,74,53,0.25)] sm:h-10 sm:w-10">
              <span className="font-serif text-base font-bold text-[var(--bg-main)] sm:text-lg">Z</span>
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-[13px] tracking-[0.12em] text-[var(--text-primary)] sm:text-lg sm:tracking-[0.18em]">ZAHRA</span>
              <span className="truncate text-[8px] uppercase tracking-[0.22em] text-[var(--text-muted)] sm:text-[10px] sm:tracking-[0.34em]">Lucknow Attars</span>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `relative text-[11px] uppercase tracking-[0.3em] transition-colors duration-300 ${
                    isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-[var(--accent-gold)] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--control-surface)] text-[var(--text-secondary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] sm:h-11 sm:w-11"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/concierge"
              className="hidden rounded-full border border-[var(--line-soft)] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-[var(--text-secondary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--text-primary)] lg:inline-flex"
            >
              Order on WhatsApp
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--control-surface)] text-[var(--text-secondary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] sm:h-11 sm:w-11"
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-rust)] text-[10px] font-semibold text-[var(--badge-text)]"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--nav-border)] bg-[var(--control-surface)] text-[var(--text-secondary)] transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] md:hidden sm:h-11 sm:w-11"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[var(--nav-border)] bg-[var(--overlay-surface)] px-4 py-5 backdrop-blur-xl md:hidden sm:top-20 sm:px-5 sm:py-6"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-serif transition-colors ${
                      isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/concierge"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full border border-[var(--line-soft)] px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)]"
              >
                Order on WhatsApp
              </Link>
              <button
                onClick={toggleTheme}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--nav-border)] bg-[var(--control-surface)] px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)]"
              >
                {theme === 'dark' ? <SunMedium size={14} /> : <Moon size={14} />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
