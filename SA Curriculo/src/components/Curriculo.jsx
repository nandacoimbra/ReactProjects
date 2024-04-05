import styles from "./Curriculo.module.css";
import { Experiencia } from "./Experiencia";
import { Historico } from "./Historico";
import { Resumo } from "./Resumo";



export function Curriculo() {
    return (
        <div className={styles.conteudo}>
            <h1>
                Carlos Roberto
            </h1>
            <Resumo />
            <h2>
                Histórico Academico
            </h2>
            <Historico />
            <Historico />
            <Historico />
            <Experiencia />

        </div>

    )

}