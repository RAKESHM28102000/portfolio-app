import React from "react";
import styled from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1028px) {
    height:140vh;
  }
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:15px;
  @media only screen and (max-width: 1028px) {
    width: 100%;
    height:100%;
    flex-direction: column;
  }
`; 
const Works = () => {
  return (<section id="work">
 <Section>
   <Container>
      <h1>Our Parteners & Clients</h1>
      <div className="container" width="100%" height="80%">
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/wp1993623.jpg" className="d-block w-100"  height="400px" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/wp1993623.jpg" className="d-block w-100" height="400px" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"  style={{height:"100px",width:"100px"}}></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"  style={{height:"100px",width:"100px"}}></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
      
    </Container>
</Section>
    </section>
  );
};

export default Works;
 