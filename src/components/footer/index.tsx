import Endereco from "../endereco";
import styles from "./contatos.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <section className={styles.containerContatos}>
      <div className={styles.containerInterno}>
        <div className={styles.infoBlock}>
          <h3 className={styles.titulo}>Entre em contato</h3>
          <p className={styles.descricao}>
            Estou disponível para atendimento, dúvidas e orientações.
          </p>
        </div>

        <div className={styles.coluna}>
          <a
            className={styles.contatoItem}
            href="https://wa.me/5511943660029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className={styles.icon} />
          </a>

          <a
            className={styles.contatoItem}
            href="https://instagram.com/psico.camilapatricio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>

          <a
            className={styles.contatoItem}
            href="mailto:psico.camilapatricio@outlook.com"
            aria-label="Email"
          >
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.mapaContainer}>
        <Endereco />
      </div>
    </section>
  );
}
