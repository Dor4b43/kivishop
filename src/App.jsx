import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductItem } from './components/ProductItem';

const MOCK_PRODUCTS = [
  { id: 1, title: 'Premium Cotton Tee', price: '35.00', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Minimalist Watch', price: '120.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Leather Backpack', price: '85.00', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Sustainable Sunglasses', price: '55.00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
];

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <section className="hero">
          <h1>Modern Essentials for Every Day</h1>
          <p>Curated products designed for quality, sustainability, and style.</p>
          <a href="/collections/all" className="button">Shop All Products</a>
        </section>

        <section className="trust-badges">
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>Money Back Guarantee</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            <span>Secure Payments</span>
          </div>
        </section>

        <section className="recommended-products">
          <h2>Featured Products</h2>
          <div className="recommended-products-grid">
            {MOCK_PRODUCTS.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
