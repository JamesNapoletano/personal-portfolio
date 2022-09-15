import styles from './NuclearReactor.module.css'


import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


export default function NuclearReactor() {
    const [startState, setStartState] = useState(false)

    const defaultSysMsgState = {
        sysMsg1: 'Prior to powering on the reactor, please ',
        sysMsg2: 'insert fuel rods',
        sysMsg3: 'turn on coolant pumps',
        sysMsg4: 'Reaction will not take place if Control Rods are in place',
        sysMsg5: 'Feed/Condensate Pumps',
        sysMsg6: 'Emergency Water Pumps',
        sysMsg7: ' are using all generator power.',
        sysMsg8: `Reaction will not take place if Hydrogen Peroxide is added`,
        sysMsg9: 'Power on reactor',
        sysMsg10: 'generating steam . . .',
        sysMsg11: 'Exhaust steam is building in the coolant loop'

    }

    const [sysMsgState] = useState(defaultSysMsgState)
    const [systemMsg, setSystemMsg] = useState(`${sysMsgState.sysMsg1} ${sysMsgState.sysMsg2} and ${sysMsgState.sysMsg3}`)

    const defaultWarningMsgState = {
        warningMsg1: 'Reactor Systems Off',
        warningMsg2: 'Reactor Systems On',
        warningMsg3: 'Reactor Systems Unstable',
        warningMsg4: 'Reactor Systems Approaching Critical',
        warningMsg5: 'Reactor Systems Critical'
    }

    const [warningMsgState] = useState(defaultWarningMsgState)
    const [warningMsg, setWarningMsg] = useState(`${warningMsgState.warningMsg1}`)

    const defaultInputState = {
        power: false,
        controlRods: false,
        coolantPumps: false,
        fuelRods: false,
        feCoPumps: false,
        steamGenerator: false,
        emergencyWater: false,
        h2o2: false,
        warningLvl: 0,
    }

    const [inputState, setInputState] = useState(defaultInputState)

    useEffect(() => {

        inputState.power === false &&
            inputState.controlRods === false &&
            inputState.coolantPumps === false &&
            inputState.fuelRods === false &&
            inputState.feCoPumps === false &&
            inputState.steamGenerator === false &&
            inputState.emergencyWater === false &&
            inputState.h2o2 === false &&
            inputState.warningLvl === 0 ?
            <></> :
            <></>

        inputState.power === false &&
            inputState.controlRods === false &&
            inputState.coolantPumps === false &&
            inputState.fuelRods === false &&
            inputState.feCoPumps === false &&
            inputState.steamGenerator === false &&
            inputState.emergencyWater === false &&
            inputState.h2o2 === false &&
            inputState.warningLvl === 0 ?
            setSystemMsg(`${sysMsgState.sysMsg1} ${sysMsgState.sysMsg2} and ${sysMsgState.sysMsg3}`) :
            inputState.power === false &&
                inputState.controlRods === true &&
                inputState.coolantPumps === false &&
                inputState.fuelRods === false &&
                inputState.feCoPumps === false &&
                inputState.steamGenerator === false &&
                inputState.emergencyWater === false &&
                inputState.h2o2 === false &&
                inputState.warningLvl === 0 ?
                setSystemMsg(sysMsgState.sysMsg4) :
                inputState.power === false &&
                    inputState.controlRods === false &&
                    inputState.coolantPumps === true &&
                    inputState.fuelRods === false &&
                    inputState.feCoPumps === false &&
                    inputState.steamGenerator === false &&
                    inputState.emergencyWater === false &&
                    inputState.h2o2 === false &&
                    inputState.warningLvl === 0 ?
                    setSystemMsg(`${sysMsgState.sysMsg1} ${sysMsgState.sysMsg2}`) :
                    inputState.power === false &&
                        inputState.controlRods === false &&
                        inputState.coolantPumps === false &&
                        inputState.fuelRods === true &&
                        inputState.feCoPumps === false &&
                        inputState.steamGenerator === false &&
                        inputState.emergencyWater === false &&
                        inputState.h2o2 === false &&
                        inputState.warningLvl === 0 ?
                        setSystemMsg(`${sysMsgState.sysMsg1} ${sysMsgState.sysMsg3}`) :
                        inputState.power === false &&
                            inputState.controlRods === false &&
                            inputState.coolantPumps === false &&
                            inputState.fuelRods === false &&
                            inputState.feCoPumps === true &&
                            inputState.steamGenerator === false &&
                            inputState.emergencyWater === false &&
                            inputState.h2o2 === false &&
                            inputState.warningLvl === 0 ?
                            setSystemMsg(`${sysMsgState.sysMsg5} ${sysMsgState.sysMsg7}`) :
                            inputState.power === false &&
                                inputState.controlRods === false &&
                                inputState.coolantPumps === false &&
                                inputState.fuelRods === false &&
                                inputState.feCoPumps === false &&
                                inputState.steamGenerator === false &&
                                inputState.emergencyWater === true &&
                                inputState.h2o2 === false &&
                                inputState.warningLvl === 0 ?
                                setSystemMsg(`${sysMsgState.sysMsg6} ${sysMsgState.sysMsg7}`) :
                                inputState.power === false &&
                                    inputState.controlRods === false &&
                                    inputState.coolantPumps === false &&
                                    inputState.fuelRods === false &&
                                    inputState.feCoPumps === false &&
                                    inputState.steamGenerator === false &&
                                    inputState.emergencyWater === false &&
                                    inputState.h2o2 === true &&
                                    inputState.warningLvl === 0 ?
                                    setSystemMsg(sysMsgState.sysMsg8) :


                                    inputState.warningLvl < 1 ?
                                        setWarningMsg(warningMsgState.warningMsg1) :
                                        inputState.warningLvl === 1 ?
                                            setWarningMsg(warningMsgState.warningMsg2) :
                                            inputState.warningLvl === 2 ?
                                                setWarningMsg(warningMsgState.warningMsg3) :
                                                inputState.warningLvl === 3 ?
                                                    setWarningMsg(warningMsgState.warningMsg4) :
                                                    setWarningMsg(warningMsgState.warningMsg5)

    }, [inputState])

    const startBtn = (
        <button onClick={() => { setStartState(true) }}>
            Start
        </button>
    )

    const rulesBtn = (
        <button onClick={() => { setStartState(false) }}>
            Rules
        </button>
    )

    const closeBtn = (
        <Link to='..'>
            <button onClick={() => { setStartState(false) }}>
                Close
            </button>
        </Link>
    )

    return (
        <>
            <h1>Nuclear Reactor</h1>
            {closeBtn}
            {startState === false ?
                <>
                    {startBtn}
                    <h2>Rules:</h2>
                    <div className={styles.contentBox}>
                        <p>
                            This is a game where you turn on and maintain a nuclear reactor!
                            <br />
                            <br />
                            In a typical design concept of a commercial PWR, the following process
                            occurs:
                        </p>
                        <p>
                            The core inside the reactor vessel creates heat. &nbsp; Pressurized water
                            in the primary coolant loop carries the heat to the steam generator.
                            Inside the steam generator, heat from the primary coolant loop
                            vaporizes the water in a secondary loop, producing steam. &nbsp; The
                            steamline directs the steam to the main turbine, causing it to turn the
                            turbine generator, which produces electricity. &nbsp; The unused steam is
                            exhausted to the condenser, where it is condensed into water. &nbsp; The
                            resulting water is pumped out of the condenser with a series of pumps,
                            reheated, and pumped back to the steam generator. &nbsp; The reactor's core
                            contains fuel assemblies that are cooled by water circulated using
                            electrically powered pumps. &nbsp; These pumps and other operating systems
                            in the plant receive their power from the electrical grid. &nbsp; If offsite power
                            is lost, emergency cooling water is supplied by other pumps, which can
                            be powered by onsite diesel generators. &nbsp; Other safety systems, such as
                            the containment cooling system, also need electric power. &nbsp; PWRs
                            contain between 150-200 fuel assemblies.
                        </p>
                        <a href='https://www.nrc.gov/reactors/pwrs.html'>Link</a>
                        <a href='https://www.sciencedirect.com/topics/engineering/reactor-shutdowns'>Link</a>
                        <br />
                        <br />
                        Enjoy!
                    </div>
                </> :
                <>
                    {rulesBtn}
                    <br />
                    <br />

                    {/* For Dev. Delete Later */}
                    <button onClick={() => { setInputState({ ...inputState, warningLvl: inputState.warningLvl + 1 }) }}>Plus 1</button>
                    <button onClick={() => { setInputState({ ...inputState, warningLvl: inputState.warningLvl - 1 }) }}>Minus 1</button>
                    <br />
                    <br />
                    <div className={styles.flexRow}>
                        <div className={styles.nukeBtns}>
                            <div className={styles.flexColumn}>
                                <button
                                    className={
                                        inputState.power === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        inputState.power === false &&
                                            inputState.coolantPumps === true &&
                                            inputState.fuelRods === true ?
                                            setInputState({
                                                ...inputState,
                                                power: true,
                                                steamGenerator: true,
                                                warningLvl: inputState.warningLvl + 1
                                            }) :
                                            setInputState({ ...inputState, power: inputState.power })
                                    }}>
                                    {inputState.power === false ?
                                        <>
                                            Power Up
                                        </> :
                                        <>
                                            Power Down
                                        </>
                                    }
                                </button>
                                <button
                                    className={
                                        inputState.controlRods === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        setInputState({ ...inputState, controlRods: !inputState.controlRods })
                                    }}>
                                    Control <br />
                                    Rods
                                </button>


                                <button
                                    className={
                                        inputState.coolantPumps === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        setInputState({ ...inputState, coolantPumps: !inputState.coolantPumps })
                                    }}>
                                    Coolant <br />
                                    Pumps
                                </button>
                                <button
                                    className={
                                        inputState.fuelRods === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        inputState.power === false &&
                                            inputState.steamGenerator === false ?
                                            setInputState({ ...inputState, fuelRods: !inputState.fuelRods }) :
                                            inputState.power === true ||
                                                inputState.steamGenerator === true ?
                                                setInputState({ ...inputState, fuelRods: true, power: true }) :
                                                setInputState({ ...inputState, fuelRods: false })
                                    }}>
                                    Fuel <br />
                                    Rods
                                </button>
                            </div>
                            <div className={styles.flexColumn}>
                                <button
                                    className={
                                        inputState.feCoPumps === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        setInputState({ ...inputState, feCoPumps: !inputState.feCoPumps })
                                    }}>
                                    Feed & Condensate <br />
                                    Pumps
                                </button>
                                <button
                                    className={
                                        inputState.steamGenerator === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                >
                                    Steam <br />
                                    Generator
                                </button>
                                <button
                                    className={
                                        inputState.emergencyWater === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        setInputState({ ...inputState, emergencyWater: !inputState.emergencyWater })
                                    }}>
                                    Emergency Water <br />
                                    Supply Systems
                                </button>
                                <button
                                    className={
                                        inputState.h2o2 === false ?
                                            styles.btnOff :
                                            styles.btnOn
                                    }
                                    onClick={() => {
                                        setInputState({ ...inputState, h2o2: !inputState.h2o2 })
                                    }}>
                                    Emergency <br />
                                    H<sub>2</sub>O<sub>2</sub>
                                </button>
                            </div>
                        </div>
                        <div className={styles.sysColumn}>
                            {/* Warning Light */}
                            <div className={`
                    ${styles.systemLevel}
                    ${inputState.warningLvl < 1 ?
                                    styles.sysOkay :
                                    inputState.warningLvl === 1 ?
                                        styles.sysLvl1 :
                                        inputState.warningLvl === 2 ?
                                            styles.sysLvl2 :
                                            inputState.warningLvl === 3 ?
                                                styles.sysLvl3 :
                                                styles.sysCritical
                                }
                        `}
                            >
                                {/* Warning Content */}
                                {inputState.warningLvl < 1 ?
                                    <>
                                        Systems Off
                                    </> :
                                    inputState.warningLvl === 1 ?
                                        <>
                                            Stable <br />
                                            Reactor Lvl 1
                                        </> :
                                        inputState.warningLvl === 2 ?
                                            <>
                                                Caution <br />
                                                Reactor Lvl 2
                                            </> :
                                            inputState.warningLvl === 3 ?
                                                <>
                                                    Warning! <br />
                                                    Reactor Lvl 3
                                                </> :
                                                <>
                                                    Meltdown...
                                                </>
                                }
                            </div>
                            <div className={styles.sysMsg}>
                                <h3>System Message:</h3>
                                <p>
                                    {warningMsg}
                                    <br />
                                    <br />
                                    {systemMsg}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}