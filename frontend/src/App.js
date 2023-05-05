import logo from './logo.svg';
import './App.css';

import Product from './Pages/Product';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
    <Product/>
      <CartPage/>
    </div>
  );
}

export default App;
