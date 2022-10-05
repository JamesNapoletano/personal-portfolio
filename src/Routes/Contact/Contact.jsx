import { useEffect } from 'react'
import { useContext } from 'react'
import { AccentColorContext } from '../../context/accent-color-context'
import styles from './Contact.module.css'

export default function Contact() {
    const { updateAccentColor } = useContext(AccentColorContext)

    useEffect(() => {
        updateAccentColor('steel')
    }, [])

    return (
        <>
            <h1>Contact</h1>
            <div className={styles.contentCard}>
                <ul>
                    <li>
                        <p>
                            Name
                        </p>
                        <p>
                            James Napoletano
                        </p>
                    </li>
                    <li>
                        <p>
                            E-Mail
                        </p>
                        <p>
                            <a href='mailto:jnap9311@gmail.com'>
                                jnap9311@gmail.com
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Phone
                        </p>
                        <p>
                            1 (586) 719-4219
                        </p>
                    </li>
                    <li>
                        <p>
                            GitHub
                        </p>
                        <p>
                            <a href='https://github.com/JamesNapoletano'>
                                https://github.com/JamesNapoletano
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Resume
                        </p>
                        <p>
                            <a href='mailto:jnap9311@gmail.com?subject=Resume%20Inquiry&body=Tell%20me%20about%20yourself.'>
                                Inquire
                            </a>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}