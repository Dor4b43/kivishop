import Client from 'shopify-buy';

// Initialize the Shopify client
// VITE_SHOPIFY_DOMAIN should be your shop domain (e.g., 'your-store.myshopify.com')
// VITE_SHOPIFY_STOREFRONT_TOKEN can be empty for public data (Products, Collections, etc.)
export const shopifyClient = Client.buildClient({
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN || 'hynhm0-kb.myshopify.com',
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || ''
});
