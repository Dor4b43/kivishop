import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"><strong>KIVISHOP</strong></a>
      </div>
      <nav className="header-menu-desktop">
        <a href="/collections" className="header-menu-item">Collections</a>
        <a href="/blogs" className="header-menu-item">Blog</a>
        <a href="/pages/about" className="header-menu-item">About</a>
      </nav>
      <div className="header-ctas">
        <a href="/search">Search</a>
        <a href="/cart">Cart (0)</a>
      </div>
    </header>
  );
}
