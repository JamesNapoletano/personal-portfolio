import { Link, Outlet, useLocation } from "react-router-dom";



export default function Problems() {
    const { pathname } = useLocation();
    return (
        <div>
            <nav>
                <Link to='fizzbuzz'>FizzBuzz</Link>
                <Link to='wordpalindrome'>Word Palindrome</Link>
                <Link to='numberpalindrome'>Number Palindrome</Link>
                <Link to='twosum'>Two Sum</Link>
            </nav>
            {pathname === '/personal-portfolio/problems' ? 'Solved Problems' : <Outlet />}
        </div>
    )
}