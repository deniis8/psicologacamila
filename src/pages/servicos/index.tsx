import { Header } from "../../components/header";
import { Contatos } from "../contatos";
import styles from "../servicos/servicos.module.css";

export function Servicos() {
    return (
        <div>
            <Header />
            <br /><br /><br /><br /><br />
            <h1 className={styles.h1}>Serviços</h1>
            
            <p className={styles.p}>Psicoterapia individual para adultos<br/>
            Psicoterapia infanto-juvenil (adaptada e com recursos lúdicos)<br/>
            Psicoterapia on-line<br/>
            Anamnese com pais ou responsáveis<br/>
            Orientação parental<br/>
            Visita escolar<br/>
            Acompanhamento em situações de crise<br/>
            Orientação psicológica breve<br/>
            Avaliação psicológica</p>
            {/*<Contatos />*/}
        </div>
    )
}