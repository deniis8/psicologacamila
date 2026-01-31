import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Contatos } from "../pages/contatos";
import styles from "./layout.module.css";

export function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            
            <main className={styles.content}>
                <Outlet />
            </main>
            
            <Contatos />
        </div>
    )
}
