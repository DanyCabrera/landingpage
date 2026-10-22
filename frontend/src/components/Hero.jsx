import BackgroundVideo from "./BackgroundVideo";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <BackgroundVideo src="/video/hero.mp4" className="hero-video" />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="container hero-content">
        <p className="eyebrow">XIV Convención de Ciencia y Tecnología</p>
        <h1>Más allá del código: construyendo una carrera en tecnología</h1>
        <SocialLinks />
      </div>
    </section>
  );
}
