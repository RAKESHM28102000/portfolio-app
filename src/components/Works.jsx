import React from "react";
import styled from "styled-components";
import Gallerycard from "./Gallerycard";
const Section = styled.div`
  height:100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1028px) {
    height:100%;
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
      <div className="container-fluid">
      <div id="carouselExample" className="carousel slide" data-ride="false" data-interval="none" data-pause="hover">
        <div className="carousel-inner container-fluid" style={{padding:"25px",backgroundColor:"black"}}>
          <div className="carousel-item active">
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h2> “Make yourself a priority. Fill yourself up so that you can give more to others.” .</h2>
              <img className="img-in-coursal" src="./images/wp1993623.jpg" width="70px" height="90px" alt="myimg"/>
              <strong> RAKESH M B.E. </strong> 
              <em>“Opportunities don’t happen, you create them.”</em>
              </div>
          </div> 
          <div className="carousel-item">
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h2> “Make yourself a priority. Fill yourself up so that you can give more to others.” .</h2>
              <img className="img-in-coursal" src="./images/wp1993623.jpg" width="70px" height="90px" alt="myimg"/>
              <strong> RAKESH M B.E. </strong> 
              <em>“Opportunities don’t happen, you create them.”</em>
              </div>
          </div>
          <div className="carousel-item">
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h2> “Make yourself a priority. Fill yourself up so that you can give more to others.” .</h2>
              <img className="img-in-coursal" src="./images/wp1993623.jpg" width="70px" height="90px" alt="myimg"/>
              <strong> RAKESH M B.E. </strong> 
              <em>“Opportunities don’t happen, you create them.”</em>
              </div>
          </div>
          <div className="carousel-item">
             <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <h2> “Make yourself a priority. Fill yourself up so that you can give more to others.” .</h2>
              <img className="img-in-coursal" src="./images/wp1993623.jpg" width="70px" height="90px" alt="myimg"/>
              <strong> RAKESH M B.E. </strong> 
              <em>“Opportunities don’t happen, you create them.”</em>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{height:"70px",width:"70px",color:"rgb(3, 77, 3)"}} aria-hidden="true"></span>
          <span className="visually-hidden" >Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" style={{height:"70px",width:"70px",color:"rgb(3, 77, 3)"}} aria-hidden="true"></span>
          <span className="visually-hidden" >Next</span>
        </button>
  
      </div>
  </div>
  <div><h1 style={{marginTop:"100px"}}>Services</h1></div>
<div className='container workcontainer' style={{margin:"20px auto"}} >
<Gallerycard title={"Electrical"} src={"../images/work2.jpg"} para={"high voltage & low voltage systems that distributes power where is needed, safely andreliably, while providing optimal protection for personnel and equipment."}/>
<Gallerycard title={"PLUMBING"} src={"../images/pluming.jpg"} para={"MPR POWER TECH, Works puts lots of emphasis to ensure that every plumbing system installed isequipped Well sized and securely connected pipes, drainsfittings, values with valve assemblies and devices for theproper distribution of water."}/>
<Gallerycard title={"Mechanical"} src={"../images/mechanical.jpg"} para={"Works strives to install systems with the perfect quality-cost balance that successfully provides superior air quality while incurring lowenergy costsand allowing easy maintenance."}/>
<Gallerycard title={"FIRE FIGHTING"} src={"../images/firealarm.jpg"} para={"The reliable protection systems we install have one mainpurpose which is to prevent the interruption of services necessary for the public welfare and avoid area wide."}/>
<Gallerycard title={"FACILITY MANAGEMENT"} src={"../images/work2.jpg"} para={"We ensures the functionality, comfort, safety, sustainability and efficiency of the built environment - the buildings we live and work in and their surrounding infrastructure."}/>
<Gallerycard title={"BULIDING MAINTENANCE SERVICE"} src={"../images/transformer1.jpg"} para={"The 6 different types are; Predetermined Maintenance, Preventive Maintenance, Corrective Maintenance, Condition-based Maintenance, Predictive Maintenance and Reactive Maintenance."}/>

     
     </div>  

    </Container>
</Section>
    </section>
  );
};

export default Works;
 