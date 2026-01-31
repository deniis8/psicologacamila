import styles from "./whatsapp.module.css";
import whatsApp from "../../assets/imgWhatsApp.png";

export function ContatoWhatsApp() {
    return (
        <div className={styles.iconeWhatsApp}>
            <img
                className={styles.imagemWhatsApp}
                src={whatsApp}
                alt="Camila Patrício"
                onClick={() => window.open("https://wa.me/5511943660029", "_blank")}
                style={{ marginRight: "8px" }}
            />
        </div>
    )
}