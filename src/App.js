import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import styled from 'styled-components';
import Works from './components/Works';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
${'' /* background-color:#00fff2;
background-image: url("https://www.transparenttextures.com/patterns/escheresque-dark.png"); */}
background-color:#d60700;
background-image: url("https://www.transparenttextures.com/patterns/brick-wall-dark.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
&::-webkit-scrollbar{
    display: none;
  }
`;
function App() {
  return (
  <Router>
     <Navbar/>
      <Container>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/work' element={<Works/>}/>
         <Route path='/project' element={<Projects/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Container>    
  </Router>        
  )}
export default App;






