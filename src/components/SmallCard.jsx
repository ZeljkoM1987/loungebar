import "./SmallCardStyle.css";
import React from "react";
import ImgStory5 from "../../public/60.jpg";


 
export const SmallCard = () => {

    return (
<>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={ImgStory5} alt="Avatar"/>
    </div>
    <div className="flip-card-back">
      
      <p> Organizacija poslovnih večera, rođendana i ostalih vama dragih događaja.</p>
      
    </div>
  </div>
</div>

</>

    )
}