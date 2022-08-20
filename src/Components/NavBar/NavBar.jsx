import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const { pathname } = useLocation();
    const homeBtn = (
        <Link
            to="personal-portfolio/"
            className={
                pathname === '/personal-portfolio/' ? styles.navButtonSelected : styles.navButton
            }
        >
            Home
        </Link>
    )
    const bioBtn = (
        <Link
            to="personal-portfolio/bio"
            className={pathname === '/personal-portfolio/bio' ? styles.navButtonSelected : styles.navButton}
        >
            Bio
        </Link>
    )
    const projBtn = (
        <Link
            to="personal-portfolio/projects"
            className={pathname === '/personal-portfolio/projects' ? styles.navButtonSelected : styles.navButton}
        >
            Projects
        </Link>
    )
    const probBtn = (
        <Link
            to="personal-portfolio/problems"
            className={pathname.includes('/personal-portfolio/problems') ? styles.navButtonSelected : styles.navButton}
        >
            Solved Problems
        </Link>
    )
    const contBtn = (
        <Link
            to="personal-portfolio/contact"
            className={pathname === '/personal-portfolio/contact' ? styles.navButtonSelected : styles.navButton}
        >
            Contact
        </Link>
    )
    return (

        <div className={styles.navStroke}>
            <nav className={styles.navBase}>
                {homeBtn}
                {bioBtn}
                {projBtn}
                {probBtn}
                {contBtn}
            </nav>
        </div>

    )

}

export default NavBar
