import { motion } from "framer-motion";
import styles from "../../styles/about/about.module.css";
import Personal from "./Personal";

const transitionConfig = {
  type: "spring",
  duration: 1,
  bounce: 0.65,
};

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};

const About = () => {
  return (
    <section className={styles.container}>
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionConfig}
        viewport={viewportConfig}
        className={styles.title}
      >
        Algunas palabras sobre mi
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionConfig}
        viewport={viewportConfig}
        className={styles.subtitle}
      >
        Soy Joaquín Vega, me formé de manera autodidacta y estoy en busca de mis
        primeras experiencias laborales como desarrollador. Busco crear
        proyectos de calidad que muestren mis conocimientos y pasiones.
      </motion.h2>

      <Personal />
    </section>
  );
};

export default About;
