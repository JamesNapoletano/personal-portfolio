# personal-portfolio

Deployed Link: [https://jnap-personal-portfolio.netlify.app/](https://jnap-personal-portfolio.netlify.app/)

This project is a basic portfolio for displaying my works with programming. It will likely remain in development for a long time, as I would like to maintain this project.

## Nav Bar

At the top of the site you can find a navigation bar that will change states based on the page accessed.
this is achieved using `accent-color-context.jsx`

## Home

The Home page is just a simple welcoming to anybody who happens to run accross this portfolio.

## Bio

The Bio page is another simple display that features information about me and my life.
**Note: This page is still under development and requires a population of content to fill the placeholders.**

## Projects

The Projects page displays a list of my GitHub repositories as well as a number of web games that I am currently working on.
**Note: This page will eventually receive a `Web Apps` list.**

### GitHub Repos

This is a list of my GitHub repo links that is called in using `axios`.

### Web Games

#### Nuclear Reactor

Nuclear Reactor is a sequence-based game that simulates the start-up and shut-down of a nuclear reactor. The game replies with messages regarding you in-game choices.
**Note: This project is still under development. You can currently play the game until you reach stage 3.**

#### Stimulation Game

Stimulation Game is a puzzle-style game where you figure out the method for unlocking certain buttons. As these buttons are activated they may join into one. This can be continued until there is only a single button remaining. At this point you may win.
**Note: This project is still under development. The buttons function but there are currently no rules added to make the game difficult.**

## Problems

The Problems page displays a number of code challenge problems that I have solved and adapted to React.
**Note: More solved challenges may be added in the future.**

#### FizzBuzz

FizzBuzz is a sequence generator that will return all numbers up to a specified limit. All numbers that are divisible by 3 will be replaced with `Fizz` while all numbers divisible by 5 will be replaced with `Buzz.` All numbers that are divisible by both 3 and 5 will be replaced with `FizzBuzz`.

#### Word Palindrome

Word Palindrome will verify if a word input is spelled the same as its mirrored self. etc. Racecar

#### Number Palindrome

Number Palindrome will verify if a number holds the same value if its characters are reversed. etc. 121

#### TwoSum

TwoSum will take 2-4 check values and a target value. With these values, the function will return to you which of the two check numbers add up to the target number. If there is no solution, TwoSum will let you know.

## Contact

The Contact page is a simple ID card including information about myself.

## Footer

At the bottom of the site you will find the `Footer` component. This component follows the same styling context as the `NavBar` and also contains links to the five main pages. On the left side of the footer you will see a path name referencing your current location on my site's route.