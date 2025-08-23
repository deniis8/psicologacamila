import styles from "./header.module.css";
import logoHeader from "../../assets/logoHeader.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

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

            {!isMobile && (<ul className={styles.menuHome}>
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
                    <NavLink to="/perguntas" className={({ isActive }) => isActive ? styles.active : ""}>
                        Perguntas Frequentes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contatos" className={({ isActive }) => isActive ? styles.active : ""}>
                        Contatos
                    </NavLink>
                </li>
            </ul>)}

            {isMobile && (<>
                <button
                    className={styles.hamburgerButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars />
                </button>

                <nav className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                    <button
                        onClick={() => setMenuOpen(false)}
                        style={{
                            fontSize: "30px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "gray",  // aqui definimos a cor vermelha
                            padding: "10px"
                        }}
                    >
                        <FaTimes />
                    </button>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ""}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/servicos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ""}>
                                Serviços
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/perguntas" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ""}>
                                Perguntas Frequentes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contatos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? styles.active : ""}>
                                Contatos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </>
            )}

            {isMobile && menuOpen && (
                <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
            )}

        </header>
    )
}