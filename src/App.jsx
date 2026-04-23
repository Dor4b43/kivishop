import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductItem } from './components/ProductItem';

const MOCK_PRODUCTS = [
  { id: 1, title: 'Camiseta de Algodón Premium', price: '35.00', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Reloj Minimalista Automático', price: '120.00', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Mochila de Cuero Elegante', price: '85.00', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Gafas de Sol Sostenibles', price: '55.00', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800' },
];

const MOCK_CATEGORIES = [
  { id: 1, title: 'Ropa de Hombre', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Accesorios Extra', image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Calzado Fino', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800' },
];

const MOCK_TESTIMONIALS = [
  { id: 1, author: 'Carlos Mendoza', text: 'Increíble calidad y envío súper rápido. Quedé asombrado por lo bien que luce el producto en persona, ¡supera las fotos!', rating: 5 },
  { id: 2, author: 'Ana Martínez', text: 'Atención al cliente excepcional. Me ayudaron a elegir mi talla ideal. Sin duda lo recomiendo muchísimo a mis amigos.', rating: 5 },
  { id: 3, author: 'Sofía Londoño', text: 'Me enamoré de mi nueva mochila. Es elegante, muy resistente y me cabe todo lo necesario para la oficiona. ¡Volveré a comprar!', rating: 5 },
];

function App() {
  return (
    <div className="app">
      <div className="top-banner">🔥 OFERTA RELÁMPAGO: Envío Gratis en pedidos sobre $50 USD 🔥</div>
      <Header />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <h1>Esenciales Modernos Para Tu Día a Día</h1>
          <p>Descubre nuestra cuidada selección de productos diseñados para resistir el tiempo. Mejora tu vida con alta calidad, estética impecable y confort absoluto.</p>
          <a href="#destacado" className="button">Ver Colección Exclusiva</a>
        </section>

        {/* TRUST BADGES / CONFIANZA */}
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

        {/* AS SEEN ON SECTION */}
        <section className="as-seen-on">
          <p>MENCIONADOS EN MARCAS LÍDERES</p>
          <div className="logos-grid">
            <h3 style={{opacity: 0.4}}>VOGUE</h3>
            <h3 style={{opacity: 0.4}}>GQ</h3>
            <h3 style={{opacity: 0.4}}>Esquire</h3>
            <h3 style={{opacity: 0.4}}>Forbes</h3>
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="categories-section">
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

        {/* POR QUÉ ELEGIRNOS / FEATURES */}
        <section className="features-section">
          <div className="feature">
            <div className="feature-icon">💎</div>
            <h3>Calidad Premium</h3>
            <p>Usamos solo los mejores materiales verificados en nuestra producción.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Envío Express</h3>
            <p>Recibe tu producto rápido en la puerta de tu casa, estés donde estés.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔄</div>
            <h3>Devoluciones Fáciles</h3>
            <p>Comodidad absoluta. Si el producto no es lo tuyo, simplemente devuélvelo.</p>
          </div>
        </section>

        {/* FEATURED PRODUCTS SECTION */}
        <section id="destacado" className="recommended-products">
          <h2>Tendencias del Momento</h2>
          <div className="recommended-products-grid">
            {MOCK_PRODUCTS.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CUBIERTA VISUAL / BANNER EXTRA */}
        <section className="promo-banner">
          <div className="promo-content">
            <h2>Lanzamiento Colección de Verano</h2>
            <p>Hasta un 40% de descuento en artículos seleccionados por tiempo limitado. Revitaliza tu armario este verano.</p>
            <a href="/promociones" className="button">Ver Promociones</a>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
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

        {/* NEWSLETTER SECTION */}
        <section className="newsletter-section">
          <h2>Únete al Club Vip</h2>
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

export default App;
