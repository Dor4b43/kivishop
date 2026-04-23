import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p style={{color: '#666', fontSize: '0.9375rem', lineHeight: '1.6'}}>
            Proporcionamos productos exclusivos y de alta calidad para nuestros clientes globales. Enfocados en diseño, durabilidad y entregas ultra rápidas.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <nav className="footer-links">
            <a href="/politicas/privacidad">Política de Privacidad</a>
            <a href="/politicas/reembolso">Política de Reembolso</a>
            <a href="/politicas/envios">Política de Envíos</a>
            <a href="/politicas/terminos">Términos del Servicio</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Atención al Cliente</h4>
          <div className="footer-links">
            <a href="/paginas/contacto">Contacto</a>
            <a href="/paginas/faq">Preguntas Frecuentes</a>
            <a href="/paginas/rastrear-pedido">Rastrear Pedido</a>
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea', textAlign: 'center', fontSize: '0.8125rem', color: '#999'}}>
        © {new Date().getFullYear()} KIVISHOP. Todos los derechos reservados.
      </div>
    </footer>
  );
}
