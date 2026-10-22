import { Fragment, useEffect, useState } from "react";
import { EVENT_DATE } from "../data/content";

const UNITS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

function remainingParts(target) {
  const remaining = target - Date.now();
  const totalSeconds = Math.max(0, Math.floor(remaining / 1000));
  return {
    started: remaining <= 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function FlipPair({ value, label }) {
  const text = String(value).padStart(2, "0").slice(-2);
  return (
    <div className="flip-group">
      <div className="flip-pair" aria-label={label}>
        <span className="flip-digit">
          <b>{text[0]}</b>
        </span>
        <span className="flip-digit">
          <b>{text[1]}</b>
        </span>
      </div>
      <span className="flip-caption">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const target = new Date(EVENT_DATE).getTime();
  const [time, setTime] = useState(() => remainingParts(target));

  useEffect(() => {
    const update = () => setTime(remainingParts(target));
    update();
    if (target - Date.now() <= 0) return undefined;
    const clock = setInterval(update, 1000);
    return () => clearInterval(clock);
  }, [target]);

  return (
    <section className="countdown-band" aria-label="Cuenta regresiva">
      <div className="container">
        <div className="countdown" aria-live="polite">
          <p className="countdown-label">
            {time.started ? "La convención ya comenzó" : "Falta para la convención"}
          </p>
          <div className="flip-clock">
            {UNITS.map((unit, index) => (
              <Fragment key={unit.key}>
                {index > 0 && (
                  <span className="flip-colon" aria-hidden="true">
                    :
                  </span>
                )}
                <FlipPair value={time[unit.key]} label={unit.label} />
              </Fragment>
            ))}
          </div>
          {time.started && <p className="countdown-started">YA COMENZAMOS!</p>}
        </div>
      </div>
    </section>
  );
}
