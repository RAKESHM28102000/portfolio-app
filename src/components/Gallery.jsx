import React from 'react';
import styled from 'styled-components';
import Workcard from './Workcard';
import Gallerycard from './Gallerycard';

const Section = styled.div`
  height:100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media only screen and (max-width:1028px) {
    height:100%;
    align-items:center;
   
  }
`;


function Gallery() {
  return (
    <Section>
<div><h1 style={{marginTop:"100px"}}>Gallery</h1></div>
<div className='container workcontainer'>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>
<Gallerycard title={"transformer installation"} src={"../images/mpr (4).png"}/>

     
     </div>  
</Section>


  )
}

export default Gallery;