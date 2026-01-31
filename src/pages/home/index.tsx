import styles from "./home.module.css";
import camilaPatricio from "../../assets/camilaPatricio.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { ContatoWhatsApp } from "../../components/whatsapp";

export function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.containerTitulo}>
          <h1 className={styles.h1Titulo}>
           Psicoterapia<br />Presencial & Online
          </h1>

          <button
            className={styles.botaoAgendar}
            onClick={() =>
              window.open("https://wa.me/5511943660029", "_blank")
            }
          >
            <FaWhatsapp size={22} />
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* SOBRE */}
      <section className={styles.containerTexto}>
        <div className={styles.containerDivisaoTexto}>
          <div className={styles.imagemWrapper}>
            <img
              className={styles.imagemCamila}
              src={camilaPatricio}
              alt="Psicóloga Camila Patrício"
            />
          </div>

          <div className={styles.textoWrapper}>
            <h3 className={styles.h3Titulo}>
              Conheça a Psicóloga Camila Patrício
            </h3>

            <p className={styles.texto}> Desde 2019, atuo na clínica psicológica, oferecendo um espaço de acolhimento, escuta qualificada e construção conjunta de caminhos para o bem-estar emocional. Meu trabalho é fundamentado em uma prática humanizada e próxima, com atendimentos voltados a crianças, adolescentes e adultos, sempre respeitando a singularidade de cada história. <br /><br /> Sou pós-graduanda em Terapia Cognitivo-Comportamental e especialista em Psicologia da Saúde e Hospitalar. Ao longo da minha trajetória, mantive a clínica em paralelo a outras experiências que enriqueceram meu olhar profissional: no Conselho Tutelar, acompanhei situações de vulnerabilidade e fortalecimento familiar; já na área hospitalar, atuei em pediatria e oncologia, oferecendo suporte emocional diante de diagnósticos, tratamentos e processos de luto.<br /><br /> Buscando constante atualização, realizei cursos em áreas essenciais, como prevenção ao suicídio, comunicação com crianças sobre adoecimento e morte, violência por parceiro íntimo e teorias e técnicas psicoterápicas. Essas formações complementam e fortalecem minha prática clínica, permitindo um atendimento sensível, ético e baseado em evidências.<br /><br /> Meu propósito é oferecer um espaço seguro, onde cada pessoa possa se sentir compreendida, fortalecida e capaz de construir novos caminhos para sua vida com mais equilíbrio e leveza.<br /><br /> “Um espaço de cuidado e escuta para que você possa compreender seus sentimentos, enfrentar desafios e construir novos caminhos com mais leveza.” </p>
          </div>
        </div>
      </section>

      <ContatoWhatsApp />
    </main>
  );
}
