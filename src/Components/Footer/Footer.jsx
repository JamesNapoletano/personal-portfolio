import styles from './Footer.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AccentColorContext } from '../../context/accent-color-context';

const Footer = () => {
    const { pathname } = useLocation();

    const { accentColor } = useContext(AccentColorContext)

    const [footerStrokeColor, setFooterStrokeColor] = useState(`${styles.footerStroke} ${styles.footerBlue}`)

    useEffect(() => {
        switch (accentColor) {
            case 'blue':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerBlue}`)
                break;
            case 'green':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerGreen}`)
                break;
            case 'red':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerRed}`)
                break;
            case 'purple':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerPurple}`)
                break;
            case 'steel':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerSteel}`)
                break;
        }

    }, [accentColor])

    return (

        <div className={footerStrokeColor}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    {pathname}
                </div>
                <footer className={styles.links}>
                    <Link to=''>Home</Link>
                    <Link to='bio'>Bio</Link>
                    <Link to='projects'>Projects</Link>
                    <Link to='problems'>Solved Problems</Link>
                    <Link to='contact'>Contact</Link>
                </footer>
            </div>
        </div>

    )

}

export default Footer