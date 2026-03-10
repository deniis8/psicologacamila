import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "./layout.module.css";
import { ScrollRestoration } from "react-router-dom";

export function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            
            <main className={styles.content}>
                <Outlet />
                <ScrollRestoration />
            </main>           
            <Footer />
        </div>
    )
}
