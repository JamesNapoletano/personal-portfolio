import UnderDevelopment from '../../../../Components/UnderDevelopment/UnderDevelopment'
import styles from './NuclearReactor.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const isPowerButtonEnabled = ({
    controlRods,
    coolantPumps,
    emergencyWater,
    feCoPumps,
    fuelRods,
    h2o2,
    power,
    steamGenerator,
    stage,
    warningLvl,
}) => {
    if (stage === 1) {
        if (warningLvl === 0) {
            return !controlRods &&
                coolantPumps &&
                !emergencyWater &&
                !feCoPumps &&
                fuelRods &&
                !h2o2
        }
    } else if (warningLvl === 1) {
        return controlRods &&
            coolantPumps &&
            feCoPumps &&
            fuelRods &&
            power
    }
};

const isFuelRodButtonEnabled = ({
    stage,
}) => {
    if (stage === 1) {
        return true
    } else if (stage === 5) {
        return true
    }
}

const getWarningMessage = ({
    warningLvl,
}) => {
    let warningMsg = ''
    switch (warningLvl) {
        case 0:
            warningMsg = '-Reactor Systems Off'
            break;
        case 1:
            warningMsg = '-Reactor Systems On'
            break;
        case 2:
            warningMsg = '-Reactor Systems Unstable'
            break;
        case 3:
            warningMsg = '-Reactor Systems Approaching Critical'
            break;
        case 4:
            warningMsg = '-Reactor Systems Critical'
    }
    return warningMsg
}

const getSystemMessage = ({
    controlRods,
    coolantPumps,
    emergencyWater,
    feCoPumps,
    fuelRods,
    h2o2,
    power,
    steamGenerator,
    stage,
    warningLvl,
}) => {
    let systemMsg = ''
    switch (stage) {
        case 1:
            if (!coolantPumps || !fuelRods) {
                systemMsg = '-Prior to powering on the reactor, please '
                if (!coolantPumps) {
                    if (!fuelRods) {
                        systemMsg = `${systemMsg} turn on coolant Pumps and insert Fuel Rods. \n`
                    } else {
                        systemMsg = `${systemMsg} turn on coolant Pumps. \n`
                    }
                } else {
                    systemMsg = `${systemMsg} insert Fuel Rods. \n`
                }
            }
            if (controlRods || h2o2) {
                systemMsg = `${systemMsg}-Reaction will not occur if `
                if (controlRods) {
                    if (h2o2) {
                        systemMsg = `${systemMsg} Control Rods are in place and Hydrogen Peroxide is added.\n`
                    } else {
                        systemMsg = `${systemMsg} Control Rods are in place.\n`
                    }
                } else {
                    systemMsg = `${systemMsg} Hydrogen Peroxide is added.\n`
                }
            }
            if (feCoPumps || emergencyWater) {
                systemMsg = `${systemMsg}-All generator power is being used by `
                if (feCoPumps) {
                    if (emergencyWater) {
                        systemMsg = `${systemMsg} Feed/Condensate and Emergency Water Supply Pumps.\n`
                    } else {
                        systemMsg = `${systemMsg} Feed/Condensate Pumps.\n`
                    }
                } else {
                    systemMsg = `${systemMsg} Emergency Water Supply Pumps.\n`
                }
            }
            if (!systemMsg) {
                return 'Ready to power on Reactor'
            }
            break;
        case 2:
            systemMsg = '-Generating Steam . . .\n'
            switch (warningLvl) {
                case 2:
                    if (feCoPumps) {
                        if (controlRods) {
                            systemMsg = `${systemMsg}-Residual heat in Coolant Loop from late Feed/Condensate Pump start up.\n`
                        } else {
                            systemMsg = `${systemMsg}-Returning Exhaust Steam to Coolant Loop as Demineralized Water.\n`
                        }
                    }
                    break;
                case 3:
                    if (feCoPumps) {
                        systemMsg = `${systemMsg}-Returning Exhaust Steam to Coolant Loop as Demineralized Water.\n`
                    } else {
                        systemMsg = `${systemMsg}-Excess Steam building in Coolant Loop.\n`
                    }
                    if (h2o2) {
                        systemMsg = `${systemMsg}-Hydrogen Peroxide is buffering rising Core temperature.\n`
                    } else {
                        systemMsg = `${systemMsg}-Reactor Core temperature rising.\n`
                    }

                    break;
            }
            break;
    }
    if (systemMsg) {
        return systemMsg
    } else {
        return 'N/A'
    }
}

