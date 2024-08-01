import { motion } from "framer-motion";

import styles from "../../../styles/home/hero/hero.module.css";

const transitionConfig = {
  type: "spring",
  duration: 1.5,
  bounce: 0.45,
};

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      viewport={viewportConfig}
      whileInView={{ opacity: 1 }}
      className={styles.container}
    >
      <div className={styles.infoContainer}>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.15 }}
          viewport={viewportConfig}
          className={styles.name}
        >
          Joaquín Vega
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.35 }}
          viewport={viewportConfig}
          className={styles.skills}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.65 }}
          viewport={viewportConfig}
          className={styles.text}
          style={{maxWidth: 600}}
        >
          Aquí podrás ver los distintos proyectos que
          he realizado junto con información personal.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
