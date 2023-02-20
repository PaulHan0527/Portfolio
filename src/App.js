// react, mui
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "./fonts/JerseyM54.ttf";

// Components
import Home from './Components/Contents/Home/Home';
import Projects from './Components/Contents/Projects/Projects';
import Timelines from './Components/Contents/Timeline/Timelines';
import About from './Components/Contents/About/About';
import Header from './Components/Header/Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className='header-container'>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/timeline' element={<Timelines/>}/>
        </Routes>
        <div className='footer-container'>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// css = cascade styling sheets
