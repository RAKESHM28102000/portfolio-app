import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Section = styled.div`
  height:50vh;
  background:white;
  scroll-snap-align: center;
  @media only screen and (max-width: 1028px) {
   height:100%;
  }
`;

function Footer() {
  return (<section>
    <Section>
    <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <p className="text-body-secondary">© MprPoweTech 2023  </p>
    </div>
    <div className="col mb-3">
      <h5 style={{color:"black"}}>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2" style={{color:"black"}}>+91-9994202384-OWNER</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-9952841105-MANAGER</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-8248010849-MEP</li>
        <li className="nav-item mb-2" style={{color:"black"}}>+91-6383627745-DC</li>

        </ul>
    </div>

   

    <div className="col mb-3">
      <h5 style={{color:"black"}}>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><NavLink className="nav-link new " to="/" >Home</NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link new" to="/about" >About</NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link new" to="/work" >Works</NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link new" to="/project" >Projects</NavLink></li>
        <li className="nav-item mb-2"><NavLink className="nav-link" to="/contact" >Contact</NavLink></li>
      </ul>
    </div>
    <div className="col mb-3">
      <h5 style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg> ADDRESS</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2" style={{color:"black"}}>NO.37 MAIYUR,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>Indira Nagar 2nd Street,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>Chengalpattu-603111,</li>
        <li className="nav-item mb-2" style={{color:"black"}}>TamilNadu,India.</li>

              </ul>
    </div>

  </footer>
</div>
    </Section>
  </section>
    
  )
}

export default Footer