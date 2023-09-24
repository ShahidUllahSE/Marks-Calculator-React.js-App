import React from 'react'



export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.maboutode}  `}>
  <a className="navbar-brand" href="#">Marks Converter</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      
     
    </ul>
    <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>

  
</div>
   
  </div>
</nav>
    </div>
  )
}
