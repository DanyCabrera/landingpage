import { VENUE } from "../data/content";

export default function Venue() {
  return (
    <section className="venue" id="lugar">
      <div className="container">
        <div className="venue-head">
          <div>
            <p className="section-kicker">Lugar</p>
            <h2>{VENUE.title}</h2>
          </div>
        </div>
        <div className="map-layout">
          <div className="map-frame">
            <iframe
              title={VENUE.mapTitle}
              src={VENUE.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
          <aside className="venue-card">
            <dl className="venue-meta venue-meta-light">
              {VENUE.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
            <div className="venue-actions">
              <a className="btn btn-primary" href={VENUE.directions} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
              <a className="btn btn-ghost" href={VENUE.maps} target="_blank" rel="noopener noreferrer">
                Ver en Google Maps
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
