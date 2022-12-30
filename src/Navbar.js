import React from 'react'
import Proptypes from 'prop-types'

// this is how we are going to use props here
export default function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
         <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" onClick={props.setmymode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={"form-check-label"} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} mode</label>
          </div>

      </div>
    </div>
  </nav>
  
  )
}

// set your desired prop...types with this method
Navbar.propTypes = {  title: String.Proptypes,
                      home: String.Proptypes,
                      // string.Proptypes.isRequrired --> it will make the compulsion of title
              
}

// set your default Props with this method
Navbar.defaultProps= {
    title: "Text-Manipulator ",
    home: "Home"
}