import { Navigate, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import SiteShell from './components/SiteShell';
import CollectionPage from './pages/CollectionPage';
import CheckoutPage from './pages/CheckoutPage';
import ConciergePage from './pages/ConciergePage';
import { ThemeProvider } from './context/ThemeProvider';
import HomePage from './pages/HomePage';
import HousePage from './pages/HousePage';
import RitualPage from './pages/RitualPage';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Routes>
          <Route element={<SiteShell />}>
            <Route index element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/ritual" element={<RitualPage />} />
            <Route path="/house" element={<HousePage />} />
            <Route path="/concierge" element={<ConciergePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </ThemeProvider>
  );
}
