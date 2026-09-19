import { Helmet } from "react-helmet-async";
import styles from "./servicos.module.css";

const servicos = [
  "Psicoterapia individual para adultos",
  "Psicoterapia infanto-juvenil (adaptada e com recursos lúdicos)",
  "Psicoterapia on-line",
  "Anamnese com pais ou responsáveis",
  "Orientação parental",
  "Visita escolar",
  "Acompanhamento em situações de crise",
  "Orientação psicológica breve",
  "Avaliação psicológica",
];

export function Servicos() {
  return (
    <>
      <Helmet>
        <title>Serviços de Psicoterapia - Camila Patrício</title>
        <meta name="description" content="Conheça os serviços de psicoterapia de Camila Patrício: atendimento infantil, adolescente, adulto, terapia online, avaliação psicológica e orientação parental." />
        <meta property="og:title" content="Serviços de Psicoterapia - Camila Patrício" />
        <meta property="og:description" content="Psicoterapia individual, infantil, terapia online, orientação parental e muito mais." />
      </Helmet>

      <section className={styles.servicos}>
        <div className={styles.container}>
          <h1 className={styles.titulo}>Serviços</h1>

          <ul className={styles.lista}>
            {servicos.map((servico) => (
              <li key={servico} className={styles.item}>
                {servico}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
