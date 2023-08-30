import { useParams } from 'react-router-dom'
import faq from './images/faq-img.png'
import info from './info.js';
import styles from './Faq.module.scss';

const Faq = () => {

const params = useParams()
const pregunta = info.find(pregunta => pregunta.id === parseInt (params.id))

return (
    <div className={styles["mainFaq"]}>
        <h1>FAQ: desde la pregunta específica {params.id}</h1>
        <section className={styles["detalles"]}>
            <h3>{pregunta?.title}</h3>
            <p>{pregunta?.descripción}</p>
            <img className={styles["imagencita"]} src={faq} alt="faq"/>
        </section>
        
    </div>
)}

export default Faq

