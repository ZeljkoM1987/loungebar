import "./DestinationStyless.css";
import React from "react";


export const DestinationData = (props) => {
    return (
        
    
         <div className={props.destclass}>
          <div className="des-text">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          </div>
          <div className="image">
  <img src={props.Img1} alt="img" />
  <img src={props.Img2} alt="img" />
  
          </div>
  
        </div>
    
    
    )
  }
  
  