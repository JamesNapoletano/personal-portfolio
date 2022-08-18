import styles from './NavBar.module.css'

const NavBar = () => {

    const homeBtn = (
        <div
            id='home'
            className={styles.navButtonDown}
            onClick={() => {
                if (document.getElementById('home').className === `${styles.navButtonInit}`) {

                    document.getElementById('home').className = `${styles.navButtonDown}`

                    document.getElementById('bio').className = `${styles.navButtonInit}`

                    document.getElementById('projects').className = `${styles.navButtonInit}`

                    document.getElementById('problems').className = `${styles.navButtonInit}`

                    document.getElementById('contact').className = `${styles.navButtonInit}`

                }
            }}
        >
            Home
        </div>
    )
    const bioBtn = (
        <div
            id='bio'
            className={styles.navButtonInit}
            onClick={() => {
                if (document.getElementById('bio').className === `${styles.navButtonInit}`) {

                    document.getElementById('home').className = `${styles.navButtonInit}`

                    document.getElementById('bio').className = `${styles.navButtonDown}`

                    document.getElementById('projects').className = `${styles.navButtonInit}`

                    document.getElementById('problems').className = `${styles.navButtonInit}`

                    document.getElementById('contact').className = `${styles.navButtonInit}`
                }
            }}
        >
            Bio
        </div>
    )
    const projBtn = (
        <div
            id='projects'
            className={styles.navButtonInit}
            onClick={() => {
                if (document.getElementById('projects').className === `${styles.navButtonInit}`) {

                    document.getElementById('home').className = `${styles.navButtonInit}`

                    document.getElementById('bio').className = `${styles.navButtonInit}`

                    document.getElementById('projects').className = `${styles.navButtonDown}`

                    document.getElementById('problems').className = `${styles.navButtonInit}`

                    document.getElementById('contact').className = `${styles.navButtonInit}`
                }
            }}
        >
            Projects
        </div>
    )
    const probBtn = (
        <div
            id='problems'
            className={styles.navButtonInit}
            onClick={() => {
                if (document.getElementById('problems').className === `${styles.navButtonInit}`) {

                    document.getElementById('home').className = `${styles.navButtonInit}`

                    document.getElementById('bio').className = `${styles.navButtonInit}`

                    document.getElementById('projects').className = `${styles.navButtonInit}`

                    document.getElementById('problems').className = `${styles.navButtonDown}`

                    document.getElementById('contact').className = `${styles.navButtonInit}`
                }
            }}
        >
            Solved Problems
        </div>
    )
    const contBtn = (
        <div
            id='contact'
            className={styles.navButtonInit}
            onClick={() => {
                if (document.getElementById('contact').className === `${styles.navButtonInit}`) {

                    document.getElementById('home').className = `${styles.navButtonInit}`

                    document.getElementById('bio').className = `${styles.navButtonInit}`

                    document.getElementById('projects').className = `${styles.navButtonInit}`

                    document.getElementById('problems').className = `${styles.navButtonInit}`

                    document.getElementById('contact').className = `${styles.navButtonDown}`
                }
            }}
        >
            Contact Information
        </div>
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
