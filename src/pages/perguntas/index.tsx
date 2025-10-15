import { Header } from "../../components/header";
import { Contatos } from "../contatos";
import style from "../perguntas/perguntas.module.css";

export function Perguntas() {
    return (
        <main>
            <Header />
            <div>
                <br /><br /><br /><br /><br />
                <h1 className={style.h1}>1. Como funciona a primeira sessão de psicoterapia?</h1>
                <p className={style.p}>A primeira sessão é um momento de acolhimento e escuta. Conversamos sobre suas demandas, história de vida e expectativas em relação à terapia. É também uma oportunidade para você conhecer meu trabalho e tirar dúvidas sobre o processo.</p>

                <h1 className={style.h1}>2. Qual é a diferença entre atendimento psicológico para adultos e para crianças?</h1>
                <p className={style.p}>O trabalho com adultos é focado no diálogo e na reflexão sobre sentimentos, pensamentos e comportamentos. Já com crianças, utilizo recursos lúdicos (como jogos, histórias e desenhos) para facilitar a expressão emocional. Além disso, o acompanhamento infanto-juvenil envolve orientação e parceria com os responsáveis.</p>

                <h1 className={style.h1}>3. Quanto tempo dura uma sessão?</h1>
                <p className={style.p}>As sessões geralmente têm duração de 50 minutos a 1 hora, tanto para adultos quanto para crianças.</p>

                <h1 className={style.h1}>4. Com que frequência as sessões acontecem?</h1>
                <p className={style.p}>Na maioria dos casos, os encontros são semanais. Essa frequência garante continuidade e favorece o avanço no processo terapêutico, mas pode ser ajustada conforme a necessidade de cada pessoa.</p>

                <h1 className={style.h1}>5. Quanto tempo leva, em média, para perceber resultados na terapia?</h1>
                <p className={style.p}>Cada pessoa tem seu ritmo. Alguns pacientes relatam mudanças logo nos primeiros encontros, enquanto outros percebem resultados de forma mais gradual. O mais importante é compreender que a terapia é um processo de construção.</p>

                <h1 className={style.h1}>6. O que devo esperar do processo terapêutico?</h1>
                <p className={style.p}>A terapia é um espaço seguro para falar sobre sentimentos, dificuldades e conquistas. O objetivo não é dar respostas prontas, mas auxiliar na compreensão das próprias emoções e na construção de recursos internos para lidar melhor com os desafios.</p>

                <h1 className={style.h1}>7. O psicólogo pode prescrever remédios?</h1>
                <p className={style.p}>Não. Apenas médicos psiquiatras podem prescrever medicação. No entanto, quando necessário, posso trabalhar em conjunto com outros profissionais de saúde, sempre visando o bem-estar do paciente.</p>

                <h1 className={style.h1}>8. Como funciona a psicoterapia infantil? Os pais participam das sessões?</h1>
                <p className={style.p}>O processo começa com uma anamnese realizada com os pais ou responsáveis, para compreender a história da criança, suas necessidades e contexto familiar. As sessões seguintes são realizadas diretamente com a criança, em um espaço lúdico e acolhedor, onde ela pode se expressar por meio de brincadeiras, histórias e atividades criativas. Quando necessário, os pais são chamados para encontros de orientação parental, com o objetivo de alinhar estratégias de apoio em casa e na rotina familiar. Em alguns casos, também pode ser realizada visita escolar, a fim de compreender melhor o ambiente da criança e favorecer seu desenvolvimento.</p>

                <h1 className={style.h1}>9. As sessões são sigilosas?</h1>
                <p className={style.p}>Sim. O sigilo é garantido pelo Código de Ética Profissional do Psicólogo. No caso das crianças, compartilho informações com os responsáveis quando é necessário para o acompanhamento adequado. O Sigilo profissional pode ser quebrado em casos excepcionais, como ameaça iminente ao direito à vida, a terceiros ou ao próprio psicólogo.</p>

                <h1 className={style.h1}>10. Atende online e presencial? Como funciona cada formato?</h1>
                <p className={style.p}>Sim. Atendo presencialmente em consultório e também online, de forma segura e ética. As sessões virtuais são realizadas por videochamada e oferecem a mesma qualidade de acolhimento e sigilo do atendimento presencial.</p>

            </div>
            {/*<Contatos />*/}
        </main>
    )
}