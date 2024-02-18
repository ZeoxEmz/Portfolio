import styles from "./Proyectos.module.css"
import pokedex from "../../img/Pokedex.jpeg"
import pokedexHome from "../../img/pokedexHome.png"

export function Proyectos() {
    return(
        <section className={styles.proyectos} id="proyectos">
            <h2 className={styles.titulo}>Proyectos</h2>
            <hr />
            <article className={styles.pokedexArticle}>
                <h3 className={styles.pokedexTitulo}>Pokedex</h3>
                  <p>
                    Una aplicación que muestra cards de personajes de los distintos pokemons con información básica.
                    Los usuarios pueden hacer clic en una card para ver más detalles.
                  </p>
                  <article className={styles.pokedexImages}>
                    <img className={styles.pokedexImg} src={pokedex} alt="preview de la pagina pokedex" />
                    <img className={styles.pokedexImg2} src={pokedexHome} alt="" />
                  </article>
                  
                  <a className={styles.pokedexLink} href="https://zeoxemz.github.io/pokedex/" target="_blank" rel="noopener noreferrer">
                    Haz click aquí para entrar
                  </a>
            </article>
            <hr className={styles.hr}/>
        </section>
    )
}