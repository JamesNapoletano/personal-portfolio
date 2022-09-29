import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const { pathname } = useLocation();

    const [navStrokeColor, setNavStrokeColor] = useState(`${styles.navStroke} ${styles.navBlue}`)

    useEffect(() => {
        pathname === '/personal-portfolio/' ?
            setNavStrokeColor(`${styles.navStroke} ${styles.navBlue}`) :
            pathname.includes('/personal-portfolio/bio') ?
                setNavStrokeColor(`${styles.navStroke} ${styles.navGreen}`) :
                pathname.includes('/personal-portfolio/projects') ?
                    setNavStrokeColor(`${styles.navStroke} ${styles.navRed}`) :
                    pathname.includes('/personal-portfolio/problems') ?
                        setNavStrokeColor(`${styles.navStroke} ${styles.navPurple}`) :
                        pathname.includes('/personal-portfolio/contact') ?
                            setNavStrokeColor(`${styles.navStroke} ${styles.navSteel}`) :
                            setNavStrokeColor(`${styles.navStroke} ${styles.navBlue}`)
    }, [pathname])

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
