import React from "react";

function Workcard(props) {
  return (
             <div className="card">
              <div className="card-header"><h3>{props.title}</h3></div>
               <div className="card-body">
               <p>{props.content}</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactapp2023.onrender.com/" target="blank">Visit Project</a></button>
               </div>
           </div>
    
  )
}

export default Workcard
 