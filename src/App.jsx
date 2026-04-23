import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductItem } from './components/ProductItem';
import { CartSidebar } from './components/CartSidebar';
import { ProductDetail } from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import { shopifyClient } from './lib/shopify';

const MOCK_CATEGORIES = [
  { id: 1, title: 'Ropa de Hombre', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Accesorios Extra', image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Calzado Fino', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
];

const MOCK_TESTIMONIALS = [
  { id: 1, author: 'Carlos Mendoza', text: 'Increíble calidad y envío súper rápido. Quedé asombrado por lo bien que luce el producto en persona, ¡supera las fotos!', rating: 5 },
  { id: 2, author: 'Ana Martínez', text: 'Atención al cliente excepcional. Me ayudaron a elegir mi talla ideal. Sin duda lo recomiendo muchísimo a mis amigos.', rating: 5 },
  { id: 3, author: 'Sofía Londoño', text: 'Me enamoré de mi nueva mochila. Es elegante, muy resistente y me cabe todo lo necesario. ¡Volveré a comprar!', rating: 5 },
];

function AppContent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    shopifyClient.product.fetchAll().then((fetchedProducts) => {
      setProducts(fetchedProducts);
      setLoading(false);
    }).catch(err => {
      console.error("Error fetching products:", err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="app">
      <div className="top-banner">🔥 OFERTA RELÁMPAGO: Envío Gratis en pedidos sobre $50 USD 🔥</div>
      <Header />
      <CartSidebar />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <main>
        {/* HERO */}
        <section className="hero">
          <h1>Esenciales Modernos Para Tu Día a Día</h1>
          <p>Descubre nuestra cuidada selección de productos diseñados para resistir el tiempo. Mejora tu vida con alta calidad, estética impecable y confort absoluto.</p>
          <a href="#destacado" className="button">Ver Colección Exclusiva</a>
        </section>

        {/* TRUST BADGES */}
        <section className="trust-badges">
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>Envío Gratis Mundial</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>Garantía de 30 Días</span>
          </div>
          <div className="badge-item">
            <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            <span>Pagos 100% Seguros</span>
          </div>
        </section>

        {/* AS SEEN ON */}
        <section className="as-seen-on">
          <p>MENCIONADOS EN MARCAS LÍDERES</p>
          <div className="logos-grid">
            <h3 style={{opacity: 0.4}}>VOGUE</h3>
            <h3 style={{opacity: 0.4}}>GQ</h3>
            <h3 style={{opacity: 0.4}}>Esquire</h3>
            <h3 style={{opacity: 0.4}}>Forbes</h3>
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categorias" className="categories-section">
          <h2>Compra por Categoría</h2>
          <div className="categories-grid">
            {MOCK_CATEGORIES.map(category => (
              <a href={`/colecciones/${category.title.toLowerCase().replace(/ /g, '-')}`} className="category-card" key={category.id}>
                <img src={category.image} alt={category.title} />
                <div className="overlay"></div>
                <h3>{category.title}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="nosotros" className="features-section">
          <div className="feature">
            <div className="feature-icon">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h3>Calidad Premium</h3>
            <p>Usamos solo los mejores materiales verificados en nuestra producción.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>
            </div>
            <h3>Envío Express</h3>
            <p>Recibe tu producto rápido en la puerta de tu casa, estés donde estés.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" /></svg>
            </div>
            <h3>Devoluciones Fáciles</h3>
            <p>Comodidad absoluta. Si el producto no es lo tuyo, simplemente devuélvelo.</p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="destacado" className="recommended-products">
          <h2>Tendencias del Momento</h2>
          {loading ? (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Cargando productos...</p>
            </div>
          ) : (
            <div className="recommended-products-grid">
              {products.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                />
              ))}
            </div>
          )}
        </section>

        {/* PROMO BANNER */}
        <section className="promo-banner">
          <div className="promo-content">
            <h2>Lanzamiento Colección de Verano</h2>
            <p>Hasta un 40% de descuento en artículos seleccionados por tiempo limitado. Revitaliza tu armario este verano.</p>
            <a href="#destacado" className="button">Ver Promociones</a>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials-section">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
          <div className="testimonials-grid">
            {MOCK_TESTIMONIALS.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="stars">{"★".repeat(testimonial.rating)}</div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">- {testimonial.author}</div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <h2>Únete al Club VIP</h2>
          <p>Obtén ofertas exclusivas, acceso anticipado a la tienda y <strong>10% de descuento</strong> en tu primer pedido con nosotros.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Escribe tu correo electrónico aquí" required />
            <button type="submit">Suscribirme</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
