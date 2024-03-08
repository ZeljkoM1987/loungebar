import "./HomeIntroStyle3.css";
import React from 'react';
import { Link } from "react-router-dom";


import { TripData } from "./TripData";
import { PreporukaItems } from "./PreporukaItems";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import par from '../../assets/52jpg.jpg';
import TripImg1 from '../../assets/16.jpg';
import TripImg2 from '../../assets/36.jpg';
import TripImg3 from '../../assets/33.jpg';
import delivery from '../../assets/delivery.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const HomeIntri3 = () => {
    return (
        <div >
          <div className="intro-text">
            <h2>Dobrodošli u naš restoran, gde se svaki zalogaj pretvara u nezaboravno iskustvo, a svaka večer postaje posebna priča.</h2>
          </div>
          <div className="section-o-nama">
        <div className="t-cards">
          <TripData
          
            image={TripImg1}
            heading="Lounge Bar"
            text="
            Prijatan ambijent, neodoljiva gastronomska ponuda i širok izbor pića, samo su dio naše ponude. Lounge bar je savršeno mjesto za sve prilike, bilo da dolazite na druženje sa prijateljima, romantičnu večeru, porodični ručak ili poslovni sastanak. "
          />
          <TripData
          
            image={TripImg3}
            heading="Igraonica"
            text="Našim najmlađim gostima na raspolaganju je igraonica, uređena po motivima popularnog crtanog filma Medo i Maša. Igraonica je opremljena raznim sadržajima u kojoj će vaša djeca provoditi vrijeme sa osmijehom i zadovoljstvom. "
          />
          <TripData
        
            image={TripImg2}
            heading="Autopraona"
            text="Bilo da se radi o osnovnom pranju, dubinskom čišćenju enterijera ili detaljnom poliranju, mi smo tu da udovoljimo vašim potrebama."
          />
        </div>
        <div className="link">
       
          <Link className="button" to="/about">Više o nama</Link>
          
        </div>
          </div>   <div className="slow" >
   <img src={par} alt="" />
    </div>
      <ParallaxProvider>


 <Parallax translateY={[-72, 30]}>
<div className="intro-text">
              <h2>Sa ponosom vam predstavljamo našu raskošnu selekciju jela, pripremljenih sa strašću i pažnjom, kako biste uživali u svakom trenutku provedenom za stolom.</h2>
            </div>
</Parallax>
  

</ParallaxProvider>
          <div className="dostava">
           <img src={delivery} alt="dostava" />
           <div className="dostava-text">
        <h3> Niste u mogućnosti da nas posjetiti? </h3>
        <h3> Vršimo dostavu na vašu adresu </h3>
        <a className="button" href="tel:066954994"><i className="fa-solid fa-phone"></i> 066954994</a>
           </div>
          </div>
          
        </div>
    );
};

;