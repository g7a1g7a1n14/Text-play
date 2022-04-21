import React from 'react'
import Navbar from "./Navbar";
import Form from './Form';
import {useState} from 'react'
const App = () => {
  const [mode,setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = '#131516';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title ="TEXT ANALYZER " mode = {mode} toggleMode = {toggleMode}/>
      <Form heading = "Enter Your Text To Analyze" mode = {mode}/>
      {/* <About /> */}
    </>
  )
}

export default App