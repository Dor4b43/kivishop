import React, { createContext, useContext, useState, useEffect } from 'react';
import { shopifyClient } from '../lib/shopify';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [checkout, setCheckout] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Crea un checkout al montar la app
  useEffect(() => {
    shopifyClient.checkout.create().then((newCheckout) => {
      setCheckout(newCheckout);
    }).catch(err => {
      console.error("Error creando checkout:", err);
    });
  }, []);

  const cartItems = checkout?.lineItems || [];
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = checkout?.subtotalPrice?.amount || '0.00';
  const checkoutUrl = checkout?.webUrl || '#';

  const addToCart = async (variantId, quantity = 1) => {
    if (!checkout) return;
    setLoading(true);
    try {
      const lineItemsToAdd = [{ variantId, quantity }];
      const updatedCheckout = await shopifyClient.checkout.addLineItems(
        checkout.id,
        lineItemsToAdd
      );
      setCheckout(updatedCheckout);
      setCartOpen(true);
    } catch (err) {
      console.error("Error añadiendo al carrito:", err);
    }
    setLoading(false);
  };

  const updateQuantity = async (lineItemId, quantity) => {
    if (!checkout) return;
    setLoading(true);
    try {
      const lineItemsToUpdate = [{ id: lineItemId, quantity }];
      const updatedCheckout = await shopifyClient.checkout.updateLineItems(
        checkout.id,
        lineItemsToUpdate
      );
      setCheckout(updatedCheckout);
    } catch (err) {
      console.error("Error actualizando cantidad:", err);
    }
    setLoading(false);
  };

  const removeFromCart = async (lineItemId) => {
    if (!checkout) return;
    setLoading(true);
    try {
      const updatedCheckout = await shopifyClient.checkout.removeLineItems(
        checkout.id,
        [lineItemId]
      );
      setCheckout(updatedCheckout);
    } catch (err) {
      console.error("Error eliminando del carrito:", err);
    }
    setLoading(false);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      checkoutUrl,
      cartOpen,
      loading,
      setCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
