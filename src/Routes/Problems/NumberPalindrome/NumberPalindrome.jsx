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
            <h1>
                Number Palindrome
            </h1>
            <input type='number' value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button onClick={submit}>Submit</button>
            <br />
            <div className={styles.contentBox}>
                {outputValue ? <>
                    <h2>
                        Selected Number: {submittedValue}
                    </h2>
                    <div>
                        {outputValue}
                    </div>
                </> :
                    <>
                        <h2>Welcome to Number Palindrome!</h2>
                        <div>
                            A number palindrome is a number that is equal to itself even if the
                            number is reversed. The problem at-hand is determining if a number is
                            indeed a palindrome or not. This solution will offer palindrome
                            verification for a number of your choice.
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