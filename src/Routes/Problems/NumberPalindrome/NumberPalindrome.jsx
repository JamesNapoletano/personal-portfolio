import { useEffect, useState } from "react";
import styles from './NumberPalindrome.module.css'

const NumberPalindrome = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')

    useEffect(() => {
        if (inputValue === '') {
            setOutputValue('')
        }
    }, [inputValue])

    const submit = () => {
        if (inputValue >= 0) {
            setSubmittedValue(inputValue)
            isPalindrome(inputValue)
        } else if (inputValue < 0) {
            setSubmittedValue(inputValue)
            isNegPalindrome(inputValue)
        } else {
            setOutputValue('')
        }
    }

    const isPalindrome = (x) => {
        if (x.toString() === x.toString().split('').reverse().join('')) {
            setOutputValue('is a number palindrome')
        } else {
            setOutputValue('is not a number palindrome.')
        }
    }

    const isNegPalindrome = (x) => {
        let negX = x.toString().split('').map(i => {
            return i
        })

        negX.shift()

        if (negX.join('') === negX.reverse().join('')) {
            setOutputValue('is a number palindrome')
        } else {
            setOutputValue('is not a number palindrome.')
        }
    }

    return (
        <div>
            <h2>
                Number Palindrome
            </h2>
            <div className={styles.inputFlexRow}>
                <div className={styles.numberPalindromeInput}>
                    <p>
                        Number
                        <br />
                        Input:
                    </p>
                    <input type='number' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
            <div className={styles.contentBox}>
                {outputValue ? <>
                    <h3>
                        Selected Number: {submittedValue}
                    </h3>
                    <div>
                        {outputValue}
                    </div>
                </> :
                    <>
                        <h3>
                            Welcome to Number Palindrome!
                        </h3>
                        <div>
                            A number palindrome is a number that is equal to itself even if the
                            number is reversed. The problem at-hand is determining if a number is
                            indeed a palindrome or not. This solution will offer palindrome
                            verification for a number of your choice.
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

export default NumberPalindrome