import React from 'react'
import "./Imagesstyle.css";

export const Images = ({ data, onClick }) => {



  const handleClickImage = (index) => {
    onClick(index)
  }



  return (
<>

<div className="intro-text">
        <h2>
        Mali dio naše ponude možete pogledati na fotografijama iz galerije.
        </h2>
      </div>


    
    <div className="images-container">
      {
        data.map((slide, index) => (

          <div
            onClick={() => handleClickImage(index)}
            key={index} className='image-gallery'>
            <img src={slide.src} alt={slide.desc} />

          </div>
        ))
      }
    </div>

    </>
  )
}
