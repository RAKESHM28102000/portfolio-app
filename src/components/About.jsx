import React from "react";
import styled from "styled-components";
;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items:center;
  @media only screen and (max-width:1028px) {
    height:160vh;
  }
`;
const Container = styled.div`
  height:100%;
  scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  @media only screen and (max-width:1028px) {
    flex-direction:column;
    align-items: center;
    text-align: center;
    height:100%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap:20px;
  @media only screen and (max-width:1028px) {
    align-items: center;
    text-align: center;
  }
`;

const Right = styled.div`
  background-color:white;
  color:black;
  border-radius:10%;
  box-shadow:5px 10px 5px rgba(0,0,0.5);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap:20px;
  @media only screen and (max-width:1028px) {
    margin:10px;
    box-shadow:1px 2px 1px rgba(0,0,0.5);
    justify-content:center;
    align-items: center;
    text-align:Left;
    border-radius:1%;
  
  }
`;
const Title = styled.h1`
  font-size:30px;
  textAlign:center;
  padding:5px 5px;
  @media only screen and (max-width:1028px) {
    font-size:25px;
    margin:5px 2px;
    padding:5px 2px;
  }
`;

const WhatWeDo = styled.div`
   padding:5px 5px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap: 10px;
  @media only screen and (max-width:1028px) {
  gap: 10px;
   
  }
`;

const Subtitle = styled.h2`
   padding:5px 10px;
   font-size:20px;
  @media only screen and (max-width:1028px) {
    font-size:20px;
    margin:5px 2px;
    padding:5px 2px;
  }
`;
const Desc = styled.p`
  padding:5px 10px;
  font-size:20px;
  @media only screen and (max-width:1028px) {
    textAlign:Left;
    font-size:18px;
    padding:5px;
    margin:2px;
   }
`;
const Button = styled.button`
  background-color:black;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width:1028px) {
    font-size:20px;
    width:40%;
    padding:5px 2px;
    margin:5px;
  }
`;

const About = () => {
  return (<section id="about">
    <Section>
      <Container>
        <Left>
           <Title style={{color:"white"}}>More than 25+ years of experiences.</Title>
           <WhatWeDo>
           <img src="../images/lineman.png" alt="logo1" width={200} height={200}/>
             {/* <Subtitle>Peace be amplified,world be rectified.</Subtitle> */}
          </WhatWeDo>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/details/projects/" target="blank">See more</a></Button>
       </Left>
       <Right>
           <Title >We believe in Simple & Creative</Title>
           <WhatWeDo>
              <Subtitle>At MPR POWER TECH, we offer services in the field of power sector testing and commissioning equipped with requisite expertise and technology capabilities. With service ranging from high-end power and industrial equipments and solutions,we undertake contracts with single window responsibility and execute them using state-of-the-art testing equipments and dedicated talent pool with core engineering skills. Our team combined with deep technical skill,rationalize for the mutual success of our clients and employees.
              </Subtitle>
           </WhatWeDo>
           <Desc>
             "Work hard,have fun,make history."
           </Desc>
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default About;