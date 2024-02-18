import styles from "./About.module.css"

export function About() {
    return(
        <section id="inicio" className={styles.sobre}>
            <h1 className={styles.nombre}>Ezequiel Daniel Caceres</h1>
            <h2 className={styles.titulo}>Sobre Mí</h2>
            <p>
                ¡Hola! Soy Ezequiel Cáceres, un entusiasta de la programación con un año de estudios en informática. Mi verdadero salto en el desarrollo vino con SoyHenry, donde completé la carrera full stack, expandiendo mis habilidades y conocimientos. Comprometido con el aprendizaje constante, estoy emocionado por seguir creciendo y enfrentar nuevos retos como desarrollador.
            </p>

        </section>
    )
}