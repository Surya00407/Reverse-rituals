import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';

// Only the home page ships in the main bundle; other pages (especially the
// admin page with charts/PDF libs) load on demand.
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const OrderSuccessPage = lazy(() => import('./pages/OrderSuccessPage'));
const TrackOrderPage = lazy(() => import('./pages/TrackOrderPage'));


import VisitTracker from './components/VisitTracker';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Preloader />
        <BrowserRouter>
          <VisitTracker />
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="forgot-password" element={<ForgotPasswordPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="order-success" element={<OrderSuccessPage />} />
              <Route path="track-order" element={<TrackOrderPage />} />
              <Route path="admin" element={<AdminPage />} />


            </Route>
          </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
