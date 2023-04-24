import React from "react";
import { NavLink } from "react-router-dom";
// import "../node_modules/jquery/dist/jquery.min.js"; 
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


function Navbar() {
  return (
    <nav style={{backgroundColor:"darkgray"}} className="navbar navbar-expand-lg  bg-primay fixed-top" data-bs-theme="dark">
    <div className="container-fluid">
      <div><img src="./images/mpr (3).png" alt="Logo"  className="d-inline-block align-text-top navbarBrandimage"/> </div>

        <div className="navbarbrand navbrandclass">
             <div> <NavLink className="navbar-brand" to="/contact">MPR-P-TECH</NavLink></div>
        </div>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/work">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/project">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
          {/* <div> <img src="./img/startup.png" alt="Logo" width="30px" height="30px" className="d-inline-block align-text-top navbarBrandimage"/> </div> */}
        <button className="btn btn-outline-secondary navbarbutton" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  </nav>
 
  )
}

export default Navbar;

