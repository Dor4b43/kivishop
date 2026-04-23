import Client from 'shopify-buy';

try {
  const client = Client.buildClient({
    domain: 'hynhm0-kb.myshopify.com',
    storefrontAccessToken: ''
  });
  console.log("Client created with empty token");
  client.product.fetchAll().then(p => console.log("Fetched products count:", p.length)).catch(err => console.error("Fetch error:", err));
} catch (e) {
  console.error("SDK error:", e);
}
