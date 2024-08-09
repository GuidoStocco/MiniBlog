import './App.css';

//
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//  Pages
import About from './pages/About/About';
import Home from './pages/home/Home';

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
