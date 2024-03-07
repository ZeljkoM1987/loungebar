import { Navbar } from "../components/Navbar";
import {Hero} from '../components/Hero';
import ContactImg from '../../assets/18.jpg';
import { useParallax, Parallax, ParallaxProvider  } from 'react-scroll-parallax';




export const Contact = () => {


    return (
      <>
<Hero
         cName= "heromid"
         heroImg= {ContactImg}
         title = "Contact"
        
         btnClass="hide"/>


<ParallaxProvider>

    <Parallax speed={-100}>
      <div className="slow" >
        <img src={ContactImg} alt="" />
      
      </div>
    </Parallax>
    <Parallax speed={10}>
      <div className="fast" />
    </Parallax>

    </ParallaxProvider>
  </>
 
)
  
}
    {/* <Hero
         cName= "heromid"
         heroImg= {ContactImg}
         title = "Contact"
        
         btnClass="hide"/>
   <div className="container-body">
      <div ref={parallax.ref} className="spinner"></div>
    </div>
        
        <Navbar />
    </> 
  */
 }
   
