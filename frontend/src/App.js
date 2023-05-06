import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';

import Product from './Pages/Product';
import CartPage from './Pages/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
    <Product/>
      <CartPage/>
    </div>
  );
}

export default App;
