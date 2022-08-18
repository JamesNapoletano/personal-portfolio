import styles from './NavBar.module.css'

const NavBar = () => {

    return (

        <div className={styles.navStroke}>
            <div className={styles.navBase}>
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
            </div>
        </div>

    )

}

export default NavBar
