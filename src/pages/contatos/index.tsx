import styles from "./contatos.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Contatos() {
  return (
    <div className={styles.containerContatos}>
      <a
        className={styles.contatoItem}
        href="https://wa.me/5511943660029"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className={styles.icon} />
        <span>+55 11 94366-0029</span>
      </a>

      <a
        className={styles.contatoItem}
        href="https://instagram.com/psico.camilapatricio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.icon} />
        <span>@psico.camilapatricio</span>
      </a>

      <a
        className={styles.contatoItem}
        href="mailto:psico.camilapatricio@outlook.com"
      >
        <FaEnvelope className={styles.icon} />
        <span>psico.camilapatricio@outlook.com</span>
      </a>
    </div>
  );
}
