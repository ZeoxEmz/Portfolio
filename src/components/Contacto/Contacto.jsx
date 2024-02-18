import styles from "./Contacto.module.css"
import linkedin from "./icons/linkedin.svg"
import what from "./icons/whatsapp.svg"
import tel from "./icons/tel.svg"
import mail from "./icons/mail.svg"

export function Contacto () {
    const mensaje = "¡Hola! Estoy interesado en contactarte.";
    const numero = 541128597851;

    return (
        <section id="contacto" className={styles.contacto}>
            <h2 className={styles.titulo}>Contacto</h2>
            <hr />
            <div className={styles.links_contacto}>
            
                <a className={styles.link_whatsapp} id="whatsapp" href={`https://wa.me/${numero}?text=${mensaje}`} target="_blank" rel="noreferrer"><img src={what} alt="" /><span>WhatsApp:</span> +54 11 2859-7851</a>
                <a className={styles.link_email} href="mailto:ezequielcaceres98@outlook.com"><img src={mail} alt="" /> <span>Email:</span> ezequielcaceres98@outlook.com</a>
                <a className={styles.link_telephone} href={`tel:${numero}`}><img src={tel} alt="" /><span>Teléfono:</span> +54 11 2859-7851</a>
                <a className={styles.link_linkedin} href={`https://www.linkedin.com/in/ezequiel-caceres-61208a226/`}><img src={linkedin} alt="" /><span>Linkedin:</span> Ezequiel Caceres</a>
            </div>
            <hr />
        </section>
    )
}