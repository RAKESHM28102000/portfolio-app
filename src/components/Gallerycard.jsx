import React from 'react'

function Gallerycard(props) {
  return (
    <div className="card gallerycard">
    <div className="card-header"><h3>{props.title}</h3></div>
     <div className="card-body">
     <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src={props.src} alt='img' width="200px" height="200px"></img></div>
     <p>{props.para}</p>
         </div>
 </div>
  )
}

export default Gallerycard;