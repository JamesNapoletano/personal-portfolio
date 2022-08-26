import { useEffect, useState } from 'react'
import styles from './TwoSum.module.css'

const TwoSum = () => {
    const [inputValueOne, setInputValueOne] = useState('')
    const [inputValueTwo, setInputValueTwo] = useState('')
    const [inputValueThree, setInputValueThree] = useState('')
    const [inputValueFour, setInputValueFour] = useState('')
    const [targetValue, setTargetValue] = useState('')
    const [submittedCheckValues, setSubmittedCheckValues] = useState('')
    const [submittedTargetValue, setSubmittedTargetValue] = useState('')
    const [outputValue, setOutputValue] = useState('')

    useEffect(() => {
        if (inputValueOne === '' &&
            inputValueTwo === '' &&
            inputValueThree === '' &&
            inputValueFour === '' &&
            targetValue === '') {
            setOutputValue('')
        }
    }, [inputValueOne, inputValueTwo, inputValueThree, inputValueFour, targetValue, outputValue])

    const submit = () => {
        const subValArr = []
        if (inputValueOne === '' &&
            inputValueTwo === '' &&
            inputValueThree === '' &&
            inputValueFour === '' &&
            targetValue === '') {
            setOutputValue('')
        } else {
            if (Number(inputValueOne) !== 0 && inputValueOne !== '') {
                subValArr.push(inputValueOne)
            }
            if (Number(inputValueTwo) !== 0 && inputValueTwo !== '') {
                subValArr.push(inputValueTwo)
            }
            if (Number(inputValueThree) !== 0 && inputValueThree !== '') {
                subValArr.push(inputValueThree)
            }
            if (Number(inputValueFour) !== 0 && inputValueFour !== '') {
                subValArr.push(inputValueFour)
            }
            if (Number(targetValue)) {
                setSubmittedTargetValue(targetValue)
            }
            setSubmittedCheckValues(subValArr.join(', '))
            if (subValArr.length < 2 || targetValue === '') {
                setOutputValue('')
            } else {
                setOutputValue(`${subValArr.join(', ')}, ${targetValue}`)
            }
        }
    }

    const clear = () => {
        setInputValueOne('')
        setInputValueTwo('')
        setInputValueThree('')
        setInputValueFour('')
        setTargetValue('')
    }

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
                <div className={styles.twoSumButtons}>
                    <button onClick={submit}>
                        Submit
                    </button>
                    <button onClick={clear}>
                        Clear
                    </button>
                </div>
                <div className={styles.twoSumInputs}>
                    <p>Target Value Input:</p>
                    <input type='number' value={targetValue} onChange={(e) => { setTargetValue(e.target.value) }} />
                </div>
            </div>
            <div className={styles.contentBox}>
                {outputValue ? <>
                    <h2>
                        Check Values: {submittedCheckValues}
                        <br />
                        Target Value: {submittedTargetValue}
                    </h2>
                    <div>
                        {outputValue}
                    </div>
                </> :
                    <>
                        <h2>Welcome to Two Sum!</h2>
                        <div>
                            Two Sum is a calculator of sorts. You can input between 2-4 numbers
                            into "Check Value Inputs" and a single number into "Target Value Input."
                            You can then click Submit and see that the calculator will return which
                            two check values equal the target value.
                            <br />
                            Enjoy!
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default TwoSum