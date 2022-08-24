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
            <div className={styles.gitRepos}>
                <h3>
                    Github Repositories
                </h3>
                <ul>
                    {repoCards}
                </ul>
            </div>
    )
}


