import { Navbar } from "../components/Navbar";
import {Hero} from '../components/Hero';
import ContactImg from '../../assets/18.jpg';
import { Parallax } from "react-parallax";

export const Contact = () => {

    return (
      <>
      
      
         
        {/*<Hero
         cName= "heromid"
         heroImg= {ContactImg}
         title = "Contact"
        
         btnClass="hide"/>*/} 
         <Parallax strength={600} bgImage={ContactImg}  >
          <div className="co"></div>
         
         </Parallax>
         <div className="test">
          <h2>dsadsadadsadsadsacsaxnsakxja</h2>

         </div>


        
        <Navbar />
      </>
    )
}
