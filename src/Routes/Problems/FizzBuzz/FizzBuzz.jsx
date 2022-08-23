import React, { useEffect, useState } from "react";
import styles from './FizzBuzz.module.css'

const FizzBuzz = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')

    useEffect(() => {
        if (inputValue === '') {
            setOutputValue('')
        }
    }, [inputValue])

    const submit = () => {
        if (inputValue < 1000 && inputValue > 2) {
            setSubmittedValue(inputValue)
            fizzBuzzGen(inputValue)
        } else if (inputValue === '') {
            setOutputValue('')
        } else {
            setSubmittedValue(inputValue)
            return setOutputValue('Please enter a number between 3 and 999')
        }
    }


    const fizzBuzzGen = (num) => {
        let genOutput = []
        let genOutputList = []

        for (let i = 1; i <= num; i += 3) {
            if (i % 3 === 0) {
                genOutput.push(i + ': Fizz' + (i % 5 === 0 ? 'Buzz' : ''))
            }
            else if (i % 5 === 0) {
                genOutput.push(i + ': Buzz')
            }
            else {
                genOutput.push(i.toString())
            }
        }
        genOutputList.push(<ul>{genOutput.map((value) => {
            return <li>{value}</li>
        }
        )
        }
        </ul>
        )
        genOutput = []
        for (let i = 2; i <= num; i += 3) {
            if (i % 3 === 0) {
                genOutput.push(i + ': Fizz' + (i % 5 === 0 ? 'Buzz' : ''))
            }
            else if (i % 5 === 0) {
                genOutput.push(i + ': Buzz')
            }
            else {
                genOutput.push(i.toString())
            }
        }
        genOutputList.push(<ul>{genOutput.map((value) => {
            return <li>{value}</li>
        }
        )
        }
        </ul>
        )
        genOutput = []
        for (let i = 3; i <= num; i += 3) {
            if (i % 3 === 0) {
                genOutput.push(i + ': Fizz' + (i % 5 === 0 ? 'Buzz' : ''))
            }
            else if (i % 5 === 0) {
                genOutput.push(i + ': Buzz')
            }
            else {
                genOutput.push(i.toString())
            }
        }
        genOutputList.push(<ul>{genOutput.map((value) => {
            return <li>{value}</li>
        }
        )
        }
        </ul>
        )

        setOutputValue(genOutputList)
    }

    return (
        <div>
            <h1>
                FizzBuzz
            </h1>
            <input type='number' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button onClick={submit}>Submit</button>
            <br />
            <div>
                {outputValue ? <>
                    <h2>
                        Set Limit: {submittedValue}
                    </h2>
                    <div className={styles.outputList}>
                        {outputValue}
                    </div>
                </> :
                    <>
                        <h2>Welcome to FizzBuzz!</h2>
                        <div>
                            The concept is simple: enter an upper limit for the FizzBuzz generator.
                            <br />
                            Returned, will be, all numbers from 1 to your specified limit. All numbers
                            <br />
                            divisible by 3 will be replaced with "Fizz," while all numbers divisible by
                            <br />
                            5 will be replaced with "Buzz." All numbers divisible by both 3 and 5 will
                            <br />
                            be replaced with "FizzBuzz."
                            <br />
                            Enjoy!
                        </div>
                    </>
                }</div>
        </div>
    )
}

export default FizzBuzz;