import styles from "./header.module.css";
import logoHeader from "../../assets/logoHeader.png";
import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logoTitulo}>
                <Link to="/">
                    <img className={styles.imgHeader} src={logoHeader} alt="Logo Header" />
                </Link>
                <Link to="/">
                    <h1 className={styles.titulo}>Camila Patrício</h1>
                </Link>
            </div>

            <ul className={styles.menuHome}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/servicos" className={({ isActive }) => isActive ? styles.active : ""}>
                        Serviços
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contatos" className={({ isActive }) => isActive ? styles.active : ""}>
                        Contatos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/perguntas" className={({ isActive }) => isActive ? styles.active : ""}>
                        Perguntas Frequentes
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}