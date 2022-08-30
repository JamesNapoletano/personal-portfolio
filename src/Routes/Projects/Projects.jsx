import styles from './Projects.module.css'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Project() {
    const [repoData, setRepoData] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.github.com/users/JamesNapoletano/repos')
            setRepoData(response.data)
        })()
    }, [])

    const repoCards = repoData.map((repo, index) => {
        return (
            <li>
                <a href={repo.svn_url} key={index}>
                    {repo.name}
                </a>
            </li>
        )
    })

    return (
        <>
            <h1>
                Projects
            </h1>
            <div className={styles.flexRow}>
                <div className={styles.projectLists}>
                    <h3>
                        Github Repositories
                    </h3>
                    <ul>
                        {repoCards}
                    </ul>
                </div>
                <div className={styles.projectLists}>
                    <h3 className={styles.greyd}>
                        Web Games
                    </h3>
                    <ul className={styles.greyd}>
                        <li className={styles.greyd}>Nuclear Reactor</li>
                        <li className={styles.greyd}>Stimulation Game</li>
                    </ul>
                </div>
            </div>
        </>
    )
}


