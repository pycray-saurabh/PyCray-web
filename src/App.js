import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SharedLayout from "./pages/SharedLayout"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
