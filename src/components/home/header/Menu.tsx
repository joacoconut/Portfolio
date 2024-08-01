import { useRef, useState } from 'react'
import styles from '../../../styles/home/hamburguer.module.css'
import MenuActive from './MenuActive';

const Menu = () => {

    const [visible, setVisible] = useState<boolean>(false);

    const refLine1 = useRef<HTMLDivElement>(null);
    const refLine2 = useRef<HTMLDivElement>(null);
    const refLine3 = useRef<HTMLDivElement>(null);


    const toggleMenu = () => {

        setVisible(!visible);

        visible ? document.body.classList.remove('no-scroll') : document.body.classList.add('no-scroll')

        const { current: line1 } = refLine1;
        const { current: line2 } = refLine2;
        const { current: line3 } = refLine3;

        if (line1 && line2 && line3) {

            line1.classList.toggle(styles.animateLine1);
            line2.classList.toggle(styles.animateLine2);
            line3.classList.toggle(styles.animateLine3);
        }

    }

    return (
        <>
            <div onClick={toggleMenu} className={styles.hamburguer}>
                <div ref={refLine1} className={styles.line}></div>
                <div ref={refLine2} className={styles.line}></div>
                <div ref={refLine3} className={styles.line}></div>
            </div>

            <MenuActive visible={visible}/> 
        </>
    )
}

export default Menu;
