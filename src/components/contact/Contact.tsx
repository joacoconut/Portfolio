import { motion } from 'framer-motion';
import styles from '../../styles/contact/contact.module.css'
import FormContact from './Form';

const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const Contact = () => {
    return (
        <section className={styles.container}>
            <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.title}
            >
                Contáctame
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.subtitle}
            >
                Envíame un mensaje
            </motion.h2>



            <FormContact />

        </section>
    )
}

export default Contact
