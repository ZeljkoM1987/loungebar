import { useEffect } from "react";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { HeroOther } from "../components/HeroOther";
import GalImg from "/201.jpg";
import { Images } from "../components/Images.jsx";
import { slides } from "../components/data.jsx"

export const Gallery = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

      const [index, setIndex] = useState(-1);
      return (
        <>
    
    
          <HeroOther
            heroImg={GalImg}
            title="Galerija" />
    
          
    
        
    
          <Images data={slides} onClick={(currentIndex) => { setIndex(currentIndex)}} />
          <Lightbox
          index={index}
            open={index>=0}
            close={() => setIndex(-1)}
            slides={slides}
          />
        </>
      );
    } 
