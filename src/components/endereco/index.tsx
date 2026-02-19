import styles from "./endereco.module.css";

export default function Endereco() {
    return (
        <div className={styles.enderecoContainer}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.672700092207!2d-46.72714052409163!3d-23.327631153048106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee43eb91589f7%3A0x8564ea251263338e!2sAv.%20Sete%20de%20Setembro%2C%20169%20-%20Vila%20Artur%20Sestini%2C%20Franco%20da%20Rocha%20-%20SP%2C%2007851-120!5e0!3m2!1spt-BR!2sbr!4v1771465947267!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Endereço do consultório">
            </iframe>

            <p className={styles.endereco}>
                Av. Sete de Setembro, 169 - Vila Artur Sestini<br />
                Franco da Rocha - SP, 07851-120<br /><br />
                2° Andar, sala 20
            </p>
        </div>
    )
}