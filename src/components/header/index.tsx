import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoCerebro from "../../assets/logoCerebro.svg";
import { BotaoWhatsApp } from "../botao-whatsapp";
import styles from "./header.module.css";

const links = [
  { to: "/", texto: "Home" },
  { to: "/servicos", texto: "Serviços" },
  { to: "/perguntas", texto: "Perguntas Frequentes" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (!menuAberto) return;

    const fecharComEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuAberto(false);
    };
    document.addEventListener("keydown", fecharComEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  const fechar = () => setMenuAberto(false);
  const classeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.ativo}` : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.barra}>
        <Link to="/" className={styles.marca} onClick={fechar}>
          <img
            className={styles.logo}
            src={logoCerebro}
            alt=""
            width={120}
            height={120}
          />
          <span className={styles.identidade}>
            <span className={styles.nome}>Camila Patrício</span>
          </span>
        </Link>

        <nav className={styles.navDesktop} aria-label="Principal">
          <ul className={styles.lista}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={classeLink}>
                  {link.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <BotaoWhatsApp tamanho="compacto" className={styles.agendarDesktop}>
          Agendar Consulta
        </BotaoWhatsApp>

        <button
          type="button"
          className={styles.botaoMenu}
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="menu-mobile"
        className={`${styles.painel} ${menuAberto ? styles.aberto : ""}`}
        aria-label="Menu"
      >
        <ul className={styles.listaMobile}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={fechar}
                className={({ isActive }) =>
                  isActive ? `${styles.linkMobile} ${styles.ativo}` : styles.linkMobile
                }
              >
                {link.texto}
              </NavLink>
            </li>
          ))}
        </ul>
        <BotaoWhatsApp>Agendar Consulta</BotaoWhatsApp>
      </nav>
    </header>
  );
}
