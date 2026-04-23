import React from 'react';

export function ProductItem({ product, onSelect }) {
  return (
    <div className="product-item" onClick={() => onSelect && onSelect(product)}>
      <div className="product-image-wrapper">
        <img
          src={product.images?.[0]?.src || product.image || ''}
          alt={product.title}
        />
        <div className="product-quick-view">Ver Producto</div>
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <div className="price">
          ${parseFloat(product.variants?.[0]?.price?.amount || product.price || 0).toFixed(2)} USD
        </div>
      </div>
    </div>
  );
}
