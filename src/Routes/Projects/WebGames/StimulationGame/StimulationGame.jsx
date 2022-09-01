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
    const [inputState, setInputState] = useState(defaultInputState)

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
            {resetBtn}

            {/* Level Five Button(31) or Two Level Four Buttons(29)(30) */}
            {inputState.inputOne === true &&
                inputState.inputTwo === true &&
                inputState.inputThree === true &&
                inputState.inputFour === true &&
                inputState.inputFive === true &&
                inputState.inputSix === true &&
                inputState.inputSeven === true &&
                inputState.inputEight === true &&
                inputState.inputNine === true &&
                inputState.inputTen === true &&
                inputState.inputEleven === true &&
                inputState.inputTwelve === true &&
                inputState.inputThirteen === true &&
                inputState.inputFourteen === true &&
                inputState.inputFifteen === true &&
                inputState.inputSixteen === true &&
                inputState.inputSeventeen === true &&
                inputState.inputEighteen === true &&
                inputState.inputNineteen === true &&
                inputState.inputTwenty === true &&
                inputState.inputTwentyOne === true &&
                inputState.inputTwentyTwo === true &&
                inputState.inputTwentyThree === true &&
                inputState.inputTwentyFour === true &&
                inputState.inputTwentyFive === true &&
                inputState.inputTwentySix === true &&
                inputState.inputTwentySeven === true &&
                inputState.inputTwentyEight === true &&
                inputState.inputTwentyNine === true &&
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
                        {inputState.inputOne === true &&
                            inputState.inputTwo === true &&
                            inputState.inputThree === true &&
                            inputState.inputFour === true &&
                            inputState.inputFive === true &&
                            inputState.inputSix === true &&
                            inputState.inputSeven === true &&
                            inputState.inputEight === true &&
                            inputState.inputSeventeen === true &&
                            inputState.inputEighteen === true &&
                            inputState.inputNineteen === true &&
                            inputState.inputTwenty === true &&
                            inputState.inputTwentyFive === true &&
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
                                    {inputState.inputOne === true &&
                                        inputState.inputTwo === true &&
                                        inputState.inputThree === true &&
                                        inputState.inputFour === true &&
                                        inputState.inputSeventeen === true &&
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
                                                {inputState.inputOne === true && inputState.inputTwo === true ?
                                                    <>
                                                        {/* Level Two Button */}
                                                        <button
                                                            className={inputState.inputSeventeen === false ? styles.levelTwoFalse : styles.levelTwoTrue}
                                                            onClick={() => {
                                                                inputState.inputSeventeen === true &&
                                                                    inputState.inputTwenty === true ?
                                                                    setInputState({ ...inputState, inputSeventeen: false, inputTwenty: false }) :
                                                                    setInputState({ ...inputState, inputSeventeen: !inputState.inputSeventeen })
                                                            }}
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
                                                                onClick={() => { setInputState({ ...inputState, inputOne: inputState.inputOne }) }}
                                                            >
                                                                1
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputTwo === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputOne === true &&
                                                                        inputState.inputThree === false ?
                                                                        setInputState({ ...inputState, inputTwo: true }) :
                                                                        setInputState({ ...inputState, inputOne: false })
                                                                }}
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
                                                            onClick={() => {
                                                                inputState.inputEighteen === true ?
                                                                    setInputState({ ...inputState, inputThree: false, inputEight: false, inputEighteen: false }) :
                                                                    setInputState({ ...inputState, inputEighteen: true })
                                                            }}
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
                                                                onClick={() => {
                                                                    inputState.inputFour === true &&
                                                                        inputState.inputSeventeen === false &&
                                                                        inputState.inputNineteen === true &&
                                                                        inputState.inputTwenty === true ?
                                                                        setInputState({ ...inputState, inputThree: true, inputOne: true }) :
                                                                        inputState.inputFive === true ?
                                                                            setInputState({ ...inputState, inputEight: false }) :
                                                                            setInputState({ ...inputState, inputThree: inputState.inputThree })
                                                                }}
                                                            >
                                                                3
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputFour === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputSix === true &&
                                                                        inputState.inputEight === true &&
                                                                        inputState.inputNineteen === true ?
                                                                        setInputState({ ...inputState, inputFour: true }) :
                                                                        setInputState({ ...inputState, inputSeven: false })
                                                                }}
                                                            >
                                                                4
                                                            </button>
                                                        </div>
                                                    </>}
                                            </div>
                                        </>}

                                    {/* Level Three Button(26) or Two Level Two Buttons(19)(20) */}
                                    {inputState.inputFive === true &&
                                        inputState.inputSix === true &&
                                        inputState.inputSeven === true &&
                                        inputState.inputEight === true &&
                                        inputState.inputNineteen === true &&
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
                                                            onClick={() => {
                                                                inputState.inputSeventeen === true &&
                                                                    inputState.inputNineteen === true ?
                                                                    setInputState({ ...inputState, inputThirteen: true, inputNineteen: false }) :
                                                                    setInputState({ ...inputState, inputThirteen: false, inputNineteen: !inputState.inputNineteen })
                                                            }}
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
                                                                onClick={() => {
                                                                    inputState.inputFive === false &&
                                                                        inputState.inputSeven === true &&
                                                                        inputState.inputEight === true ?
                                                                        setInputState({ ...inputState, inputFive: true, inputEight: false }) :
                                                                        setInputState({ ...inputState, inputFive: inputState.inputFive })
                                                                }}
                                                            >
                                                                5
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputSix === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputFive === true &&
                                                                        inputState.inputSeven === true &&
                                                                        inputState.inputEight === false ?
                                                                        setInputState({ ...inputState, inputSix: true, inputSeven: false }) :
                                                                        setInputState({ ...inputState, inputSix: inputState.inputSix })
                                                                }}
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
                                                                onClick={() => {
                                                                    inputState.inputEight === true ?
                                                                        setInputState({ ...inputState, inputSeven: true }) :
                                                                        setInputState({ ...inputState, inputSeven: inputState.inputSeven })
                                                                }}
                                                            >
                                                                7
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputEight === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputSeven === true &&
                                                                        inputState.inputSix === false ?
                                                                        setInputState({ ...inputState, inputEight: inputState.inputEight }) : setInputState({ ...inputState, inputEight: true })
                                                                }}
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
                        {inputState.inputNine === true &&
                            inputState.inputTen === true &&
                            inputState.inputEleven === true &&
                            inputState.inputTwelve === true &&
                            inputState.inputThirteen === true &&
                            inputState.inputFourteen === true &&
                            inputState.inputFifteen === true &&
                            inputState.inputSixteen === true &&
                            inputState.inputTwentyOne === true &&
                            inputState.inputTwentyTwo === true &&
                            inputState.inputTwentyThree === true &&
                            inputState.inputTwentyFour === true &&
                            inputState.inputTwentySeven === true &&
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

                                    {/* Level Three Button(27) or Two Level Two Buttons(19)(20) */}
                                    {inputState.inputNine === true &&
                                        inputState.inputTen === true &&
                                        inputState.inputEleven === true &&
                                        inputState.inputTwelve === true &&
                                        inputState.inputTwentyOne === true &&
                                        inputState.inputTwentyTwo === true ?
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
                                                                onClick={() => {
                                                                    inputState.inputOne === false &&
                                                                        inputState.inputFourteen === true ?
                                                                        setInputState({ ...inputState, inputNine: true }) :
                                                                        setInputState({ ...inputState, inputNine: inputState.inputNine })
                                                                }}
                                                            >
                                                                9
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputTen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputNine === true &&
                                                                        inputState.inputThirteen === true &&
                                                                        inputState.inputFourteen === true ?
                                                                        setInputState({ ...inputState, inputTen: true }) :
                                                                        setInputState({ ...inputState, inputTen: inputState.inputTen })
                                                                }}
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
                                                            onClick={() => {
                                                                inputState.inputTwentyTwo === false ?
                                                                    setInputState({ ...inputState, inputTwentyTwo: true, inputNineteen: true }) :
                                                                    setInputState({ ...inputState, inputTwentyTwo: false })
                                                            }}
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
                                                                onClick={() => {
                                                                    inputState.inputOne === false &&
                                                                        inputState.inputTwentyOne === true ?
                                                                        setInputState({ ...inputState, inputEleven: true }) :
                                                                        inputState.inputOne === false &&
                                                                            inputState.inputTwentyOne === false ?
                                                                            setInputState({ ...inputState, inputTwelve: true }) :
                                                                            setInputState({ ...inputState, inputEleven: inputState.inputEleven })
                                                                }}
                                                            >
                                                                11
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputTwelve === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => { setInputState({ ...inputState, inputTwelve: inputState.inputTwelve }) }}
                                                            >
                                                                12
                                                            </button>
                                                        </div>
                                                    </>}
                                            </div>
                                        </>}

                                    {/* Level Three Button(28) or Two Level Two Buttons(23)(24) */}
                                    {inputState.inputThirteen === true &&
                                        inputState.inputFourteen === true &&
                                        inputState.inputFifteen === true &&
                                        inputState.inputSixteen === true &&
                                        inputState.inputTwentyThree === true &&
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
                                                                onClick={() => {
                                                                    inputState.inputThirteen === true ?
                                                                        setInputState({ ...inputState, inputThirteen: false, inputSeventeen: false }) :
                                                                        setInputState({ ...inputState, inputThirteen: inputState.inputThirteen })
                                                                }}
                                                            >
                                                                13
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputFourteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputThirteen === true &&
                                                                        inputState.inputNineteen === false ?
                                                                        setInputState({ ...inputState, inputFourteen: true }) :
                                                                        setInputState({ ...inputState, inputOne: false, inputSeventeen: false })
                                                                }}
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
                                                                onClick={() => {
                                                                    inputState.inputEleven === true &&
                                                                        inputState.inputTwelve === true &&
                                                                        inputState.inputTwentyTwo === true ?
                                                                        setInputState({ ...inputState, inputFifteen: true }) :
                                                                        setInputState({ ...inputState, inputFifteen: inputState.inputFifteen })
                                                                }}
                                                            >
                                                                15
                                                            </button>

                                                            {/* Level One Button */}
                                                            <button
                                                                className={inputState.inputSixteen === false ? styles.levelOneFalse : styles.levelOneTrue}
                                                                onClick={() => {
                                                                    inputState.inputThirteen === true &&
                                                                        inputState.inputFourteen === true &&
                                                                        inputState.inputFifteen === true &&
                                                                        inputState.inputSeventeen === true &&
                                                                        inputState.inputEighteen === true &&
                                                                        inputState.inputNineteen === true &&
                                                                        inputState.inputTwenty === true &&
                                                                        inputState.inputTwentyOne === true &&
                                                                        inputState.inputTwentyTwo === true ?
                                                                        setInputState({ ...inputState, inputSixteen: true }) :
                                                                        setInputState({ ...inputState, inputSixteen: inputState.inputSixteen })
                                                                }}
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
        </>
    )
}