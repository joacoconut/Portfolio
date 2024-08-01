import { motion } from 'framer-motion';
import styles from '../../../styles/home/skills/skills.module.css'
import { skills } from './skillsData';

const transitionConfig = {
    type: "spring",
    duration: 1,
    bounce: 0.65
}

const viewportConfig = {
    once: true,
    margin: "0px 0px -100px 0px"
}

const delays = [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75];

const Skills = () => {
    return (
        <section className={styles.container}>

            <motion.span
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.title}
            >
                Habilidades
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={transitionConfig}
                viewport={viewportConfig}
                className={styles.subtitle}
            >
                Tecnologías
            </motion.h2>

            <div className={styles.techContainer}>

                {
                    skills.map(({title, src}, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ ...transitionConfig, delay: delays[i] }}
                            viewport={viewportConfig}
                        >
                            <img title={title} src={src} alt={title}/>
                        </motion.div>

                    ))
                }


            </div>
        </section>
    )
}

export default Skills
