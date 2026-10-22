export const EVENT_DATE = "2026-10-24T08:00:00-06:00";

export const COUNTER = {
  namespace: "landing-umg-reu",
  key: "xiv-convencion",
};

export const WHATSAPP_URL =
  "https://wa.me/50259755017?text=Hola%2C%20quiero%20comprar%20mi%20ticket%20para%20la%20XIV%20Convenci%C3%B3n%20de%20Ciencia%20y%20Tecnolog%C3%ADa";

export const NAV = [
  { href: "#ponentes", label: "Ponentes" },
  { href: "#lugar", label: "Lugar" },
  { href: "#registro", label: "Registro", cta: true },
];

export const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@estudiantessistemasreu1",
    icon: "tiktok",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1YPEZiZnPN/",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/decimosistemas.umg",
    icon: "instagram",
  },
];

export const HIGHLIGHTS = [
  { kicker: "Fecha", lines: ["Sábado 24 de octubre", "de 2026"] },
  { kicker: "Hora", lines: ["8:00 a.m."] },
  { kicker: "Lugar", lines: ["Hotel Astor,", "Salón Villa Colonial"] },
];

export const SPEAKERS = [
  {
    name: "Inga. Diana Fernández",
    role: "Desarrolladora de software",
    topics: ["Realidad Aumentada", "Construyendo una carrera en Tecnología"],
    photo: "/img/diana-fernandez.jpg",
    wide: true,
    bio: "Graduada de Ingeniería en Ciencias de la Computación por la Universidad del Valle de Guatemala, con distinción: magna cum laude. Tiene experiencia en desarrollo web front-end y full-stack, docencia universitaria y programación de videojuegos. Además, cuenta con estudios en Vancouver Film School (2025–2026).",
    honor: "magna cum laude",
  },
  {
    name: "Ing. Luis Pedro Gómez de la Roca",
    role: "Ingeniero en Informática y Sistemas",
    topics: ["Arquitectura de Experiencias", "Del código a la emoción"],
    photo: "/img/luis-pedro-gomez.png",
    bio: "Ingeniero en Ciencias de la Computación por la Universidad Rafael Landívar. Tiene experiencia en gestión de equipos de desarrollo de software, metodologías ágiles, automatización de procesos y mejora de sistemas. Cuenta con trayectoria en MedRisk desde 2011 y formación complementaria en diseño y programación de videojuegos.",
  },
];

export const VENUE = {
  title: "Hotel Astor, Salón Villa Colonial",
  mapTitle: "Mapa de Google del Salón Villa Colonial, enfrente del Hotel Astor, Retalhuleu",
  embed: "https://maps.google.com/maps?q=14.5370458,-91.6792728&z=18&hl=es&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=14.5370458,-91.6792728&travelmode=driving",
  maps: "https://maps.app.goo.gl/s4H3N2HCirUC2jkz5",
  details: [
    { label: "Dirección", value: "Hotel Astor, 5.ª calle 4-60, Zona 1" },
    { label: "Lugar", value: "Salón Villa Colonial" },
    { label: "Fecha", value: "Sábado 24 de octubre" },
    { label: "Hora", value: "8:00 a.m." },
  ],
};
