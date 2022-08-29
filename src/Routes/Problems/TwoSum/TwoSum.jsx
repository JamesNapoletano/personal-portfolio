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
        const chkValuesArr = []
        let chkTarget = Number()
        if (inputValueOne === '' &&
            inputValueTwo === '' &&
            inputValueThree === '' &&
            inputValueFour === '' &&
            targetValue === '') {
            setOutputValue('')
        } else {
            if (Number(inputValueOne) !== 0 && inputValueOne !== '') {
                chkValuesArr.push(Number(inputValueOne))
            }
            if (Number(inputValueTwo) !== 0 && inputValueTwo !== '') {
                chkValuesArr.push(Number(inputValueTwo))
            }
            if (Number(inputValueThree) !== 0 && inputValueThree !== '') {
                chkValuesArr.push(Number(inputValueThree))
            }
            if (Number(inputValueFour) !== 0 && inputValueFour !== '') {
                chkValuesArr.push(Number(inputValueFour))
            }
            if (targetValue) {
                setSubmittedTargetValue(targetValue)
                chkTarget = Number(targetValue)
            }
            setSubmittedCheckValues(chkValuesArr.join(', '))
            if (chkValuesArr.length < 2 || targetValue === '') {
                setOutputValue('')
            } else {
                console.log(chkValuesArr)
                twoSumCalc(chkValuesArr, chkTarget)
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

    const twoSumCalc = (nums, target) => {
        const ans = []

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if ((nums[i] + nums[j] === target)) {
                    console.log(nums[i])
                    console.log(nums[j])
                    if (i !== j) {
                        if (!ans.includes(nums[j])) {
                            ans.push(nums[i], nums[j])
                        }
                    }
                }
            }
        }

        if (ans.length === 0) {
            setOutputValue('None of the numbers add up to the target.')
        } else {
            console.log(ans)
            ans.length === 4 ?
                setOutputValue(`${ans[0]} + ${ans[1]} = ${target} and ${ans[2]} + ${ans[3]} = ${target}`) :
                setOutputValue(`${ans[0]} + ${ans[1]} = ${target}`)
        }
    };

    return (
        <div>
            <h2>
                Two Sum
            </h2>
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
                    <h3>
                        Check Values: {submittedCheckValues}
                        <br />
                        Target Value: {submittedTargetValue}
                    </h3>
                    <div>
                        {outputValue}
                    </div>
                </> :
                    <>
                        <h3>
                            Welcome to Two Sum!
                        </h3>
                        <div>
                            Two Sum is a calculator of sorts. You can enter between 2-4 numbers
                            into "Check Value Inputs." However, a check value can not be 0. You can
                            then enter a single number into "Target Value Input," which can be any
                            number of your choice. Then click Submit and see that the calculator
                            will return two check values that equal the target value.
                            <br />
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