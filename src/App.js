import './App.css'
import './index.css'
// import img1 from './assets/images/doc1.jfif'
import Navbarr from './components/Nav/Navbarr'
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
function App() {
  return (
    <div className="">
      <Navbarr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
