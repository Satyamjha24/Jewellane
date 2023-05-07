import logo from './logo.svg';
import './App.css';
import CartPage from '../src/pages/CartPage/CartPage';
import {Home} from './pages/Home/Home';
import { useColorMode,Button } from '@chakra-ui/react'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer'
import AllRoutes from './routes/AllRoutes';
import Product from './Pages/Product';
//import CartPage from './Pages/CartPage/CartPage';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      {/* <CartPage/> */}
      {/* <Button size='sm' onClick={toggleColorMode}>
       // Toggle Mode
      </Button> */}
      <Navbar />
      <Home />
      <Footer />
      <AllRoutes/>
      <Product/>
      <CartPage/>
    </div>
  );
}

export default App;
