import { FaWhatsapp } from "react-icons/fa";
import { contato } from "../../data/contato";
import styles from "./whatsapp.module.css";

export function ContatoWhatsApp() {
  return (
    <a
      className={styles.flutuante}
      href={contato.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Camila pelo WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
