import React from 'react'
import Navbar from "./Navbar";
import Form from './Form';
import {useState} from 'react'
const App = () => {
  const [mode,setMode] = useState("light");
  const toggleMode = (cls) =>{
    if(cls === 'light'){ 
      setMode('white');
      document.body.style.backgroundColor = 'white';
    }
    if(cls === 'dark'){ 
      setMode('black');
      document.body.style.backgroundColor = 'black';
    }
    if(cls === 'nature'){ 
      setMode('green');
      document.body.style.backgroundColor = 'green';
    }
    if(cls === 'cool'){ 
      setMode('blue');
      document.body.style.backgroundColor = 'blue';
    }
    if(cls === 'space'){ 
      setMode('purple');
      document.body.style.background = 'purple';
    }
  }
  return (
    <>
      <Navbar title ="TEXT PLAY " mode = {mode} toggleMode = {toggleMode}/>
      <Form heading = "Enter Your Text To Analyze" mode = {mode}/>
      {/* <About /> */}
    </>
  )
}

export default App
