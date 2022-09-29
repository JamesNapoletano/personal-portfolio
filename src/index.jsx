import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Bio from './Routes/Bio/Bio';
import Projects from './Routes/Projects/Projects';
import NuclearReactor from './Routes/Projects/WebGames/NuclearReactor/NuclearReactor';
import StimulationGame from './Routes/Projects/WebGames/StimulationGame/StimulationGame';
import Problems from './Routes/Problems/Problems';
import FizzBuzz from './Routes/Problems/FizzBuzz/FizzBuzz';
import WordPalindrome from './Routes/Problems/WordPalindrome/WordPalindrome';
import NumberPalindrome from './Routes/Problems/NumberPalindrome/NumberPalindrome';
import TwoSum from './Routes/Problems/TwoSum/TwoSum';
import Contact from './Routes/Contact/Contact';
import { AccentColorContextProvider } from './context/accent-color-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AccentColorContextProvider>
      <BrowserRouter>
        <div className='flexColumn'>
          <NavBar />
          <div className='contentStroke'>
            <div className='contentBase'>
              <div className='innerContent'>
                <Routes>
                  <Route path='/' element={<App />} />
                  <Route path='/bio' element={<Bio />} />
                  <Route path='/projects' element={<Projects />}>
                    <Route path='nuclearreactor' element={<NuclearReactor />} />
                    <Route path='stimulationgame' element={<StimulationGame />} />
                  </Route>
                  <Route path='/problems' element={<Problems />}>
                    <Route path='fizzbuzz' element={<FizzBuzz />} />
                    <Route path='wordpalindrome' element={<WordPalindrome />} />
                    <Route path='numberpalindrome' element={<NumberPalindrome />} />
                    <Route path='twosum' element={<TwoSum />} />
                  </Route>
                  <Route path='/contact' element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AccentColorContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
