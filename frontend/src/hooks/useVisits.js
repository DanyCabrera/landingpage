import { useEffect, useState } from "react";
import { COUNTER } from "../data/content";

const STORAGE_KEY = "visitas-locales";
const SESSION_KEY = "visita-contada";

let pendingVisits;

function readLocalVisits(alreadyCounted) {
  let visits = Number(localStorage.getItem(STORAGE_KEY) || 0);
  if (!alreadyCounted) {
    visits += 1;
    localStorage.setItem(STORAGE_KEY, String(visits));
    sessionStorage.setItem(SESSION_KEY, "1");
  }
  return visits;
}

function loadVisits() {
  if (!pendingVisits) {
    pendingVisits = (async () => {
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
      const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";

      if (!isLocal) {
        try {
          const action = alreadyCounted ? "get" : "hit";
          const response = await fetch(
            `https://abacus.jasoncameron.dev/${action}/${COUNTER.namespace}/${COUNTER.key}`,
            { signal: AbortSignal.timeout(8000) }
          );
          if (!response.ok) throw new Error("sin contador");
          const data = await response.json();
          const value = Number(data.value);
          if (!Number.isFinite(value) || value < 0) throw new Error("respuesta invalida");
          sessionStorage.setItem(SESSION_KEY, "1");
          return value;
        } catch {
          return readLocalVisits(alreadyCounted);
        }
      }

      return readLocalVisits(alreadyCounted);
    })();
  }

  return pendingVisits;
}

export default function useVisits() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let active = true;
    loadVisits().then((value) => {
      if (active) setTotal(value);
    });
    return () => {
      active = false;
    };
  }, []);

  return total;
}
