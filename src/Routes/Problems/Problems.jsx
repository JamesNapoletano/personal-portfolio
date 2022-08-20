import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Problems.module.css'



export default function Problems() {

    const { pathname } = useLocation();

    const fizzBuzz = (
        <Link
            to={pathname !== '/personal-portfolio/problems/fizzbuzz' ? 'fizzbuzz' : ''}
            className={pathname === '/personal-portfolio/problems/fizzbuzz' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            FizzBuzz
        </Link>
    )
    const wordPalindrome = (
        <Link
            to={pathname !== '/personal-portfolio/problems/wordpalindrome' ? 'wordpalindrome' : ''}
            className={pathname === '/personal-portfolio/problems/wordpalindrome' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Word Palindrome
        </Link>
    )
    const numberPalindrome = (
        <Link
            to={pathname !== '/personal-portfolio/problems/numberpalindrome' ? 'numberpalindrome' : ''}
            className={pathname === '/personal-portfolio/problems/numberpalindrome' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Number Palindrome
        </Link>
    )
    const twoSum = (
        <Link
            to={pathname !== '/personal-portfolio/problems/twosum' ? 'twosum' : ''}
            className={pathname === '/personal-portfolio/problems/twosum' ? styles.probNavBtnSelected : styles.probNavBtn}
        >
            Two Sum
        </Link>
    )

    return (
        <div>
            <nav className={styles.probNav}>
                {fizzBuzz}
                {wordPalindrome}
                {numberPalindrome}
                {twoSum}
            </nav>
            {pathname === '/personal-portfolio/problems' ? <>Solved Problems</> : <Outlet />}
        </div>
    )
}