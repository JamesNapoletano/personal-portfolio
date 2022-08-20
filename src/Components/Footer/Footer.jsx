import styles from './Footer.module.css'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation();

    return (

        <div className={styles.footerStroke}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    {pathname}
                </div>
                <nav className={styles.links}>
                    <Link to='personal-portfolio'>Home</Link>
                    <Link to='personal-portfolio/bio'>Bio</Link>
                    <Link to='personal-portfolio/projects'>Projects</Link>
                    <Link to='personal-portfolio/problems'>Solved Problems</Link>
                    <Link to='personal-portfolio/contact'>Contact</Link>
                </nav>
            </div>
        </div>

    )

}

export default Footer