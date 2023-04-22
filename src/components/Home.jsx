import React from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Works from "./Works";
import Footer from "./Footer";
import Gallery from "./Gallery";
// import Navbar from "./Navbar";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width:1028px) {
    height:140vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content: space-between;
  textAlign:center;
  @media only screen and (max-width:1028px) {
    width: 100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap:10px;
  border-radius:1%;
  textAlign:center;
  box-shadow:10px 10px 15px rgba(0,0,0,.5),
             inset 4px 4px 10px  rgba(0,0,0,.5) ;
  @media only screen and (max-width:1028px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size:50px;
  padding:10px;
  ${'' /* @media only screen and (max-width: 768px) {
    text-align: center;
  } */}
  @media only screen and (max-width:1028px) {
    text-align: center;
    font-size:30px;
    padding:5px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap:7px;
  padding:5px;
  textAlign:center;
`;
const Subtitle = styled.h2`
    padding:10px;
    font-size:20px;
    textAlign:center;
    color:white;
  @media only screen and (max-width:1028px) {
    padding:5px;
    font-size:20px;
    textAlign:center;
  }
`;

const Desc = styled.p`
  font-size:20px;
  color:white;
  padding:20px;
  ${'' /* color: lightgray; */}
  @media only screen and (max-width:1028px) {
    padding:5px;
    font-size:20px;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color:black;
  margin:20px;
  color: white;
  font-weight: 500;
  width: 150px;
  padding:10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    padding:5px;
    font-size:20px;
    text-align: center;
    width:40%;
  }
`;

const Right = styled.div`
  flex:1;
  display: flex;
  margin-top:100px;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap:18px;
  border-radius:1%;
  textAlign:center;
  ${'' /* box-shadow:10px 10px 15px rgba(0,0,0,.5),
              inset 4px 4px 10px  rgba(0,0,0,.5); */}
  @media only screen and (max-width:1028px) {
    flex: 1;
    align-items: center;
  }
`;



const Home = () => {
  return (<section id="home">
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
          <Title>MPR POWER TECH</Title>
          <WhatWeDo>
            {/* <Line src="./img/line.png" /> */}
            <Subtitle>No resistance can drop our potential.</Subtitle>
          </WhatWeDo>
          <Desc>
            We step up, We Transform.
          </Desc>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="blank">Learn More</a></Button>
        </Left>
        <Right>
        <img src="./images/energy (1).png" alt="logo1" width={200} height={200}/>
        <Desc>
            We step up, We Transform.
        </Desc>
        <img src="./images/energy.png" alt="logo1" width={200} height={200}/>
        </Right>
      </Container>
    </Section>
    <About/>
    <Works/>
    <Projects/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </section>
   
  );
};

export default Home;

