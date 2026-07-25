import { useNavigate } from "react-router-dom";

import "./index.css";

export default function DataLocal() {
  const nav = useNavigate();

  const handleLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="bg" style={{ marginTop: "60px", marginBottom: "-76px" }}>
        <button className="back-button" onClick={() => nav("/")}>
          <span className="back-arrow">←</span>
          <span className="back-text">Voltar</span>
        </button>

        <div className="hero-text" style={{ transform: "translateY(-60px)" }}>
          <h1>Data e Local</h1>
          <h1 style={{ marginTop: "-30px" }}>────୨ৎ────</h1>

          <div className="dtlo-wrapper">
            <h2>Data</h2>
            <p>22/08/2026</p>
          </div>

          <div
            className="dtlo-wrapper"
            style={{ backgroundImage: "url('/images/icons/icon_time.png')" }}
          >
            <h2>Horário</h2>
            <p>16h30min</p>
          </div>

          <div
            className="dtlo-wrapper"
            style={{
              backgroundImage: "url('/images/icons/icon_location.png')",
            }}
          >
            <h2>Local</h2>
            <p>Rua Alfazema, 8</p>
          </div>

          <img
            onClick={() =>
              handleLink("https://maps.app.goo.gl/tLYeQc7gAKW9WaS17")
            }
            src="/images/local.png"
            className="local-icon"
          />
        </div>
      </div>

      <h1 style={{ color: "#a11a05", marginTop: "60px" }}>
        ────────୨ৎ────────
      </h1>
    </>
  );
}
