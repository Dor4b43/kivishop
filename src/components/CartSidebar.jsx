import React from 'react';
import { useCart } from '../context/CartContext';

export function CartSidebar() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    checkoutUrl,
    cartOpen,
    loading,
    setCartOpen,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? 'active' : ''}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h3>Tu Carrito ({cartCount})</h3>
          <button className="cart-close-btn" onClick={() => setCartOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-sidebar-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Tu carrito está vacío</p>
              <button className="button" onClick={() => setCartOpen(false)}>
                Seguir Comprando
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-line-item" key={item.id}>
                <div className="cart-item-image">
                  <img
                    src={item.variant?.image?.src || ''}
                    alt={item.title}
                  />
                </div>
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  {item.variant?.title !== 'Default Title' && (
                    <span className="cart-item-variant">{item.variant?.title}</span>
                  )}
                  <span className="cart-item-price">
                    ${parseFloat(item.variant?.price?.amount || 0).toFixed(2)}
                  </span>
                  <div className="cart-item-qty">
                    <button
                      disabled={loading}
                      onClick={() =>
                        item.quantity <= 1
                          ? removeFromCart(item.id)
                          : updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      disabled={loading}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  disabled={loading}
                  title="Eliminar"
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <strong>${parseFloat(cartTotal).toFixed(2)}</strong>
            </div>
            <p className="cart-shipping-note">Impuestos y envío calculados al finalizar</p>
            <a href={checkoutUrl} className="button cart-checkout-btn">
              Finalizar Compra
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
