import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p style={{color: '#666', fontSize: '0.9375rem', lineHeight: '1.6'}}>
            We provide high-quality products for our global customers. 
            Focused on design, quality, and fast shipping.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-links">
            <a href="/policies/privacy">Privacy Policy</a>
            <a href="/policies/refund">Refund Policy</a>
            <a href="/policies/shipping">Shipping Policy</a>
            <a href="/policies/terms">Terms of Service</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="/pages/contact">Contact Us</a>
            <a href="/pages/faq">FAQ</a>
            <a href="/pages/shipping-tracking">Tracking</a>
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea', textAlign: 'center', fontSize: '0.8125rem', color: '#999'}}>
        © {new Date().getFullYear()} KIVISHOP. All rights reserved.
      </div>
    </footer>
  );
}
