import React from 'react'
import './style.css'
const Navbar = (props) => {
  return (
    <div>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} mode</label>
          </div>
        </div>
      </nav> */}
      <div className="header">
        <div className='top-heading'><b>{props.title}</b></div>
      </div>
      <div className="theme">
        <div className="dark feature" onClick={() => {props.toggleMode("dark")}}>DARK</div>
        <div className="light" onClick={() => {props.toggleMode("light")}}>LIGHT</div>
        <div className="nature feature" onClick={() => {props.toggleMode("nature")}}>NATURE</div>
        <div className="cool feature" onClick={() => {props.toggleMode("cool")}}>KOOL</div>
        <div className="space feature" onClick={() => {props.toggleMode("space")}}>CHEER</div>
      </div>
    </div>
  )
}

export default Navbar
