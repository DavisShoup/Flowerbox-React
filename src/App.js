import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Header/>
    <Products/>
    <Footer/>
    </div>
  );
}

export default App;
