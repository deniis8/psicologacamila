import { ContatoWhatsApp } from "../../components/whatsapp";
import styles from "../servicos/servicos.module.css";
import { Helmet } from 'react-helmet-async';

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
        <h1 className={styles.h1}>Serviços</h1>

        <ul className={styles.lista}>
          <li>Psicoterapia individual para adultos</li>
          <li>Psicoterapia infanto-juvenil (adaptada e com recursos lúdicos)</li>
          <li>Psicoterapia on-line</li>
          <li>Anamnese com pais ou responsáveis</li>
          <li>Orientação parental</li>
          <li>Visita escolar</li>
          <li>Acompanhamento em situações de crise</li>
          <li>Orientação psicológica breve</li>
          <li>Avaliação psicológica</li>
        </ul>

        <div className={styles.cta}>
          <ContatoWhatsApp />
        </div>
      </div>
    </section>
    </>
  );
}
