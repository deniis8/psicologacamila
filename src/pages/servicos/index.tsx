import { ContatoWhatsApp } from "../../components/whatsapp";
import styles from "../servicos/servicos.module.css";

export function Servicos() {
  return (
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
  );
}
