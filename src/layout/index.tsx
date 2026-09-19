import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContatoWhatsApp } from "../components/whatsapp";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <a className={styles.pularConteudo} href="#conteudo">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className={styles.content}>
        <Outlet />
      </main>

      <Footer />
      <ContatoWhatsApp />
      <ScrollRestoration />
    </div>
  );
}
