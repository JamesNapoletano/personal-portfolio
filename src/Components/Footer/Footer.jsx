import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <div className={styles.footerStroke}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    personal-portfolio/home
                </div>
                <nav className={styles.links}>
                    <Link to='/'>Home</Link>
                    <Link to='/bio'>Bio</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/problems'>Solved Problems</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
            </div>
        </div>

    )

}

export default Footer