// react, mui
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


// Components
import Home from './Components/Contents/Home/Home';
import Projects from './Components/Contents/Projects/Projects';
import Timeline from './Components/Contents/Timeline/Timeline';
import About from './Components/Contents/About/About';
import Header from './Components/Header/Header';
import ButtonGroup from './Components/Header/ButtonGroup';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <div className='header-container'>
          <Header/>
          <div className='spacer'></div>
          <ButtonGroup/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/timeline' element={<Timeline/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// css = cascade styling sheets
