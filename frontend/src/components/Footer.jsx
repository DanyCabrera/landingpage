import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">XIV Convención de Ciencia y Tecnología</p>
          <p>Universidad Mariano Gálvez de Guatemala</p>
          <p>Centro Universitario de Retalhuleu</p>
          <p>Facultad de Ingeniería en Sistemas</p>
        </div>
        <div>
          <h2>Contacto</h2>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
