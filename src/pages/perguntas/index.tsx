import { Helmet } from "react-helmet-async";
import styles from "./perguntas.module.css";

const perguntas = [
  {
    pergunta: "Como funciona a primeira sessão de psicoterapia?",
    resposta:
      "A primeira sessão é um momento de acolhimento e escuta. Conversamos sobre suas demandas, história de vida e expectativas em relação à terapia. É também uma oportunidade para você conhecer meu trabalho e tirar dúvidas sobre o processo.",
  },
  {
    pergunta: "Qual é a diferença entre atendimento psicológico para adultos e para crianças?",
    resposta:
      "O trabalho com adultos é focado no diálogo e na reflexão sobre sentimentos, pensamentos e comportamentos. Já com crianças, utilizo recursos lúdicos (como jogos, histórias e desenhos) para facilitar a expressão emocional. Além disso, o acompanhamento infanto-juvenil envolve orientação e parceria com os responsáveis.",
  },
  {
    pergunta: "Quanto tempo dura uma sessão?",
    resposta:
      "As sessões geralmente têm duração de 50 minutos a 1 hora, tanto para adultos quanto para crianças.",
  },
  {
    pergunta: "Com que frequência as sessões acontecem?",
    resposta:
      "Na maioria dos casos, os encontros são semanais. Essa frequência garante continuidade e favorece o avanço no processo terapêutico, mas pode ser ajustada conforme a necessidade de cada pessoa.",
  },
  {
    pergunta: "Quanto tempo leva, em média, para perceber resultados na terapia?",
    resposta:
      "Cada pessoa tem seu ritmo. Alguns pacientes relatam mudanças logo nos primeiros encontros, enquanto outros percebem resultados de forma mais gradual. O mais importante é compreender que a terapia é um processo de construção.",
  },
  {
    pergunta: "O que devo esperar do processo terapêutico?",
    resposta:
      "A terapia é um espaço seguro para falar sobre sentimentos, dificuldades e conquistas. O objetivo não é dar respostas prontas, mas auxiliar na compreensão das próprias emoções e na construção de recursos internos para lidar melhor com os desafios.",
  },
  {
    pergunta: "O psicólogo pode prescrever remédios?",
    resposta:
      "Não. Apenas médicos psiquiatras podem prescrever medicação. No entanto, quando necessário, posso trabalhar em conjunto com outros profissionais de saúde, sempre visando o bem-estar do paciente.",
  },
  {
    pergunta: "Como funciona a psicoterapia infantil? Os pais participam das sessões?",
    resposta:
      "O processo começa com uma anamnese realizada com os pais ou responsáveis, para compreender a história da criança, suas necessidades e contexto familiar. As sessões seguintes são realizadas diretamente com a criança, em um espaço lúdico e acolhedor, onde ela pode se expressar por meio de brincadeiras, histórias e atividades criativas. Quando necessário, os pais são chamados para encontros de orientação parental, com o objetivo de alinhar estratégias de apoio em casa e na rotina familiar. Em alguns casos, também pode ser realizada visita escolar, a fim de compreender melhor o ambiente da criança e favorecer seu desenvolvimento.",
  },
  {
    pergunta: "As sessões são sigilosas?",
    resposta:
      "Sim. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo. No caso das crianças, compartilho informações com os responsáveis quando é necessário para o acompanhamento adequado. O Sigilo profissional pode ser quebrado em casos excepcionais, como ameaça iminente ao direito à vida, a terceiros ou ao próprio psicólogo.",
  },
  {
    pergunta: "Atende online e presencial? Como funciona cada formato?",
    resposta:
      "Sim. Atendo presencialmente em consultório e também online, de forma segura e ética. As sessões virtuais são realizadas por videochamada e oferecem a mesma qualidade de acolhimento e sigilo do atendimento presencial.",
  },
];

export function Perguntas() {
  return (
    <>
      <Helmet>
        <title>Perguntas Frequentes - Psicóterapia com Camila Patrício</title>
        <meta name="description" content="Dúvidas frequentes sobre psicoterapia, primeira sessão, diferenças de atendimento infantil e adulto, duração e frequência das sessões com Camila Patrício." />
        <meta property="og:title" content="Perguntas Frequentes - Psicoterapia" />
        <meta property="og:description" content="Tire suas dúvidas sobre psicoterapia, atendimento e agendamento." />
      </Helmet>

      <section className={styles.faq}>
        <div className={styles.container}>
          <h1 className={styles.titulo}>Dúvidas Frequentes</h1>

          <div className={styles.lista}>
            {perguntas.map((item) => (
              <details key={item.pergunta} className={styles.item}>
                <summary className={styles.pergunta}>
                  <span>{item.pergunta}</span>
                  <span className={styles.icone} aria-hidden="true" />
                </summary>
                <p className={styles.resposta}>{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
