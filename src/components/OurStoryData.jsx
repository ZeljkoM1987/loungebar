import "./OurStoryStyles.css";
import React from "react";


export const OurStoryData = (props) => {
    return (
        
    
         <div className={props.destclass}>
          <div className="story-text">
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