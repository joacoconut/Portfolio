import { motion } from 'framer-motion';
import { MouseEvent, useContext, useState } from 'react';
import styles from '../../../styles/home/projects/project.module.css'
import { ProjectContext } from '../../../contexts/ProjectContext';
import TagContainer from '../../projects/TagContainer';
import Tag from '../../projects/Tag';
import { validateTypes } from '../../../interfaces/interfaces';

interface Props {
    title: string;
    img: string;
    url: string;
    github: string;
    description: string;
    index: number;
    tags: validateTypes[];
}


const Project = ({ title, description, url, github, index, img, tags }: Props) => {

    const { activeProject, setActiveProject } = useContext(ProjectContext);

    const handleProjectClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as Element;

        if (target.nodeName === 'A' || target.nodeName === 'I') return;

        document.querySelector('.active')?.classList.remove('active')

        if (target.classList.contains(styles.container)) {
            target.classList.add('active')
        } else {
            target.parentElement?.classList.add('active')
        }

        const id = target.getAttribute('data-id');

        if (id) {
            setActiveProject(parseInt(id));
        }
    }

    return (
        <motion.article
            data-id={index.toString()}
            onClick={handleProjectClick}
            style={{ backgroundImage: `url(../../../img/projects/${img}.jpg)` }}
            className={`${styles.container} ${index === 0 && 'active'}`}
        >

            {
                index === activeProject && (
                    <motion.div
                        data-id={index.toString()}
                        className={styles.content}
                        initial={{ display: 'none' }}
                        animate={{ display: 'flex' }}
                        transition={{ delay: 0.35 }}
                    >

                        <h2 className={styles.title}>{title}</h2>

                        <TagContainer noMargin>
                            {
                                tags.map(tag => <Tag key={Math.random() * 10} type={tag} />)
                            }
                        </TagContainer>

                        <p className={styles.desc}>{description}</p>


                        <div className={styles.linkContainer}>
                            <div className={styles.links}>
                                <a href={url} target="_blank">
                                    <i className="fa-solid fa-link"></i>
                                    Ver proyecto
                                </a>
                            </div>

                            <div className={styles.links}>
                                <a href={github} target="_blank">
                                    <i className="fa-brands fa-github"></i>
                                    Ver repositorio
                                </a>
                            </div>
                        </div>

                    </motion.div>
                )
            }


        </motion.article >

    )
}

export default Project
