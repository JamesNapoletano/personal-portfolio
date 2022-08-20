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
import Bio from './Routes/Bio';
import Projects from './Routes/Projects';
import Problems from './Routes/Problems';
import Contact from './Routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <div className='flex'>
        <NavBar />
        <div className='contentStroke'>
          <div className='contentBase'>
            <div className='innerContent'>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/bio' element={<Bio />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/problems' element={<Problems />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
