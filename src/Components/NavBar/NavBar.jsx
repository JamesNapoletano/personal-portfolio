import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const { pathname } = useLocation();
    const homeBtn = (
        <Link
            to="personal-portfolio"
            className={
                pathname === '/personal-portfolio' ? styles.navButtonDown : styles.navButtonInit
            }
        >
            Home
        </Link>
    )
    const bioBtn = (
        <Link
            to="personal-portfolio/bio"
            className={pathname === '/personal-portfolio/bio' ? styles.navButtonDown : styles.navButtonInit}
        >
            Bio
        </Link>
    )
    const projBtn = (
        <Link
            to="personal-portfolio/projects"
            className={pathname === '/personal-portfolio/projects' ? styles.navButtonDown : styles.navButtonInit}
        >
            Projects
        </Link>
    )
    const probBtn = (
        <Link
            to="personal-portfolio/problems"
            className={pathname === '/personal-portfolio/problems' ? styles.navButtonDown : styles.navButtonInit}
        >
            Solved Problems
        </Link>
    )
    const contBtn = (
        <Link
            to="personal-portfolio/contact"
            className={pathname === '/personal-portfolio/contact' ? styles.navButtonDown : styles.navButtonInit}
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
