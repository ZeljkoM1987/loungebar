import React from 'react'
import "./Imagesstyle.css";

export const Images = ({ data, onClick }) => {



  const handleClickImage = (index) => {
    onClick(index)
  }



  return (
    <div className="images-container">
      {
        data.map((slide, index) => (

          <div
            onClick={() => handleClickImage(index)}
            key={index} className='image'>
            <img src={slide.src} alt={slide.desc} />

          </div>
        ))
      }
    </div>
  )
}
