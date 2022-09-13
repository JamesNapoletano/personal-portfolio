import styles from './StimulationGame.module.css'

import { useState } from "react"
import { Link } from "react-router-dom"

export default function StimulationGame() {
    const defaultInputState = {
        inputOne: false,
        inputTwo: false,
        inputThree: false,
        inputFour: false,
        inputFive: false,
        inputSix: false,
        inputSeven: false,
        inputEight: false,
        inputNine: false,
        inputTen: false,
        inputEleven: false,
        inputTwelve: false,
        inputThirteen: false,
        inputFourteen: false,
        inputFifteen: false,
        inputSixteen: false,
        inputSeventeen: false,
        inputEighteen: false,
        inputNineteen: false,
        inputTwenty: false,
        inputTwentyOne: false,
        inputTwentyTwo: false,
        inputTwentyThree: false,
        inputTwentyFour: false,
        inputTwentyFive: false,
        inputTwentySix: false,
        inputTwentySeven: false,
        inputTwentyEight: false,
        inputTwentyNine: false,
        inputThirty: false,
        inputThirtyOne: false,
    }

    const [startState, setStartState] = useState(false)

    const [inputState, setInputState] = useState(defaultInputState)

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
            <button>
                Close
            </button>
        </Link>
    )

    const resetBtn = (
        <button onClick={() => { setInputState(defaultInputState) }}>
            Reset
        </button>
    )

    return (
        <>
            <h1>
                Stimulation Game
            </h1>
            {closeBtn}
            {startState === false ?
                <>
                    {startBtn}
                    <div className={styles.flexColumn}>
                        <h2>Rules:</h2>
                        <div className={styles.contentBox}>
                            This is a puzzle game where you are seeking to combine all cells into
                            one. You will start with 16 buttons that will have different effects on one-
                            another. It is up to You to figure out the correct method for combining
                            these cells. Note that only cells of the same size will affect each other.
                            <br/>
                            <br/>
                            Enjoy!
                        </div>
                    </div>
                </> :
                <>
                    {rulesBtn}
                    {resetBtn}
                    <br/>
                    <br/>
                    {/* Level Five Button(31) or Two Level Four Buttons(29)(30) */}
                    {inputState.inputTwentyNine === true &&
                        inputState.inputThirty === true ?
                        <>
                            {/* Level Five Button */}
                            <button
                                className={inputState.inputThirtyOne === false ? styles.levelFiveFalse : styles.levelFiveTrue}
                                onClick={() => { setInputState({ ...inputState, inputThirtyOne: !inputState.inputThirtyOne }) }}
                            >
                                31
                            </button>
                        </> :
                        <>
                            {/* Level Five Column */}
                            <div className={styles.flexColumn}>

                                {/* Level Four Button(29) or Two Level Three Buttons(25)(26) */}
                                {inputState.inputTwentyFive === true &&
                                    inputState.inputTwentySix === true ?
                                    <>
                                        {/* Level Four Button */}
                                        <button
                                            className={inputState.inputTwentyNine === false ? styles.levelFourFalse : styles.levelFourTrue}
                                            onClick={() => { setInputState({ ...inputState, inputTwentyNine: !inputState.inputTwentyNine }) }}
                                        >
                                            29
                                        </button>
                                    </> :
                                    <>
                                        {/* Level Four Row */}
                                        <div className={styles.flexRow}>

                                            {/* Level Three Button(25) or Two Level Two Buttons(17)(18) */}
                                            {inputState.inputSeventeen === true &&
                                                inputState.inputEighteen === true ?
                                                <>
                                                    {/* Level Three Button */}
                                                    <button
                                                        className={inputState.inputTwentyFive === false ? styles.levelThreeFalse : styles.levelThreeTrue}
                                                        onClick={() => { setInputState({ ...inputState, inputTwentyFive: !inputState.inputTwentyFive }) }}
                                                    >
                                                        25
                                                    </button>

                                                </> :
                                                <>
                                                    {/* Level Three Row */}
                                                    <div className={styles.flexRow}>

                                                        {/* Level Two Button(17) or Two Level One Buttons(1)(2) */}
                                                        {inputState.inputOne === true &&
                                                            inputState.inputTwo === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputSeventeen === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputSeventeen: !inputState.inputSeventeen }) }}
                                                                >
                                                                    17
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputOne === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputOne: !inputState.inputOne }) }}
                                                                    >
                                                                        1
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputTwo === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputTwo: !inputState.inputTwo }) }}
                                                                    >
                                                                        2
                                                                    </button>
                                                                </div>
                                                            </>}

                                                        {/* Level Two Button(18) or Two Level One Buttons(3)(4) */}
                                                        {inputState.inputThree === true && inputState.inputFour === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputEighteen === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputEighteen: !inputState.inputEighteen }) }}
                                                                >
                                                                    18
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputThree === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputThree: !inputState.inputThree }) }}
                                                                    >
                                                                        3
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputFour === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputFour: !inputState.inputFour }) }}
                                                                    >
                                                                        4
                                                                    </button>
                                                                </div>
                                                            </>}
                                                    </div>
                                                </>}

                                            {/* Level Three Button(26) or Two Level Two Buttons(19)(20) */}
                                            {inputState.inputNineteen === true &&
                                                inputState.inputTwenty === true ?
                                                <>
                                                    {/* Level Three Button */}
                                                    < button
                                                        className={inputState.inputTwentySix === false ? styles.levelThreeFalse : styles.levelThreeTrue}
                                                        onClick={() => { setInputState({ ...inputState, inputTwentySix: !inputState.inputTwentySix }) }}
                                                    >
                                                        26
                                                    </button>
                                                </> :
                                                <>
                                                    {/* Level Three Row */}
                                                    <div className={styles.flexRow}>

                                                        {/* Level Two Button(19) or Two Level One Buttons(5)(6) */}
                                                        {inputState.inputFive === true && inputState.inputSix === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputNineteen === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputNineteen: !inputState.inputNineteen }) }}
                                                                >
                                                                    19
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputFive === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputFive: !inputState.inputFive }) }}
                                                                    >
                                                                        5
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputSix === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputSix: !inputState.inputSix }) }}
                                                                    >
                                                                        6
                                                                    </button>
                                                                </div>
                                                            </>}

                                                        {/* Level Two Button(20) or Two Level One Buttons(7)(8) */}
                                                        {inputState.inputSeven === true && inputState.inputEight === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputTwenty === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputTwenty: !inputState.inputTwenty }) }}
                                                                >
                                                                    20
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputSeven === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputSeven: !inputState.inputSeven }) }}
                                                                    >
                                                                        7
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputEight === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputEight: !inputState.inputEight }) }}
                                                                    >
                                                                        8
                                                                    </button>
                                                                </div>
                                                            </>}
                                                    </div>
                                                </>}
                                        </div>
                                    </>}

                                {/* Level Four Button(30) or Two Level Three Buttons(27)(28) */}
                                {inputState.inputTwentySeven === true &&
                                    inputState.inputTwentyEight === true ?
                                    <>
                                        {/* Level Four Button */}
                                        <button
                                            className={inputState.inputThirty === false ? styles.levelFourFalse : styles.levelFourTrue}
                                            onClick={() => { setInputState({ ...inputState, inputThirty: !inputState.inputThirty }) }}
                                        >
                                            30
                                        </button>
                                    </> :
                                    <>
                                        {/* Level Four Row */}
                                        <div className={styles.flexRow}>

                                            {/* Level Three Button(27) or Two Level Two Buttons(21)(22) */}
                                            {inputState.inputTwentyOne === true && inputState.inputTwentyTwo === true ?
                                                <>
                                                    {/* Level Three Button */}
                                                    <button
                                                        className={inputState.inputTwentySeven === false ? styles.levelThreeFalse : styles.levelThreeTrue}
                                                        onClick={() => { setInputState({ ...inputState, inputTwentySeven: !inputState.inputTwentySeven }) }}
                                                    >
                                                        27
                                                    </button>
                                                </> :
                                                <>
                                                    {/* Level Three Row */}
                                                    <div className={styles.flexRow}>

                                                        {/* Level Two Button(21) or Two Level One Buttons(9)(10) */}
                                                        {inputState.inputNine === true && inputState.inputTen === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputTwentyOne === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputTwentyOne: !inputState.inputTwentyOne }) }}
                                                                >
                                                                    21
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputNine === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputNine: !inputState.inputNine }) }}
                                                                    >
                                                                        9
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputTen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputTen: !inputState.inputTen }) }}
                                                                    >
                                                                        10
                                                                    </button>
                                                                </div>
                                                            </>}

                                                        {/* Level Two Button(22) or Two Level One Buttons(11)(12) */}
                                                        {inputState.inputEleven === true && inputState.inputTwelve === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputTwentyTwo === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputTwentyTwo: !inputState.inputTwentyTwo }) }}
                                                                >
                                                                    22
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputEleven === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputEleven: !inputState.inputEleven }) }}
                                                                    >
                                                                        11
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputTwelve === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputTwelve: !inputState.inputTwelve }) }}
                                                                    >
                                                                        12
                                                                    </button>
                                                                </div>
                                                            </>}
                                                    </div>
                                                </>}

                                            {/* Level Three Button(28) or Two Level Two Buttons(23)(24) */}
                                            {inputState.inputTwentyThree === true &&
                                                inputState.inputTwentyFour === true ?
                                                <>
                                                    {/* Level Three Button */}
                                                    <button
                                                        className={inputState.inputTwentyEight === false ? styles.levelThreeFalse : styles.levelThreeTrue}
                                                        onClick={() => { setInputState({ ...inputState, inputTwentyEight: !inputState.inputTwentyEight }) }}
                                                    >
                                                        28
                                                    </button>
                                                </> :
                                                <>
                                                    {/* Level Three Row */}
                                                    <div className={styles.flexRow}>

                                                        {/* Level Two Button(23) or Two Level One Buttons(13)(14) */}
                                                        {inputState.inputThirteen === true && inputState.inputFourteen === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputTwentyThree === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputTwentyThree: !inputState.inputTwentyThree }) }}
                                                                >
                                                                    23
                                                                </button>
                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputThirteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputThirteen: !inputState.inputThirteen }) }}
                                                                    >
                                                                        13
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputFourteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputFourteen: !inputState.inputFourteen }) }}
                                                                    >
                                                                        14
                                                                    </button>
                                                                </div>
                                                            </>}

                                                        {/* Level Two Button(24) or Two Level One Buttons(15)(16) */}
                                                        {inputState.inputFifteen === true && inputState.inputSixteen === true ?
                                                            <>
                                                                {/* Level Two Button */}
                                                                <button
                                                                    className={inputState.inputTwentyFour === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                                    onClick={() => { setInputState({ ...inputState, inputTwentyFour: !inputState.inputTwentyFour }) }}
                                                                >
                                                                    24
                                                                </button>

                                                            </> :
                                                            <>
                                                                {/* Level Two Column */}
                                                                <div className={styles.flexColumn}>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputFifteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputFifteen: !inputState.inputFifteen }) }}
                                                                    >
                                                                        15
                                                                    </button>

                                                                    {/* Level One Button */}
                                                                    <button
                                                                        className={inputState.inputSixteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                        onClick={() => { setInputState({ ...inputState, inputSixteen: !inputState.inputSixteen }) }}
                                                                    >
                                                                        16
                                                                    </button>
                                                                </div>
                                                            </>}
                                                    </div>
                                                </>}
                                        </div>
                                    </>}
                            </div>
                        </>}
                </>}
        </>
    )
}