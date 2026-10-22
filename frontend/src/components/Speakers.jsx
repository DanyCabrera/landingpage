import { SPEAKERS } from "../data/content";

function SpeakerBio({ speaker }) {
  if (!speaker.honor || !speaker.bio.includes(speaker.honor)) {
    return speaker.bio;
  }

  const [before, after] = speaker.bio.split(speaker.honor);
  return (
    <>
      {before}
      <em>{speaker.honor}</em>
      {after}
    </>
  );
}

export default function Speakers() {
  return (
    <section className="speakers" id="ponentes">
      <div className="container">
        <header className="speakers-intro">
          <h2>Nuestros Ponentes</h2>
          <p>Conoce a los expertos que compartirán su conocimiento y experiencia en el evento.</p>
        </header>
        <div className="speakers-grid">
          {SPEAKERS.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <div className="speaker-photo">
                <img
                  className={speaker.wide ? "speaker-wide" : undefined}
                  src={speaker.photo}
                  alt={`${speaker.name}, ${speaker.role.toLowerCase()}`}
                />
                <h3>{speaker.name}</h3>
              </div>
              <div className="speaker-meta">
                <p className="speaker-role">{speaker.role}</p>
                {speaker.topics.map((topic) => (
                  <p className="speaker-topic" key={topic}>
                    {topic}
                  </p>
                ))}
                <p className="speaker-bio">
                  <SpeakerBio speaker={speaker} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
