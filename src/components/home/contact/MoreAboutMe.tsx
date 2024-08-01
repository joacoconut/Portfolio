import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../../../styles/home/contact/moreaboutme.module.css'

const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}


const MoreAboutMe = () => {
    return (
        <div className={styles.container}>
            <div>
                <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={transitionConfig}
                    viewport={viewportConfig}
                    className={styles.title}
                >
                    ¿Quieres saber más de mi?
                </motion.span>

                <div className={styles.barContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={transitionConfig}
                        viewport={viewportConfig}
                        className={styles.subtitle}
                      
                    >

                        <Link to="/about"> Lee más sobre mi </Link>
                    </motion.div>

                    <div className={styles.bar}></div>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutMe;
