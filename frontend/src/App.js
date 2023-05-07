import logo from './logo.svg';
import './App.css';

import Product from './Pages/Product';
import CartPage from './Pages/CartPage/CartPage';
import SingleuserPage from './Pages/SingleuserPage';
import AllRoutes from './routes/AllRoutes';

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
