import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import About from './About';
import Pizzatypes from './Pizztypes';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <About/>
      <Pizzatypes/>
      <Footer/>
    </div>
  );
}

export default App;
