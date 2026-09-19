import { Helmet } from "react-helmet-async";
import camilaPatricio from "../../assets/camilaPatricio.jpg";
import { BotaoWhatsApp } from "../../components/botao-whatsapp";
import styles from "./home.module.css";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Psicóloga Camila Patrício - Psicoterapia Presencial & Online em São Paulo</title>
        <meta name="description" content="Psicologia presencial e online com Camila Patrício. Especialista em terapia cognitivo-comportamental para crianças, adolescentes e adultos. Atendimento humanizado e qualificado." />
        <meta property="og:title" content="Psicóloga Camila Patrício - Psicoterapia Presencial & Online" />
        <meta property="og:description" content="Atendimento psicológico humanizado em São Paulo. Especialista em terapia cognitivo-comportamental." />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroConteudo}>
          <div className={styles.heroTexto}>
            <h1 className={styles.titulo}>
              Psicoterapia<br />Presencial & Online
            </h1>
            <BotaoWhatsApp>Agendar Consulta</BotaoWhatsApp>
          </div>

          <div className={styles.retrato}>
            <div className={styles.halo} aria-hidden="true">
              <span className={styles.meiaEsquerda} />
              <span className={styles.meiaDireita} />
            </div>
            <img
              className={styles.foto}
              src={camilaPatricio}
              alt="Psicóloga Camila Patrício"
              width={1500}
              height={1563}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className={styles.sobre}>
        <div className={styles.sobreGrade}>
          <h2 className={styles.sobreTitulo}>Conheça a Psicóloga Camila Patrício</h2>

          <div className={styles.sobreTexto}>
            <p className={styles.lede}>
              Desde 2019, atuo na clínica psicológica, oferecendo um espaço de acolhimento, escuta qualificada e construção conjunta de caminhos para o bem-estar emocional. Meu trabalho é fundamentado em uma prática humanizada e próxima, com atendimentos voltados a crianças, adolescentes e adultos, sempre respeitando a singularidade de cada história.
            </p>
            <p>
              Sou pós-graduada em Terapia Cognitivo-Comportamental e especialista em Psicologia da Saúde e Hospitalar. Ao longo da minha trajetória, mantive a clínica em paralelo a outras experiências que enriqueceram meu olhar profissional: no Conselho Tutelar, acompanhei situações de vulnerabilidade e fortalecimento familiar; já na área hospitalar, atuei em pediatria e oncologia, oferecendo suporte emocional diante de diagnósticos, tratamentos e processos de luto.
            </p>
            <p>
              Buscando constante atualização, realizei cursos em áreas essenciais, como prevenção ao suicídio, comunicação com crianças sobre adoecimento e morte, violência por parceiro íntimo e teorias e técnicas psicoterápicas. Essas formações complementam e fortalecem minha prática clínica, permitindo um atendimento sensível, ético e baseado em evidências.
            </p>
            <p>
              Meu propósito é oferecer um espaço seguro, onde cada pessoa possa se sentir compreendida, fortalecida e capaz de construir novos caminhos para sua vida com mais equilíbrio e leveza.
            </p>
          </div>

          <blockquote className={styles.citacao}>
            <p>
              “Um espaço de cuidado e escuta para que você possa compreender seus sentimentos, enfrentar desafios e construir novos caminhos com mais leveza.”
            </p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
