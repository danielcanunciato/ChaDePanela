import { useNavigate } from 'react-router-dom';

import "./index.css";

export default function Home() {
  const nav = useNavigate();

  const handleClick = (path) => {
    nav(path)
  }
  
  const handleLink = (path) => {
    window.open(path, "_blank");
  }

  return (
    <>
      <div className="bg" style={{ marginTop: "40px", marginBottom: "-40px" }}>
        <div
          className="hero-text"
          style={{ transform: "translate(-8px, -40px) scale(0.9)" }}
        >
          <h1
            style={{ fontFamily: `"Great Vibes", cursive`, fontSize: "3rem" }}
          >
            Chá de Panela
          </h1>
          <h1
            style={{
              fonyFamily: `"Playfair Display", serif`,
              marginTop: "-30px",
            }}
          >
            ────୨ৎ────
          </h1>

          <p
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: "1.3rem",
              color: "rgb(143, 24, 30)",
              fontWeight: "700",
            }}
          >
            Convidamos você para o nosso Chá de Panela! <br />
            Será um momento especial para celebrar essa nova etapa e
            compartilhar uma tarde agradável. <br />
            Esperamos contar com a sua presença!
          </p>

          <div className="buttons-wrapper">
            <div className="button-item">
              <span className="button-label">Data e Local</span>
              <img
                onClick={() => handleClick("/data-e-local")}
                src="/images/buttons/btn_dataelocal.png"
                alt="Data e Local"
              />
            </div>

            <div
              className="button-item"
              style={{ transform: "translateY(10px)" }}
            >
              <span className="button-label">Confirmar Presença</span>
              <img
                onClick={() => handleLink("https://wa.link/il6mop")}
                src="/images/buttons/btn_confirpres.png"
                alt="Confirmar Presença"
              />
            </div>

            <div
              className="button-item"
              style={{ transform: "translateY(-10px)" }}
            >
              <span className="button-label">Sugestões de Presentes</span>
              <img
                onClick={() => handleClick("/presentes")}
                src="/images/buttons/btn_presentes.png"
                alt="Sugestões de Presentes"
              />
            </div>
          </div>

          <p id="nomesfofos-cuticuti">Marina e Daniel</p>
        </div>
      </div>

      <h1 style={{ color: "#a11a05" }}>────────୨ৎ────────</h1>
    </>
  );
}
