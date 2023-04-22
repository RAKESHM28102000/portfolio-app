import React from 'react'

function Gallerycard(props) {
  return (
    <div className="card">
    <div className="card-header"><h3>{props.title}</h3></div>
     <div className="card-body">
     <img src={props.src} alt='img' width="200px" height="200px"></img>
         </div>
 </div>
  )
}

export default Gallerycard;