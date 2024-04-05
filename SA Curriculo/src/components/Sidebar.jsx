
import styles from "./Sidebar.module.css"

export default function Sidebar() {
    return (

        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />

                <strong>Técnico do Projeto</strong>
                <span>Web developer</span>
            </div>

            <div className={styles.habilidades}>

                <ul> Habilidades
                    <li> HTML </li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>

                <ul> Contato
                    <li>Email: Email@gmail.com </li>
                    <li>Telefone: 4002-8922</li>
                    <li>LinkedIn:  Email@gmail.com</li>
                </ul>

            </div>


        </aside>


    );


}