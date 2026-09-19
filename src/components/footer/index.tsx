import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { contato } from "../../data/contato";
import Endereco from "../endereco";
import styles from "./contatos.module.css";

export function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.conteudo}>
        <div className={styles.convite}>
          <h2 className={styles.titulo}>Entre em contato</h2>
          <p className={styles.descricao}>
            Estou disponível para atendimento, dúvidas e orientações.
          </p>

          <ul className={styles.contatos}>
            <li>
              <a
                className={styles.contato}
                href={contato.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className={styles.contato}
                href={contato.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram aria-hidden="true" />
                Instagram
              </a>
            </li>
            <li>
              <a className={styles.contato} href={`mailto:${contato.email}`}>
                <FaEnvelope aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.mapa}>
          <Endereco />
        </div>
      </div>
    </footer>
  );
}
