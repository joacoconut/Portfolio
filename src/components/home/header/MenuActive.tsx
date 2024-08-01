import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import styles from '../../../styles/home/menuactive.module.css'


interface Props {
    visible: boolean;
}

const variants = {
    show: {
        height: "91%"
    },
    hide: {
        height: "0%"
    }
}

const MenuActive = ({ visible }: Props) => {
    return (

        <motion.div
            initial={{ height: "0%" }}
            whileInView={visible ? "show" : "hide"}
            transition={{ duration: 0.45 }}
            variants={variants}
            className={styles.container}
        >

            <nav className={styles.navigation}>

                <NavLink
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                    to="/"
                >
                    Inicio
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                    to="/about"
                >
                    Sobre mi
                </NavLink>

                <NavLink
                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                    to="/projects"
                >
                    Proyectos
                </NavLink>

            </nav>

        </motion.div>

    )
}

export default MenuActive
