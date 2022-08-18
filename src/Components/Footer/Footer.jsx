import styles from './Footer.module.css'

const Footer = () => {

    return (

        <div className={styles.footerStroke}>
            <div className={styles.footerBase}>
                <div className={styles.currentPage}>
                    personal-portfolio/home
                </div>
                <div className={styles.links}>
                    <a>Home</a>
                    <a>Bio</a>
                    <a>Projects</a>
                    <a>Solved Problems</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>

    )

}

export default Footer