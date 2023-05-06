import React from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
// import Navbar from "./Navbar";


const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width:1028px) {
    height:100%;
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content:center;
  textAlign:center;
  marginTop:100px;
  @media only screen and (max-width:1028px) {
    marginTop:150px;
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
    justifyContent:center;
  }
`;

const Title = styled.h1`
  font-size:50px;
  padding:10px;
  @media only screen and (max-width:1028px) {
    text-align: center;
    font-size:30px;
    padding:5px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justifyContent:center;
  gap:7px;
  padding:5px;
  textAlign:center;
`;
const Subtitle = styled.h2`
    padding:5px;
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
  padding:10px;
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
  margin-top:10px;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  gap:15px;
  border-radius:1%;
  textAlign:center;
  ${'' /* box-shadow:10px 10px 15px rgba(0,0,0,.5),
              inset 4px 4px 10px  rgba(0,0,0,.5); */}
  @media only screen and (max-width:1028px) {
   display:none;
  }
`;



const Home = () => {
  return (<section id="home">
    <Section>
      {/* <Navbar /> */}
      <Container style={{marginTop:"100px"}}>
        <Left>
          <Title >MPR POWER TECH</Title>
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
        <img src="./images/energy (1).png" alt="logo1" width={180} height={180}/>
        <Desc>
            We step up, We Transform.
        </Desc>
        <img src="./images/energy.png" alt="logo1" width={180} height={180}/>
        </Right>
      </Container>
    </Section>
    <About/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </section>
   
  );
};

export default Home;

