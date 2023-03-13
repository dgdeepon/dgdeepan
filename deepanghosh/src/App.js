import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { ChakraProvider, Grid, Img } from '@chakra-ui/react'
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <ChakraProvider>
      <div className="App" style={{backgroundColor:'#13005A'}}>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
    </div>
    </ChakraProvider>
  );
}

export default App;
