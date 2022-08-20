import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const { pathname } = useLocation();
    const homeBtn = (
        <Link
            to="/"
            className={pathname === '/' ? styles.navButtonDown : styles.navButtonInit}
        >
            Home
        </Link>
    )
    const bioBtn = (
        <Link
            to="bio"
            className={pathname === '/bio' ? styles.navButtonDown : styles.navButtonInit}
        >
            Bio
        </Link>
    )
    const projBtn = (
        <Link
            to="projects"
            className={pathname === '/projects' ? styles.navButtonDown : styles.navButtonInit}
        >
            Projects
        </Link>
    )
    const probBtn = (
        <Link
            to="problems"
            className={pathname === '/problems' ? styles.navButtonDown : styles.navButtonInit}
        >
            Solved Problems
        </Link>
    )
    const contBtn = (
        <Link
            to="contact"
            className={pathname === '/contact' ? styles.navButtonDown : styles.navButtonInit}
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
