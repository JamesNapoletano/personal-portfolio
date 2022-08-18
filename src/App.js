import './App.css';
import ContentBox from './Components/ContentBox/ContentBox';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ContentBox />
      <Footer />
    </div>
  );
}

export default App;
