
import { useEffect } from 'react';
import {HeroOther} from '../components/HeroOther';
import AboutImg from '../../assets/26.jpg';
import { OurStory22 } from "../components/OurStory22";


export const About = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <>

<HeroOther
        heroImg= {AboutImg} 
        title = "O nama"/>
<OurStory22/>
        </>
        
    )
}
