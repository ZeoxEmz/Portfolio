import java from "../../imagenes/javascript.svg"
import react from "../../imagenes/react.svg"
import HTML from "../../imagenes/HTML.svg"
import CSS from "../../imagenes/css3.svg"
import node from "../../imagenes/nodejs.svg"
import redux from "../../imagenes/redux.svg"
import sequelize from "../../imagenes/sequelize.svg"
import express from "../../imagenes/express.svg"
import postgresql from "../../imagenes/postgresql.svg"
import styles from "./Conocimientos.module.css"

export function Conocimientos() {

    const conocimientosData = [
        { nombre: "HTML", imagen: HTML },
        { nombre: "CSS", imagen: CSS },
        { nombre: "JavaScript", imagen: java },
        { nombre: "React", imagen: react },
        { nombre: "Node.js", imagen: node },
        { nombre: "Redux", imagen: redux },
        { nombre: "Sequelize", imagen: sequelize },
        { nombre: "Express", imagen: express },
        { nombre: "Postgresql", imagen: postgresql },
      ];
    
    return(
        <section className={styles.conocimientos}>
            <h2 className={styles.titulo}>Conocimientos en</h2>
            <hr />
            <div className={styles.div_img}>
                {conocimientosData.map((item) => (
                    <img key={item.nombre} className={styles.img} src={item.imagen} alt={item.nombre} />
                ))}
            </div>
        </section>
    )
}