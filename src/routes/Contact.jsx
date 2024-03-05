import { Navbar } from "../components/Navbar";
import {Hero} from '../components/Hero';
import ContactImg from '../../assets/18.jpg';

export const Contact = () => {

    return (
      <>
      
      <>
         
         <Hero
         cName= "heromid"
         heroImg= {ContactImg}
         title = "Contact"
        
         btnClass="hide"/>
         
        </>
        <Navbar />
      </>
    )
}
