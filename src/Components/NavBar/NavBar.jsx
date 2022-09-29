import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AccentColorContext } from '../../context/accent-color-context';

const NavBar = () => {
    const { pathname } = useLocation();

    const { accentColor } = useContext(AccentColorContext)

    const [navStrokeColor, setNavStrokeColor] = useState(`${styles.navStroke} ${styles.navBlue}`)

    useEffect(() => {
        switch (accentColor) {
            case 'blue':
                setNavStrokeColor(`${styles.navStroke} ${styles.navBlue}`)
                break;
            case 'green':
                setNavStrokeColor(`${styles.navStroke} ${styles.navGreen}`)
                break;
            case 'red':
                setNavStrokeColor(`${styles.navStroke} ${styles.navRed}`)
                break;
            case 'purple':
                setNavStrokeColor(`${styles.navStroke} ${styles.navPurple}`)
                break;
            case 'steel':
                setNavStrokeColor(`${styles.navStroke} ${styles.navSteel}`)
                break;
        }
    }, [accentColor])

    const homeBtn = (
        <Link
            to=""
            className={
                pathname === '/' ? styles.navButtonSelected : styles.navButton
            }
        >
            Home
        </Link>
    )
    const bioBtn = (
        <Link
            to="bio"
            className={pathname === '/bio' ? styles.navButtonSelected : styles.navButton}
        >
            Bio
        </Link>
    )
    const projBtn = (
        <Link
            to="projects"
            className={pathname.includes('/projects') ? styles.navButtonSelected : styles.navButton}
        >
            Projects
        </Link>
    )
    const probBtn = (
        <Link
            to="problems"
            className={pathname.includes('/problems') ? styles.navButtonSelected : styles.navButton}
        >
            Solved Problems
        </Link>
    )
    const contBtn = (
        <Link
            to="contact"
            className={pathname === '/contact' ? styles.navButtonSelected : styles.navButton}
        >
            Contact
        </Link>
    )
    return (

        <div className={navStrokeColor}>
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