export default function NuclearReactor() {

    const defaultInputState = {
        controlRods: false,
        coolantPumps: false,
        emergencyWater: false,
        feCoPumps: false,
        fuelRods: false,
        h2o2: false,
        power: false,
        steamGenerator: false,
        stage: 1,
        warningLvl: 0,
    }

    const [startState, setStartState] = useState(false)
    const [hintState, setHintState] = useState(false)
    const [inputState, setInputState] = useState(defaultInputState)

    const controlRodsButtonClickHandler = () => {
        switch (inputState.stage) {
            case 1:
                setInputState({ ...inputState, controlRods: !inputState.controlRods })
                break;
            case 2:
                switch (inputState.warningLvl) {
                    case 2:
                        if (inputState.feCoPumps) {
                            setInputState({
                                ...inputState,
                                controlRods: !inputState.controlRods,
                                stage: inputState.stage + 1,
                                warningLvl: inputState.warningLvl - 1,
                            })
                        } else {
                            setInputState({
                                ...inputState,
                                controlRods: !inputState.controlRods,
                                warningLvl: inputState.warningLvl + 1,
                            })
                        }
                        break;
                    case 3:
                        if (inputState.feCoPumps) {
                            if (inputState.h2o2) {
                                setInputState({
                                    ...inputState,
                                    controlRods: !inputState.controlRods,
                                    power: !inputState.power,
                                    stage: 1,
                                    steamGenerator: !inputState.steamGenerator,
                                    warningLvl: 0,
                                })
                            } else {
                                setInputState({
                                    ...inputState,
                                    controlRods: !inputState.controlRods,
                                    warningLvl: inputState.warningLvl - 1,
                                })
                            }
                        } else {
                            setInputState({
                                ...inputState,
                                controlRods: !inputState.controlRods,
                                warningLvl: inputState.warningLvl + 1,
                            })
                        }
                        break;
                }
                break;
        }
    }

    const coolantPumpsButtonClickHandler = () => {
        switch (inputState.stage) {
            case 1:
                setInputState({ ...inputState, coolantPumps: !inputState.coolantPumps })
                break;
            case 2:
                switch (inputState.warningLvl) {
                    case 2:

                        setInputState({
                            ...inputState,
                            coolantPumps: !inputState.coolantPumps,
                            warningLvl: inputState.warningLvl + 1,
                        })

                        break;
                    case 3:
                        if (inputState.h2o2) {
                            if (inputState.coolantPumps) {
                                setInputState({
                                    ...inputState,
                                    coolantPumps: !inputState.coolantPumps,
                                    warningLvl: inputState.warningLvl + 1,
                                })
                            } else {
                                setInputState({
                                    ...inputState,
                                    coolantPumps: !inputState.coolantPumps,
                                })
                            }
                        } else {
                            setInputState({
                                ...inputState,
                                coolantPumps: !inputState.coolantPumps,
                                warningLvl: inputState.warningLvl + 1,
                            })
                        }
                        break;
                }
                break;
        }
    }

    const h2o2ClickHandler = () => {
        switch (inputState.stage) {
            case 1:
                setInputState({ ...inputState, h2o2: !inputState.h2o2 })
                break;
            case 2:
                if (inputState.coolantPumps) {
                    setInputState({
                        ...inputState,
                        h2o2: !inputState.h2o2,
                        warningLvl: inputState.warningLvl + 1,
                    })
                } else {
                    if (inputState.h2o2) {
                        setInputState({
                            ...inputState,
                            h2o2: !inputState.h2o2,
                            warningLvl: inputState.warningLvl + 1,
                        })
                    } else {
                        setInputState({
                            ...inputState,
                            h2o2: !inputState.h2o2,
                        })
                    }
                }
                break;
        }
    }

    const emergencyWaterButtonClickHandler = () => {
        switch (inputState.stage) {
            case 1:
                setInputState({ ...inputState, emergencyWater: !inputState.emergencyWater })
                break;
            case 2:
                setInputState({
                    ...inputState,
                    emergencyWater: !inputState.emergencyWater,
                    warningLvl: inputState.warningLvl + 1,
                })
                break;
        }
    }

    const feCoPumpsButtonClickHandler = () => {
        switch (inputState.stage) {
            case 1:
                setInputState({ ...inputState, feCoPumps: !inputState.feCoPumps })
                break;
            case 2:
                if (inputState.controlRods) {
                    if (inputState.h2o2) {
                        setInputState({
                            ...inputState,
                            feCoPumps: !inputState.feCoPumps,
                            power: false,
                            stage: 1,
                            steamGenerator: false,
                            warningLvl: 0,
                        })
                    } else {
                        setInputState({
                            ...inputState,
                            feCoPumps: !inputState.feCoPumps,
                            warningLvl: inputState.warningLvl - 1,
                        })
                    }
                } else {
                    if (inputState.feCoPumps) {
                        setInputState({
                            ...inputState,
                            feCoPumps: !inputState.feCoPumps,
                            warningLvl: inputState.warningLvl + 1,
                        })
                    } else {
                        setInputState({
                            ...inputState,
                            feCoPumps: !inputState.feCoPumps,
                        })
                    }
                }
                break;
        }
    }

    const fuelRodsButtonClickHandler = () => {
        setInputState({ ...inputState, fuelRods: !inputState.fuelRods })
    }

    const powerButtonClickHandler = () => {
        if (inputState.warningLvl === 0) {
            setInputState({
                ...inputState,
                power: !inputState.power,
                stage: 2,
                steamGenerator: true,
                warningLvl: inputState.warningLvl + 2,
            })
        }
    }

    return (
        <>
            <h1>Nuclear Reactor</h1>
            <UnderDevelopment />
            <Link to='..'>
                <button onClick={() => { setStartState(false) }}>
                    Close
                </button>
            </Link>
            <button onClick={() => { setStartState(!startState) }}>
                {startState ? <>Rules</> : <>Start</>}
            </button>
            {!startState ?
                <>
                    <h2>Rules:</h2>
                    <div className={styles.contentBox}>
                        <p>
                            The Nuclear Reactor game is a simplified simulation of the Power
                            Up and Shut Down sequence of a Pressurized Water Nuclear Reactor!
                            <br />
                            <br />
                            Your objectives are as followed:
                        </p>
                        <ol>
                            <li>Power on Reactor</li>
                            <li>Stabilize Reactivity</li>
                            <li>Power down Reactor</li>
                            <li>Stop Reactivity</li>
                            <li>Remove all Equipment</li>
                        </ol>
                        <p>
                            Navigate your way through the operation of a reactor based on
                            System Messages, Warning Levels, and Common Sense. Your goal is to
                            complete the task as smoothly as possible. Should the situation become
                            dire, you may be able to cause an emergency shutdown.
                        </p>
                        <br />
                        {!hintState ?
                            <>
                                <p>
                                    Below is a Hint and some information on Pressurized Water
                                    Reactors. If you complete the game without observing the hint, you
                                    should go back and view it to learn some interesting information!
                                </p>
                                <button onClick={() => { setHintState(!hintState) }}>
                                    Hint
                                </button>
                            </> :
                            <>
                                <p>
                                    Hint:
                                    <br />
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
                            </>
                        }
                        {/* https://www.nrc.gov/reactors/pwrs.html
                        https://www.sciencedirect.com/topics/engineering/reactor-shutdowns */}
                        <br />
                        <br />
                        Enjoy!
                    </div>
                </> :
                <>
                    <br />
                    <br />

                    {/* For Dev. Delete Later */}
                    <button onClick={() => { setInputState({ ...inputState, warningLvl: inputState.warningLvl + 1 }) }}>Warning<br />Plus 1</button>
                    <button onClick={() => { setInputState({ ...inputState, warningLvl: inputState.warningLvl - 1 }) }}>Warning<br />Minus 1</button>
                    <br />
                    <button onClick={() => { setInputState({ ...inputState, stage: inputState.stage + 1 }) }}>Stage<br />Plus 1</button>
                    <button onClick={() => { setInputState({ ...inputState, stage: inputState.stage - 1 }) }}>Stage<br />Minus 1</button>
                    <br />
                    <button onClick={() => { setInputState(defaultInputState) }}>reset</button>
                    <p>Stage {inputState.stage}</p>
                    <br />
                    <br />
                    {/* For Dev. Delete Above */}

                    <div className={styles.flexRow}>
                        <div className={styles.nukeBtns}>
                            <div className={styles.flexColumn}>
                                <button
                                    disabled={!isPowerButtonEnabled(inputState)}
                                    className={
                                        inputState.power ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { powerButtonClickHandler(inputState) }}>
                                    {inputState.power ?
                                        <>
                                            Power Down
                                        </> :
                                        <>
                                            Power Up
                                        </>
                                    }
                                </button>
                                <button
                                    className={
                                        inputState.controlRods ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { controlRodsButtonClickHandler(inputState) }}>
                                    Control <br />
                                    Rods
                                </button>


                                <button
                                    className={
                                        inputState.coolantPumps ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { coolantPumpsButtonClickHandler(inputState) }}>
                                    Coolant <br />
                                    Pumps
                                </button>
                                <button
                                    disabled={!isFuelRodButtonEnabled(inputState)}
                                    className={
                                        inputState.fuelRods ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { fuelRodsButtonClickHandler(inputState) }}>
                                    Fuel <br />
                                    Rods
                                </button>
                            </div>
                            <div className={styles.flexColumn}>
                                <button
                                    className={
                                        inputState.feCoPumps ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { feCoPumpsButtonClickHandler(inputState) }}>
                                    Feed & Condensate <br />
                                    Pumps
                                </button>
                                <button
                                    className={
                                        inputState.steamGenerator ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                >
                                    Steam <br />
                                    Generator
                                </button>
                                <button
                                    className={
                                        inputState.emergencyWater ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { emergencyWaterButtonClickHandler(inputState) }}>
                                    Emergency Water <br />
                                    Supply Systems
                                </button>
                                <button
                                    className={
                                        inputState.h2o2 ?
                                            styles.btnOn :
                                            styles.btnOff
                                    }
                                    onClick={() => { h2o2ClickHandler(inputState) }}>
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
                                    {getWarningMessage(inputState)}
                                    <br />
                                    <br />
                                    {getSystemMessage(inputState)}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}