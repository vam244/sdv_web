import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link   scrollto" href="#contact">Contacts</a></li>
          <li><a className="nav-link scrollto" href="#faq">Faq</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li className="logo me-auto"><a href="index.html">SDV-4.0</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
        
   
      
      </nav>

    </div>
  </header>
  )
}

export default Navbar