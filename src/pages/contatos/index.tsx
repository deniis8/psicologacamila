import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import styles from "./contatos.module.css";

export function Contatos() {
    return (
        <main>
            <Header />
            <div className={styles.containerContatos}>
                <p className={styles.contatoItem}>📱 WhatsApp: (11) 91234-5678</p>
                <p className={styles.contatoItem}>📧 E-mail: contato@exemplo.com</p>
                <p className={styles.contatoItem}>📷 Instagram: @seudominio</p>
            </div>
            <Footer />
        </main>
    );
}
