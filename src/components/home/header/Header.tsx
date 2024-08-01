import { Link } from 'react-router-dom';

import styles from '../../../styles/home/header.module.css'
import Menu from './Menu'

const Header = () => {

    return (
        <header className={styles.header}>

            <div className={styles.myselfContainer}>

                <Link to="/">
                    <div className={styles.logo}>J</div>
                </Link>

                <div>
                    <p className={styles.name}>Joaquín Vega</p>
                    <p className={styles.skills}>Frontend</p>
                </div>
            </div>

            <div className={styles.menu}>
                <p className={styles.menuText}>Menu</p>
                <Menu />
            </div>

        </header>
    )
}

export default Header
