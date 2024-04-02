import styles from './Posts.module.css'

export function Posts() {
    return (

        <article className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" className={styles.avatar} />

                    <div className={styles.authorInfo}>
                        <strong>Técnico do Projeto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='01/04/2024' dateTime='01/04/2024'>Publicado a 1 hora</time>

                <div className={styles.content}>

                    <p>Fala Galera</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit beatae dicta consequatur.</p>
                    <p><a href="https://web.design/projeto">Web.design/projeto</a></p>
                    <p><a href="#">#novoprojeto</a></p>
                </div>

                <form className={styles.commentsForm}></form>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe seu comentário' cols="30" rows="10" />

                <button type='submit'></button>
            </header>
        </article>
    )
}