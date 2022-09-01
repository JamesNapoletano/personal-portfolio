import styles from './Projects.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Projects() {
    const [repoData, setRepoData] = useState([])
    const { pathname } = useLocation()

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

    const stimulationGame = (
        <Link
            to='stimulationgame'
        >
            Stimulation Game
        </Link>
    )

    return (
        <>
            {pathname === '/personal-portfolio/projects' ?
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
                            <h3>
                                Web Games
                            </h3>
                            <ul>
                                <li>Nuclear Reactor</li>
                                <li>{stimulationGame}</li>
                            </ul>
                        </div>
                    </div>
                </> :
                <Outlet />
            }
        </>
    )
}


