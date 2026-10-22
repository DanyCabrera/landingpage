import { SOCIALS } from "../data/content";

const PATHS = {
  tiktok:
    "M14.6 3.2c.5 2.6 2 4.4 4.4 4.8v2.6a7.1 7.1 0 0 1-4.4-1.4v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V3.2h2.7z",
  facebook:
    "M14.2 8.4V6.9c0-.7.2-1.2 1.3-1.2H16.5V3h-2C11.8 3 11 4.3 11 6.4v2H9.2v2.4H11V21h3.2v-9.2h2.1l.3-2.4h-2.4z",
  instagram:
    "M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5zm8 1.8H8A2.7 2.7 0 0 0 5.3 8v8A2.7 2.7 0 0 0 8 18.7h8A2.7 2.7 0 0 0 18.7 16V8A2.7 2.7 0 0 0 16 5.3zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.7A2.1 2.1 0 1 0 14.1 12 2.1 2.1 0 0 0 12 9.9zm5.1-3.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z",
};

export default function SocialLinks({ label = "Redes sociales" }) {
  return (
    <div className="socials" aria-label={label}>
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          className="social"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d={PATHS[social.icon]} />
          </svg>
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
}
