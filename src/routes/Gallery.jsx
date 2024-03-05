import { Navbar } from "../components/Navbar";
import { GalleryItems } from "../components/GalleryItems";
import { TripData } from "../components/TripData";

export const Gallery = () => { return (
        <>      
           
            <div className="gallery-container">
                {GalleryItems.map((item, key) => 
                
                <TripData
                    key={key}
                    image={item.url}
                    heading={item.title}
                    text={item.text} 
                />)}

                </div>
        </>
    )
} 