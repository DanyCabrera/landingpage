import { useState } from "react";
import { NAV } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="site-header" id="header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={close}>
          <img
            className="brand-logo"
            src="/img/logo-umg.png"
            alt="Universidad Mariano Gálvez de Guatemala"
          />
          <span className="brand-text">
            <strong>XIV Convención de Ciencia y Tecnología</strong>
            <small>Facultad de Ingeniería en Sistemas</small>
            <small>Centro Universitario de Retalhuleu</small>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-principal"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menú</span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={open ? "nav open" : "nav"} id="nav-principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.cta ? "btn-nav" : undefined}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
