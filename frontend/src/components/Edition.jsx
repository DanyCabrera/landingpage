import BackgroundVideo from "./BackgroundVideo";

export default function Edition() {
  return (
    <section className="edition" id="convencion">
      <div className="container edition-layout">
        <div>
          <h2>XIV Convención de Ciencia y Tecnología</h2>
          <p className="edition-subtitle">
            Más allá del código: construyendo una carrera en tecnología
          </p>
          <p className="lead">
            Un espacio para aprender, conectar y descubrir nuevas formas de vivir la
            tecnología. En esta edición, contaremos con conferencias sobre desarrollo de
            software, realidad aumentada, arquitectura de experiencias y la construcción
            de una carrera profesional, impartidas por expertos que aportarán su
            trayectoria y conocimientos en el sector.
          </p>
        </div>
        <aside className="edition-panel">
          <BackgroundVideo src="/video/edicion.mp4" className="edition-video" />
        </aside>
      </div>
    </section>
  );
}
