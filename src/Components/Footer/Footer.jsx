import styles from './Footer.module.css'

const Footer = () => {

    return (

        <div className={styles.footerStroke}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    personal-portfolio/home
                </div>
                <nav className={styles.links}>
                    <a>Home</a>
                    <a>Bio</a>
                    <a>Projects</a>
                    <a>Solved Problems</a>
                    <a>Contact</a>
                </nav>
            </div>
        </div>

    )

}

export default Footer