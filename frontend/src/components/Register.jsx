import { WHATSAPP_URL } from "../data/content";
import useVisits from "../hooks/useVisits";

export default function Register() {
  const visits = useVisits();

  return (
    <section className="register" id="registro">
      <div className="container register-layout">
        <div className="register-cta">
          <p className="section-kicker">Registro</p>
          <h2>Reserva tu lugar</h2>
          <p className="lead">Escríbenos para comprar tu ticket.</p>
          <a className="btn btn-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Registrar entrada por WhatsApp
          </a>
        </div>
        <aside className="visitas" aria-label="Visitas a la página">
          <strong>{visits}</strong>
          <span>Visitas</span>
        </aside>
      </div>
    </section>
  );
}
