import logo from './logo.svg';
import './App.css';
import CartPage from '../src/pages/CartPage/CartPage';
import {Home} from './pages/Home/Home';
import { useColorMode,Button } from '@chakra-ui/react'
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer'
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="App">
      {/* <CartPage/> */}
      {/* <Button size='sm' onClick={toggleColorMode}>
        Toggle Mode
      </Button> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
