import styles from "./Educacion.module.css"

export function Educacion() {
  return(
    <section className={styles.educacion} >

      <h2 className={styles.titulo}>Educación</h2>
      <hr />

      <article className={styles.educacionItem1}>
        <h3>Universidad Nacional Arturo Jauretche</h3>
        <p>Carrera: Ingeniería en Informática</p>
        <p>Cursado Universitario: 1 año (Incompleto)</p>
      </article>
      <hr  className={styles.hr}/>
      <article className={styles.educacionItem2}>
        <h3>Soy Henry</h3>
        <p>Carrera: Desarrollo Full Stack</p>
        <p>Áreas: Frontend y Backend</p>
        <p>Estado: Completo</p>
      </article>
    <hr />
    </section>
  )
}