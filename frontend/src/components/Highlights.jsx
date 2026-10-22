import { HIGHLIGHTS } from "../data/content";

export default function Highlights() {
  return (
    <section className="highlights" aria-label="Datos del evento">
      <div className="container highlights-grid">
        {HIGHLIGHTS.map((item) => (
          <article className="highlight-card" key={item.kicker}>
            <p className="highlight-kicker">{item.kicker}</p>
            <h2>
              {item.lines.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </article>
        ))}
      </div>
    </section>
  );
}
