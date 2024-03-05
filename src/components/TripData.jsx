import "./TripStyless.css"
import React from "react"

export const TripData = ({image, heading, text }) => {

return (
<div className="t-card">
<div className="t-image">
<img src={image} alt="image" />
</div>


<h4>{heading}</h4>
<p>{text}</p>

</div>
    )
}