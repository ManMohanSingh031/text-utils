import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
return (
  <>
    {/* <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/"element={<TextForm heading="Enter the text to analyze below:" mode={mode}/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
)}; */}
      <Navbar title="TextUtils"mode={mode} toggleMode={toggleMode} />
      <div className="container my-4" mode={mode}>
          < TextForm heading="Enter the text to analyze below:" mode={mode}/>
      </div>
  </>
)};
export default App;