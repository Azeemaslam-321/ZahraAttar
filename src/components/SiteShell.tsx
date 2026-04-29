import { Outlet } from 'react-router-dom';
import CartSidebar from './CartSidebar';
import Footer from './Footer';
import MobileStickyButton from './MobileStickyButton';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

export default function SiteShell() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CartSidebar />
      <MobileStickyButton />
    </div>
  );
}
