import styles from './Footer.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Footer = () => {
    const { pathname } = useLocation();

    const [footerStrokeColor, setFooterStrokeColor] = useState(`${styles.footerStroke} ${styles.footerBlue}`)

    useEffect(() => {
        pathname === '/personal-portfolio/' ?
            setFooterStrokeColor(`${styles.footerStroke} ${styles.footerBlue}`) :
            pathname.includes('/personal-portfolio/bio') ?
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerGreen}`) :
                pathname.includes('/personal-portfolio/projects') ?
                    setFooterStrokeColor(`${styles.footerStroke} ${styles.footerRed}`) :
                    pathname.includes('/personal-portfolio/problems') ?
                        setFooterStrokeColor(`${styles.footerStroke} ${styles.footerPurple}`) :
                        pathname.includes('/personal-portfolio/contact') ?
                            setFooterStrokeColor(`${styles.footerStroke} ${styles.footerSteel}`) :
                            setFooterStrokeColor(`${styles.footerStroke} ${styles.footerBlue}`)
    }, [pathname])

    return (

        <div className={footerStrokeColor}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    {pathname}
                </div>
                <footer className={styles.links}>
                    <Link to='personal-portfolio/'>Home</Link>
                    <Link to='personal-portfolio/bio'>Bio</Link>
                    <Link to='personal-portfolio/projects'>Projects</Link>
                    <Link to='personal-portfolio/problems'>Solved Problems</Link>
                    <Link to='personal-portfolio/contact'>Contact</Link>
                </footer>
            </div>
        </div>

    )

}

export default Footer