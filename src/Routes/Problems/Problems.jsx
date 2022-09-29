import { useEffect } from "react";
import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Problems.module.css'
import { AccentColorContext } from '../../context/accent-color-context'



export default function Problems() {
    const { pathname } = useLocation();
    const { updateAccentColor } = useContext(AccentColorContext)

    const fizzBuzz = (
        <Link
            to={pathname !== '/problems/fizzbuzz' ? 'fizzbuzz' : ''}
            className={pathname === '/problems/fizzbuzz' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            FizzBuzz
        </Link>
    )
    const wordPalindrome = (
        <Link
            to={pathname !== '/problems/wordpalindrome' ? 'wordpalindrome' : ''}
            className={pathname === '/problems/wordpalindrome' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Word Palindrome
        </Link>
    )
    const numberPalindrome = (
        <Link
            to={pathname !== '/problems/numberpalindrome' ? 'numberpalindrome' : ''}
            className={pathname === '/problems/numberpalindrome' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Number Palindrome
        </Link>
    )
    const twoSum = (
        <Link
            to={pathname !== '/problems/twosum' ? 'twosum' : ''}
            className={pathname === '/problems/twosum' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Two Sum
        </Link>
    )

    useEffect(() => {
        updateAccentColor('purple')
    }, [])

    return (
        <>
            <h1>
                Solved Problems
            </h1>
            <nav className={styles.probNav}>
                {fizzBuzz}
                {wordPalindrome}
                {numberPalindrome}
                {twoSum}
            </nav>
            {pathname === '/problems' ?
                <>
                    <h2>
                        Solved Problems
                    </h2>
                    <div className={styles.contentBox}>
                        Here we have a number of solved coding problems. A coding problem
                        will typically provide you with a scope describing desired input(s) and
                        desired output(s). Above, are four solved coding problems. Go to each
                        problem and participate in the fun!
                    </div>
                </> :
                <Outlet />}
        </>
    )
}