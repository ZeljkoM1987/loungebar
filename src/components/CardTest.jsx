import "./CardTest.css";
import React from "react";



export const CardTest = ({image, title, text}) => {
    return (
        <>
          
    <div className="container-card">  
            <div className="card"  >
            <div className="image-car">
            <img href="#" src= {image}    />
            <h2>{title}</h2>
      </div >
     
        <div className="content" >
          
            <p>{text}</p>
        </div>
    </div >    
  </div >
  
 
      
    </>
  )
}