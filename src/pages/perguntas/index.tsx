import { ContatoWhatsApp } from "../../components/whatsapp";
import styles from "../perguntas/perguntas.module.css";

export function Perguntas() {
  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h1 className={styles.tituloSecao}>Dúvidas Frequentes</h1>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Como funciona a primeira sessão de psicoterapia?
          </h2>
          <p className={styles.resposta}>
            A primeira sessão é um momento de acolhimento e escuta. Conversamos sobre suas demandas, história de vida e expectativas em relação à terapia. É também uma oportunidade para você conhecer meu trabalho e tirar dúvidas sobre o processo.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Qual é a diferença entre atendimento psicológico para adultos e para crianças?
          </h2>
          <p className={styles.resposta}>
            O trabalho com adultos é focado no diálogo e na reflexão sobre sentimentos, pensamentos e comportamentos. Já com crianças, utilizo recursos lúdicos (como jogos, histórias e desenhos) para facilitar a expressão emocional. Além disso, o acompanhamento infanto-juvenil envolve orientação e parceria com os responsáveis.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Quanto tempo dura uma sessão?
          </h2>
          <p className={styles.resposta}>
            As sessões geralmente têm duração de 50 minutos a 1 hora, tanto para adultos quanto para crianças.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Com que frequência as sessões acontecem?
          </h2>
          <p className={styles.resposta}>
            Na maioria dos casos, os encontros são semanais. Essa frequência garante continuidade e favorece o avanço no processo terapêutico, mas pode ser ajustada conforme a necessidade de cada pessoa.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Quanto tempo leva, em média, para perceber resultados na terapia?
          </h2>
          <p className={styles.resposta}>
            Cada pessoa tem seu ritmo. Alguns pacientes relatam mudanças logo nos primeiros encontros, enquanto outros percebem resultados de forma mais gradual. O mais importante é compreender que a terapia é um processo de construção.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            O que devo esperar do processo terapêutico?
          </h2>
          <p className={styles.resposta}>
            A terapia é um espaço seguro para falar sobre sentimentos, dificuldades e conquistas. O objetivo não é dar respostas prontas, mas auxiliar na compreensão das próprias emoções e na construção de recursos internos para lidar melhor com os desafios.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            O psicólogo pode prescrever remédios?
          </h2>
          <p className={styles.resposta}>
            Não. Apenas médicos psiquiatras podem prescrever medicação. No entanto, quando necessário, posso trabalhar em conjunto com outros profissionais de saúde, sempre visando o bem-estar do paciente.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Como funciona a psicoterapia infantil? Os pais participam das sessões?
          </h2>
          <p className={styles.resposta}>
            O processo começa com uma anamnese realizada com os pais ou responsáveis, para compreender a história da criança, suas necessidades e contexto familiar. As sessões seguintes são realizadas diretamente com a criança, em um espaço lúdico e acolhedor, onde ela pode se expressar por meio de brincadeiras, histórias e atividades criativas. Quando necessário, os pais são chamados para encontros de orientação parental, com o objetivo de alinhar estratégias de apoio em casa e na rotina familiar. Em alguns casos, também pode ser realizada visita escolar, a fim de compreender melhor o ambiente da criança e favorecer seu desenvolvimento.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            As sessões são sigilosas?
          </h2>
          <p className={styles.resposta}>
            Sim. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo. No caso das crianças, compartilho informações com os responsáveis quando é necessário para o acompanhamento adequado. O Sigilo profissional pode ser quebrado em casos excepcionais, como ameaça iminente ao direito à vida, a terceiros ou ao próprio psicólogo.
          </p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.pergunta}>
            Atende online e presencial? Como funciona cada formato?
          </h2>
          <p className={styles.resposta}>
            Sim. Atendo presencialmente em consultório e também online, de forma segura e ética. As sessões virtuais são realizadas por videochamada e oferecem a mesma qualidade de acolhimento e sigilo do atendimento presencial.
          </p>
        </div>

        <div className={styles.cta}>
          <ContatoWhatsApp />
        </div>
      </div>
    </section>
  );
}
