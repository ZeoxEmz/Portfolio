import styles from "./Educacion.module.css"

export function Educacion() {
  return(
    <section className={styles.educacion} >

      <h2 className={styles.titulo}>Educación</h2>
      <hr />

      <article className={styles.educacionItem1}>
        <h3>Universidad Nacional Arturo Jauretche</h3>
        <p><span>Carrera:</span> Ingeniería en Informática</p>
        <p><span>Cursado Universitario:</span> 1 año (Incompleto)</p>
      </article>
      <hr  className={styles.hr}/>
      <article className={styles.educacionItem2}>
        <h3>Soy Henry</h3>
        <p><span>Carrera:</span> Desarrollo Full Stack</p>
        <p><span>Áreas:</span> Frontend y Backend</p>
        <p><span>Estado:</span> Completo</p>
      </article>
    <hr />
    </section>
  )
}