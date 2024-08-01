import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { descriptionsHome } from "../../../data";

import styles from "../../../styles/home/projects/projects.module.css";
import Project from "./Project";
import { ProjectContextProvider } from "../../../contexts/ProjectContextProvider";

const transitionConfig = {
  type: "spring",
  duration: 1.25,
  bounce: 0.3,
};

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transitionConfig}
        viewport={viewportConfig}
        className={styles.title}
      >
        Proyectos
      </motion.span>

      <div>
        <div className={styles.barContainer}>
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transitionConfig}
            viewport={viewportConfig}
            className={styles.subtitle}
          >
            <Link to="/projects">
              {" "}
              Ir a todos mis proyectos{" "}
              <i className="fas fa-long-arrow-alt-right arrow-right"></i>{" "}
            </Link>
          </motion.button>

          <div className={styles.bar}></div>
        </div>
      </div>

      <ProjectContextProvider>
        <motion.div
          className={styles.projectsContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transitionConfig}
          viewport={viewportConfig}
        >
          {descriptionsHome.map(
            ({ id, title, desc, url, github, tags }, index) => (
              <Project
                key={index}
                title={title}
                img={id}
                description={desc}
                url={url}
                github={github}
                index={index}
                tags={tags}
              />
            )
          )}
        </motion.div>
      </ProjectContextProvider>
    </section>
  );
};

export default Projects;
