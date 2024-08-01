import Footer from '../home/footer/Footer';
import Header from '../home/header/Header';
import SingleProject from './SingleProject';
import { descriptionsProjects } from '../../data';


import styles from './styles.module.css'


const ProjectsScreen = () => {

    document.body.classList.remove('no-scroll') 

    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>

                {
                    descriptionsProjects.map(({ id, title, desc, url, tags }) => (
                        <SingleProject
                            key={id}
                            title={title}
                            desc={desc}
                            url={url}
                            img={id}
                            tags={tags}
                        />
                    ))
                }
            </main>

            <Footer />
        </div>
    );
};

export default ProjectsScreen;
