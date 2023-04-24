import React from 'react';
import styled from 'styled-components';
// import Workcard from './Workcard';
import Gallerycard from './Gallerycard';

const Section = styled.div`
  height:100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media only screen and (max-width:1028px) {
    align-items:center;
   
  }
`;


function Gallery() {
  return (<section id="gallery">
    <Section>
<div><h1 style={{marginTop:"100px"}}>Gallery</h1></div>
<div className='container workcontainer' style={{margin:"20px auto"}} >
<Gallerycard title={"Electrical"} src={"../images/work4.jpg"} para={"high voltage & low voltage systems that distributes power where is needed, safely andreliably, while providing optimal protection for personnel and equipment."}/>
<Gallerycard title={"PLUMBING"} src={"../images/pluming.jpg"} para={"MPR POWER TECH, Works puts lots of emphasis to ensure that every plumbing system installed isequipped Well sized and securely connected pipes, drainsfittings, values with valve assemblies and devices for theproper distribution of water."}/>
<Gallerycard title={"Mechanical"} src={"../images/mech2.jpg"} para={"Works strives to install systems with the perfect quality-cost balance that successfully provides superior air quality while incurring lowenergy costsand allowing easy maintenance."}/>
<Gallerycard title={"FIRE FIGHTING"} src={"../images/transformer-4.jpg"} para={"The reliable protection systems we install have one mainpurpose which is to prevent the interruption of services necessary for the public welfare and avoid area wide."}/>
<Gallerycard title={"FACILITY MANAGEMENT"} src={"../images/transformer1.jpg"} para={"We ensures the functionality, comfort, safety, sustainability and efficiency of the built environment - the buildings we live and work in and their surrounding infrastructure."}/>
<Gallerycard title={"BULIDING MAINTENANCE SERVICE"} src={"../images/panel1.jpg"} para={"The 6 different types are; Predetermined Maintenance, Preventive Maintenance, Corrective Maintenance, Condition-based Maintenance, Predictive Maintenance and Reactive Maintenance."}/>

     
     </div>  
</Section>
</section>


  )
}

export default Gallery;