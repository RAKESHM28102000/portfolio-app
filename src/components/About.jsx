import React from "react";
import styled from "styled-components";
import Gallerycard from "./Gallerycard";
;

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  @media only screen and (max-width:1028px) {
    height:100%;
  }
`;

const Container = styled.div`
 scroll-snap-align: center;
  width:1100px;
  display: flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  @media only screen and (max-width:1028px) {
    marginTop:100px;
    width:auto;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    }
`;
const Aboutsection = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  @media only screen and (max-width:1028px) {
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items:center;
  @media only screen and (max-width:1028px) {
    text-align:Left;
  
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
  align-items:center;
  justify-content:center;
  gap: 10px;
  @media only screen and (max-width:1028px) {
  display: flex;
  align-items:center;
  justify-content:center;
   
  }
`;

// const Subtitle = styled.h2`
//    padding:5px 10px;
//    font-size:20px;
//   @media only screen and (max-width:1028px) {
//     font-size:20px;
//     margin:5px 2px;
//     padding:5px 2px;
//   }
// `;
// const Desc = styled.p`
//   padding:5px 10px;
//   font-size:20px;
//   @media only screen and (max-width:1028px) {
//     textAlign:Left;
//     font-size:18px;
//     padding:5px;
//     margin:2px;
//    }
// `;
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
            <Title style={{color:"white",marginTop:"100px"}}>ABOUT</Title>
            <Title style={{color:"white"}}>More than 25+ years of experiences.</Title>
           <WhatWeDo>
           <img src="../images/lineman.png" alt="logo1" width={200} height={200}/>
             {/* <Subtitle>Peace be amplified,world be rectified.</Subtitle> */}
          </WhatWeDo>
          <Button><a href="https://www.linkedin.com/in/rakesh-m-b67121217/details/projects/" target="blank">See more</a></Button>
       </Left>
       <Right>
          <div width="80%" style={{display:"flex",margin:"10px",borderRadius:"2%",flexDirection:"column",boxShadow:"5px 10px 5px rgba(0,0,0,.5)",backgroundColor:"white",color:"black",justifyContent:"center",alignContent:"center"}}>
           <h1 style={{fontSize:"25px",padding:"5px"}}>We believe in Simple & Creative</h1>
           <div>
              <p style={{fontSize:"18px",padding:"10px"}}>At MPR POWER TECH, we offer services in the field of power sector testing and commissioning equipped with requisite expertise and technology capabilities. With service ranging from high-end power and industrial equipments and solutions,we undertake contracts with single window responsibility and execute them using state-of-the-art testing equipments and dedicated talent pool with core engineering skills. Our team combined with deep technical skill,rationalize for the mutual success of our clients and employees.
              </p>
           </div>
           <h2 style={{fontSize:"25px",padding:"5px"}}>
             "Work hard,have fun,make history."
           </h2>
           </div>
        </Right>
      </Container>
    </Section>
    <Aboutsection>
    <div style={{margin:"50px 0 50px 0" ,display:"flex",alignItems:"center",justifyContent:"center"}}><h1 style={{marginTop:"10px"}}>Our Works</h1></div>
      <div className='container workcontainer'>
        <Gallerycard title={"High voltage"} src={"https://futuremaxengg.com/img/content/ind/el09.jpg"} para={"MPR POWER TECH engineering , high voltage & low voltage systems that distributes power where is needed, safely andreliably, while providing optimal protection for personnel and equipment."}/>
        <Gallerycard title={"Plumbing"} src={"https://futuremaxengg.com/img/content/ind/el07.jpg"} para={"Works puts lots of emphasis to ensure that every plumbing system installed isequipped Well sized and securely connected pipes, drainsfittings, values with valve assemblies and devices for theproper distribution of water."}/>
        <Gallerycard title={"MECHANICAL"} src={"https://futuremaxengg.com/img/content/ind/hg.jpg"} para={"We install, maintain and repair climate-control systems in homes, schools, hospital, factories, offices, laboratories thermal comfort and maintaining good indoor air quality areour main purpose."}/>
      </div>  
  </Aboutsection>
</section>
  );
};

export default About;