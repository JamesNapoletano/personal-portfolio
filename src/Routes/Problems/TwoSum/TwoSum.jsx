import { useState } from 'react'
import styles from './TwoSum.module.css'

const TwoSum = () => {
    const [inputValueOne, setInputValueOne] = useState('')
    const [inputValueTwo, setInputValueTwo] = useState('')
    const [inputValueThree, setInputValueThree] = useState('')
    const [inputValueFour, setInputValueFour] = useState('')
    const [targetValue, setTargetValue] = useState('')


    return (
        <div>
            <h1>
                Two Sum
            </h1>
            <div className={styles.inputFlexRow}>
                <div className={styles.twoSumInputs}>
                    <p>Check Value Inputs:</p>
                    <input type='number' value={inputValueOne} onChange={(e) => { setInputValueOne(e.target.value) }} />
                    <input type='number' value={inputValueTwo} onChange={(e) => { setInputValueTwo(e.target.value) }} />
                    <input type='number' value={inputValueThree} onChange={(e) => { setInputValueThree(e.target.value) }} />
                    <input type='number' value={inputValueFour} onChange={(e) => { setInputValueFour(e.target.value) }} />
                </div>
                <button>
                    Submit
                </button>
                <div className={styles.twoSumInputs}>
                    <p>Target Value Input:</p>
                    <input type='number' value={targetValue} onChange={(e) => { setTargetValue(e.target.value) }} />
                </div>
            </div>
        </div>
    )
}

export default TwoSum