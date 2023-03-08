import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{backgroundColor:'#13005A'}}>
        <Navbar/>
        <Home/>
        <About/>
    </div>
    </ChakraProvider>
  );
}

export default App;
