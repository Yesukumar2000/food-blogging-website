import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs/>
      <Articles/>
      <Footer/>
      
    </div>
  );
}

export default App;
