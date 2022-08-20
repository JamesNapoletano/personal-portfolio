import { Link, Outlet, useLocation } from "react-router-dom";



export default function Problems() {

    const { pathname } = useLocation();

    const fizzBuzz = (
        <Link
            to={pathname !== '/personal-portfolio/problems/fizzbuzz' ? 'fizzbuzz' : ''}
        >
            FizzBuzz
        </Link>
    )
    const wordPalindrome = (
        <Link
            to={pathname !== '/personal-portfolio/problems/wordpalindrome' ? 'wordpalindrome' : ''}
        >
            Word Palindrome
        </Link>
    )
    const numberPalindrome = (
        <Link
            to={pathname !== '/personal-portfolio/problems/numberpalindrome' ? 'numberpalindrome' : ''}
        >
            Number Palindrome
        </Link>
    )
    const twoSum = (
        <Link
            to={pathname !== '/personal-portfolio/problems/twosum' ? 'twosum' : ''}
        >
            Two Sum
        </Link>
    )

    return (
        <div>
            <nav>
                {fizzBuzz}
                {wordPalindrome}
                {numberPalindrome}
                {twoSum}
            </nav>
            {pathname === '/personal-portfolio/problems' ? <>Solved Problems</> : <Outlet />}
        </div>
    )
}