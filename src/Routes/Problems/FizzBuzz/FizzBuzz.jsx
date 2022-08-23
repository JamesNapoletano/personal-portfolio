import React, { useState } from "react";

const FizzBuzz = () => {
    const [inputValue, setInputValue] = useState('')
    const [outputValue, setOutputValue] = useState('')

    const submit = () => {
        if(inputValue < 1000 && inputValue >= 1) {
            fizzBuzzGen(inputValue)
        } else {
            return setOutputValue('Please enter a number between 1 and 999')
        }
    }

    const fizzBuzzGen = (num) => {
        const fBOutput = []
        for (var i = 1; i <= num; i++) {
            if (i % 3 === 0) {
                fBOutput.push('Fizz' + (i % 5 === 0 ? 'Buzz' : ''))
            }
            else if (i % 5 === 0) {
                fBOutput.push('Buzz')
            }
            else {
                fBOutput.push(i.toString())
            }
        }
        setOutputValue(fBOutput.join(', '))
    }

    return (
        <div>
            <h1>
                FizzBuzz
            </h1>
            <input type='number' value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
            <button onClick={submit}>Submit</button>
            <br />
            <p>{outputValue}</p>
        </div>
    )
}

export default FizzBuzz;