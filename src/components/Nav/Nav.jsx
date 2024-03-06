import img from "../../imagenes/logo_patita/patita_acostada_oscuro.png"
import styles from "./nav.module.css"
import cv from "../../cv/curriculum.pdf"

// eslint-disable-next-line react/prop-types
export function Nav() {
    return(
        <nav className={styles.nav}>

        <a className={styles.inicio} href="#inicio"> <img className={styles.logo} src={img} alt="" />inicio</a>

        <div className={styles.div_link}>
          <a href="#proyectos">proyectos</a>
          <a href={cv} target="_blank" rel="noopener noreferrer">curriculum vitae</a>
          <a href="#contacto">contacto</a>
        </div>

        <div>

        </div>
        
     </nav>
    )
}