import React from 'react';

export function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img 
          src={product.image || 'https://via.placeholder.com/400'} 
          alt={product.title} 
        />
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <div className="price">
          ${product.price}
        </div>
      </div>
    </div>
  );
}
