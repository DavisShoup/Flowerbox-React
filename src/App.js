import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Products from './components/Products';
import Footer from './components/Footer';
import productArr from './productData.js'

function App() {
  const product = productArr.map((elem, index) => {
    return(
      <Products {...elem} key={index}/>
    );
  });
  return (
    <div className="App">
    <Nav />
    <Header />
    {product}
    <Footer />
    </div>
  );
}

export default App;
