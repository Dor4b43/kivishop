import React from 'react';
import { useCart } from '../context/CartContext';

export function Header() {
  const { cartCount, setCartOpen } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <a href="/"><strong>KIVISHOP</strong></a>
      </div>
      <nav className="header-menu-desktop">
        <a href="#destacado" className="header-menu-item">Productos</a>
        <a href="#categorias" className="header-menu-item">Categorías</a>
        <a href="#nosotros" className="header-menu-item">Nosotros</a>
      </nav>
      <div className="header-ctas">
        <button
          className="cart-toggle-btn"
          onClick={() => setCartOpen(true)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  );
}
