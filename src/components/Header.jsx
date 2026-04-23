import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"><strong>KIVISHOP</strong></a>
      </div>
      <nav className="header-menu-desktop">
        <a href="/colecciones" className="header-menu-item">Colecciones</a>
        <a href="/blog" className="header-menu-item">Blog</a>
        <a href="/nosotros" className="header-menu-item">Nosotros</a>
      </nav>
      <div className="header-ctas">
        <a href="/buscar">Buscar</a>
        <a href="/carrito">Carrito (0)</a>
      </div>
    </header>
  );
}
