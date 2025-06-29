import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./contatos.module.css";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Contatos() {
    return (
        <main>
            <Header />            
            <div className={styles.containerContatos}>
                <p className={styles.contatoItem}>
                    Agenda a sua consulta:
                </p>
                <p
                    className={styles.contatoItem}
                    onClick={() => window.open("https://wa.me/5511943660029", "_blank")}
                    style={{ cursor: "pointer" }}
                >
                    <FaWhatsapp style={{ marginRight: "8px" }} color="#25D366" />
                    +55 11 94366-0029
                </p>

                <p
                    className={styles.contatoItem}
                    onClick={() => window.location.href = "mailto:psico.camilapatricio@outlook.com"}
                    style={{ cursor: "pointer" }}
                >
                    <FaEnvelope style={{ marginRight: "8px" }} color="#87CEFA	" />
                    psico.camilapatricio@outlook.com
                </p>

                <p
                    className={styles.contatoItem}
                    onClick={() => window.open("https://instagram.com/psico.camilapatricio", "_blank")}
                    style={{ cursor: "pointer" }}
                >
                    <FaInstagram style={{ marginRight: "8px" }} color="#C13584" />
                    @psico.camilapatricio
                </p>
            </div>
            <Footer />
        </main>
    );
}
