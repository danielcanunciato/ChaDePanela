import { useNavigate } from "react-router-dom";

import "./index.css";

export default function Presentes() {
    const nav = useNavigate();

    return (
        <>
        <div className="bg">
            
            <button className="back-button" onClick={() => nav("/")}>
            <span className="back-arrow">🠜</span>
            <span className="back-text">Voltar</span>
            </button>

            <div className="hero2-text">

                <h1>Presentes para os Noivos</h1>
                <h1 style={{marginTop: "-24px", marginBottom: "-20px"}}>────୨ৎ────</h1>

                <p>
                    O maior presente é a sua presença neste dia tão especial. 
                    Mas, se desejar nos presentar, fique à vontade para escolher 
                    o que vier do seu coração. <br />
                    Cada gesto de carinho será recebido com muita alegria e gratidão!
                </p>

                <h1 style={{marginTop: "-12px"}}>Necessitamos se puder</h1>
                <h1 style={{marginTop: "-24px", marginBottom: "-20px"}}>────୨ৎ────</h1>

                <p style={{fontSize: "1.1rem"}}>
                    Jogo de Panelas <br/>
                    Jogo de Talheres <br/>
                    Jogo de Facas <br/>
                    Jogo de Prato <br/>
                    Jogo de Copos <br/>
                    Jogo de Xícara <br/>
                    Taça de Vinho <br/>
                    Assadeira Antiaderente <br/>
                    Liquidificador <br/>
                    Rodo pra Pia
                </p>

            </div>

        </div>

        <div className="bg" style={{marginBottom: "-40px"}}>

            <div className="hero2-text">

                <h1 style={{marginTop: "40px"}}>Presentes para os Noivos</h1>
                <h1 style={{marginTop: "-24px", marginBottom: "-20px"}}>────୨ৎ────</h1>

                <p style={{fontSize: "1.1rem"}}>
                    Estamos realizando um Chá de Panela para a preparação de nosso casamento! <br />
                    Caso queira nos presentear com pix, pode escanear o QR CODE ou usar a chave pix que
                    está logo abaixo.
                </p>

                <div className="qrcode-wrapper">
                    <div className="chave-pix">
                        <p>
                            <span style={{fontSize: '1.65rem'}}>Chave Pix</span> <br />
                            <span style={{fontSize: '1.2rem'}}>11 978877392</span> <br/>
                            <span style={{fontSize: '.9rem'}}>Daniel Camilo Anunciato de Oliveira</span> <br/>
                            <br />
                            <span style={{fontSize: '1.2rem'}}>11 983049632</span> <br/>
                            <span style={{fontSize: '.9rem'}}>Marina da Silva Santos</span>
                        </p>
                    </div>

                    <div className="qrcode">
                        <img src="/images/qrcode.png" />
                    </div>
                </div>

            </div>

        </div>
        </>
    );
}
