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

const MOCK_CATEGORIES = [
  { id: 1, title: 'Apparel', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Accessories', image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
];

const MOCK_TESTIMONIALS = [
  { id: 1, author: 'Jane Doe', text: 'Incredible quality and fast shipping. I was amazed by how good the product looks in person compared to the pictures.', rating: 5 },
  { id: 2, author: 'Michael Smith', text: 'Customer service was very helpful when I had a question about sizing. Highly recommend to anyone!', rating: 5 },
  { id: 3, author: 'Sarah Jenkins', text: 'I love my new backpack. It is stylish, durable, and holds everything I need. Will definitely shop here again.', rating: 5 },
];

function App() {
  return (
    <div className="app">
      <div className="top-banner">🔥 Flash Sale: Free Worldwide Shipping on Orders Over $50 🔥</div>
      <Header />
      
      <main>
        <section className="hero">
          <h1>Modern Essentials for Every Day</h1>
          <p>Curated products designed for quality, sustainability, and style. Upgrade your life with our premium selection.</p>
          <a href="#featured" className="button">Shop Collection</a>
        </section>

        <section className="trust-badges">
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            <span>100% Secure Payments</span>
          </div>
        </section>

        <section className="categories-section">
          <h2>Shop by Category</h2>
          <div className="categories-grid">
            {MOCK_CATEGORIES.map(category => (
              <a href={`/collections/${category.title.toLowerCase()}`} className="category-card" key={category.id}>
                <img src={category.image} alt={category.title} />
                <div className="overlay"></div>
                <h3>{category.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <section id="featured" className="recommended-products">
          <h2>Trending Now</h2>
          <div className="recommended-products-grid">
            {MOCK_PRODUCTS.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            {MOCK_TESTIMONIALS.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="stars">
                  {"★".repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.author}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="newsletter-section">
          <h2>Join the Club</h2>
          <p>Get exclusive offers, inside access to new drops, and 10% off your first order.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
