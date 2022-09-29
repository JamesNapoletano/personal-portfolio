import styles from './Projects.module.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { AccentColorContext } from '../../context/accent-color-context'

export default function Projects() {
    const [repoData, setRepoData] = useState([])
    const { pathname } = useLocation()
    const { updateAccentColor } = useContext(AccentColorContext)

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.github.com/users/JamesNapoletano/repos')
            setRepoData(response.data)
        })()
        updateAccentColor('red')
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

    const cropTracker = (
        <Link
            to=''
        >
            Crop Tracker
        </Link>
    )

    const nuclearReactor = (
        <Link
            to='nuclearreactor'
        >
            Nuclear Reactor
        </Link>
    )

    const stimulationGame = (
        <Link
            to='stimulationgame'
        >
            Stimulation Game
        </Link>
    )

    return (
        <>
            {pathname === '/projects' ?
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
                        {/* <div className={styles.projectLists}>
                            <h3>
                                Web Apps
                            </h3>
                            <ul>
                                <li>{cropTracker}</li>
                            </ul>
                        </div> */}
                        <div className={styles.projectLists}>
                            <h3>
                                Web Games
                            </h3>
                            <ul>
                                <li>{nuclearReactor}</li>
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


