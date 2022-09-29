import { useEffect } from 'react'
import { useContext } from 'react'
import UnderDevelopment from '../../Components/UnderDevelopment/UnderDevelopment'
import { AccentColorContext } from '../../context/accent-color-context'

export default function Contact() {
    const { updateAccentColor } = useContext(AccentColorContext)

    useEffect(() => {
        updateAccentColor('steel')
    }, [])
    
    return (
        <>
            <h1>Contact</h1>
            <UnderDevelopment />
        </>
    )
}