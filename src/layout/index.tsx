import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "./layout.module.css";

export function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            
            <main className={styles.content}>
                <Outlet />
            </main>           
            <Footer />
        </div>
    )
}
