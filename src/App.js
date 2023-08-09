import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductGenesis from './pages/ProductGenesis';
import Teams from './pages/Teams';
import Career from './pages/About';
import ContactUs from './pages/ContactUs';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import SharedLayout from "./pages/SharedLayout"
// import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/ProductGenesis" element={<ProductGenesis />}></Route>
        <Route path="/Teams" element={<Teams />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
