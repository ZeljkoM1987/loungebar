import { useEffect } from "react";

import { GalleryItems } from "../components/GalleryItems";
import { TripData } from "../components/TripData";

export const Gallery = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
      <div className="gallery-container">
        {GalleryItems.map((item, key) => (
          <TripData
            key={key}
            image={item.url}
            heading={item.title}
            text={item.text}
          />
        ))}
      </div>
    </>
  );
};
