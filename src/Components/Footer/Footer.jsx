import styles from './Footer.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Footer = () => {
    const { pathname } = useLocation();

    const [footerStrokeColor, setFooterStrokeColor] = useState(`${styles.footerStroke} ${styles.footerBlue}`)

    useEffect(() => {
        switch (pathname) {
            case '/personal-portfolio/':
                console.log('case1')
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerBlue}`)
                break;
            case '/personal-portfolio/bio':
                console.log('case2')
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerGreen}`)
                break;
            case '/personal-portfolio/projects':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerRed}`)
                break;
            case '/personal-portfolio/problems':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerPurple}`)
                break;
            case '/personal-portfolio/contact':
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerSteel}`)
                break;
            default:
                setFooterStrokeColor(`${styles.footerStroke} ${styles.footerBlue}`)
        }
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