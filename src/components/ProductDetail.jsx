import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export function ProductDetail({ product, onClose }) {
  const { addToCart, loading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) return null;

  const images = product.images || [];
  const variants = product.variants || [];
  const hasMultipleVariants = variants.length > 1 && variants[0]?.title !== 'Default Title';

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addToCart(selectedVariant.id, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <>
      <div className="product-modal-overlay" onClick={onClose} />
      <div className="product-modal">
        <button className="product-modal-close" onClick={onClose}>✕</button>

        <div className="product-modal-content">
          {/* Gallery */}
          <div className="product-gallery">
            <div className="product-gallery-main">
              <img
                src={images[selectedImage]?.src || ''}
                alt={product.title}
              />
            </div>
            {images.length > 1 && (
              <div className="product-gallery-thumbs">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`thumb ${i === selectedImage ? 'active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={img.src} alt={`${product.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="product-info-panel">
            <h2>{product.title}</h2>
            <div className="product-detail-price">
              ${parseFloat(selectedVariant?.price?.amount || 0).toFixed(2)} USD
            </div>

            <div
              className="product-description"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml || '<p>Sin descripción disponible.</p>' }}
            />

            {/* Variant Selector */}
            {hasMultipleVariants && (
              <div className="product-variants">
                <label>Opción</label>
                <div className="variant-options">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      className={`variant-btn ${selectedVariant?.id === v.id ? 'selected' : ''}`}
                      onClick={() => setSelectedVariant(v)}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="product-quantity">
              <label>Cantidad</label>
              <div className="qty-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className={`button add-to-cart-btn ${addedFeedback ? 'added' : ''}`}
              onClick={handleAddToCart}
              disabled={loading || !selectedVariant?.available}
            >
              {!selectedVariant?.available
                ? 'Agotado'
                : addedFeedback
                ? '✓ Añadido al Carrito'
                : loading
                ? 'Añadiendo...'
                : 'Agregar al Carrito'
              }
            </button>

            {/* Trust micro-badges */}
            <div className="product-trust">
              <span>🚚 Envío gratis</span>
              <span>🔒 Pago seguro</span>
              <span>↩️ Devolución fácil</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
