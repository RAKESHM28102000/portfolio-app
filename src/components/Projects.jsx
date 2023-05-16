import React from 'react';
import styled from 'styled-components';
import Workcard from './Workcard';

const Section = styled.div`
  height:140vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items:center;
  ${'' /* justify-content:center; */}
  @media only screen and (max-width:1028px) {
    height:100%;
    align-items:center;
   
  }
`;

function Projects() {
  return (<section id="project">
<Section>
<div><h1 style={{marginTop:"100px"}}>PROJECTS</h1></div>
<div className='container workcontainer'>
<Workcard title={"GET"} content={"more than 15+years of working experiance"}/>
<Workcard title={"Madura Electricals"} content={"more than 10+years of experiance"}/>
<Workcard title={"Siva Engergy pvt ltd"} content={"more than 5+years of working experiance"}/>
<Workcard title={"others projects"} content={"more than 25+years of working experiance"}/>
     
     </div>  
</Section>


</section>
   
  )
}

export default Projects;