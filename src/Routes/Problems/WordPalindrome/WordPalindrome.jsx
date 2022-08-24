import styles from './WordPalindrome.module.css'
import { useEffect, useState } from "react";

const WordPalindrome = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')
    const [submittedValue, setSubmittedValue] = useState('')

    useEffect(() => {
        if (inputValue === '') {
            setOutputValue('')
        }
    }, [inputValue])

    const submit = () => {
        if (inputValue) {
            setSubmittedValue(inputValue)
            isPalindrome(inputValue)
        } else {
            setOutputValue('')
        }
    }

    const isLetter = (char) => {
        const letters = /(^[a-zA-Z]+$)/;
        if (char.match(letters) || char === '') {
            setInputValue(char)
        }
    }

    const isPalindrome = (word) => {
        word.toLowerCase() === word.toLowerCase().split('').reverse().join('') ?
            setOutputValue('is a word palindrome.') :
            setOutputValue('is not a Palindrome')
    }

    return (
        <div>
            <h1>
                Word Palindrome
            </h1>
            <input type='text' value={inputValue} onChange={(e) => { isLetter(e.target.value) }} />
            <button onClick={submit}>Submit</button>
            <br />
            <div className={styles.contentBox}>
                {outputValue ?
                    <>
                        <h2>
                            Selected Word: {submittedValue}
                        </h2>
                        <div>
                            {outputValue}
                        </div>
                    </> :
                    <>
                        <h2>Welcome to Word Palindrome!</h2>
                        <div>
                            A word palindrome is a word that is spelled the same as its reversed
                            form. This is a verification for if a word is indeed a palindrome or not.
                            Please input a word and click the Submit button.
                            <br />
                            Enjoy!
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default WordPalindrome