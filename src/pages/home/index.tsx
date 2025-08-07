import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./home.module.css";
import camilaPatricio from "../../assets/camilaPatricio.png";
import { FaWhatsapp } from "react-icons/fa";

export function Home() {
    return (
        <main>
            <Header />
            <div className={styles.imagemFundo}>
                <div className={styles.containerTitulo}>
                    <h1 className={styles.h1Titulo}>Psicóloga & <br /> Terapia Online</h1>
                    <button
                        className={styles.botaoAgendar}
                        onClick={() => window.open("https://wa.me/5511943660029", "_blank")}
                    >
                        <FaWhatsapp style={{ marginRight: "8px" } } color="#FFF" size={23} />
                        Agendar Consulta
                    </button>

                </div>
            </div>
            <br />
            <div className={styles.containerTexto}>

                <br />
                <div className={styles.containerDivisaoTexto}>
                    <img
                        className={styles.imagemCamila}
                        src={camilaPatricio}
                        alt="Camila Patrício"
                    />

                    <p className={styles.texto}>
                        <h3 className={styles.h3Titulo}>Conheça a Psicológa Camila Patrício</h3><br />
                        A psicóloga Camila Patrício é uma profissional apaixonada pelo desenvolvimento humano e pelo cuidado com a saúde mental. Com uma escuta sensível e um olhar atento às particularidades de cada inmainíduo, Camila constrói um espaço de acolhimento e segurança, onde o paciente pode se expressar livremente, refletir sobre sua trajetória e buscar novos caminhos para lidar com os desafios da vida.
                        Formada em Psicologia e com especialização em abordagem clínica, Camila Patrício dedica-se ao atendimento de adolescentes, adultos e famílias, atuando com seriedade, ética e profundo respeito pela história de cada pessoa que chega até ela. Ao longo de sua carreira, tem se aprofundado em temas como ansiedade, depressão, relacionamentos interpessoais, autoestima, luto, traumas e desenvolvimento emocional.
                        Seu trabalho é norteado pela escuta empática, pelo não julgamento e pela crença no potencial de transformação que existe em cada um de nós. Camila acredita que o processo terapêutico é uma jornada de autoconhecimento e fortalecimento interior, capaz de gerar mudanças significativas na forma como nos relacionamos conosco e com o mundo ao nosso redor.
                        Além dos atendimentos clínicos, Camila também participa constantemente de cursos, supervisões e congressos, mantendo-se atualizada com as novas práticas e reflexões na área da psicologia. Seu compromisso com o crescimento pessoal e profissional reflete-se na qualidade do atendimento que oferece, sempre com foco no bem-estar, na escuta ética e no cuidado integral com o ser humano.
                        Seja em sessões presenciais ou online, a psicóloga Camila Patrício oferece um ambiente acolhedor, seguro e humanizado, onde cada paciente é incentivado a construir sua própria história com mais consciência, autonomia e equilíbrio emocional.
                    </p>
                </div>
                <div className={styles.iconeWhatsApp}>
                    <FaWhatsapp style={{ marginRight: "8px" } } color="#25D366" size={80} onClick={() => window.open("https://wa.me/5511943660029", "_blank")}/>
                </div>
            </div>
            <Footer />
        </main>
    )
}