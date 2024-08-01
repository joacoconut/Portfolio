import styles from "./styles.module.css";

import Tag from "./Tag";
import TagContainer from "./TagContainer";

import { motion } from 'framer-motion';
import { validateTypes } from '../../interfaces/interfaces';


interface SingleProjectProps {
  img: string;
  desc: string;
  url: string;
  title: string;
  tags: validateTypes[];
}

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px"
}

const SingleProject = ({ img, desc, url, title, tags }: SingleProjectProps) => {

  return (
    <motion.div
      viewport={viewportConfig}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className={styles.singleProjectContainer}
      style={{
        backgroundImage: `url(./img/projects/${img}.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

      <div className={styles.content}>

        <h2>{title}</h2>

        <TagContainer>
          {
            tags.map(tag => <Tag type={tag} key={tag} />)
          }
        </TagContainer>

        <p className={styles.description}>{desc}</p>


        <a target="_blank" rel="noreferrer" href={url}>
          Ver proyecto  <i className="fas fa-long-arrow-alt-right arrow-right"></i>
        </a>

      </div>

    </motion.div>
  );
};

export default SingleProject;
