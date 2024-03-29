import "./HomeIntroStyle.css";

import { CardTest } from "./CardTest";
import TripImg1 from '../../assets/16.jpg';
import TripImg2 from '/35.jpg';
import TripImg3 from '../../assets/33.jpg';
import par from '/113.jpg';
import { PreporukaItems } from "./PreporukaItems";
import { Swiper, SwiperSlide } from "swiper/react";
import delivery from "../../assets/delivery.svg";
import { Link } from "react-router-dom";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Navigation } from "swiper/modules";

import React from "react";

export const HomeIntro = () => {
  return (
    <>
      <div className="intro-text">
        <h2>
          Dobrodošli u naš lounge caffe, gde se svaki zalogaj pretvara u nezaboravno
          iskustvo, a svaka večer postaje posebna priča.
        </h2>
      </div>
      <div className="section-o-nama">
        <div className="t-cards">
          <CardTest
          
            image={TripImg1}
            title="Lounge Caffe"
            text="Prijatan ambijent, neodoljiva gastronomska ponuda i širok izbor pića, samo su dio onog što vas očekuje. Lounge caffe je savršeno mjesto za sve prilike, bilo da dolazite na druženje sa prijateljima, romantičnu večeru, porodični ručak ili poslovni sastanak. "
          />
          <CardTest
          
            image={TripImg3}
            title="Igraonica"
            text="Našim najmlađim gostima na raspolaganju je igraonica, uređena po motivima popularnog crtanog filma Medo i Maša. Igraonica je opremljena raznim sadržajima u kojoj će vaša djeca provoditi vrijeme sa osmijehom i zadovoljstvom. "
          />
          <CardTest
        
            image={TripImg2}
            title="Autopraona"
            text="Pored lounge caffe-a i dječije igraonice, nudimo vam i usluge autopraone. Dok uživate u ambijente lounge caffe-a, prepustite nam brigu o vašem limenom ljubimcu."
          />
        </div>
        <div className="link">
          
          <Link className="button" to="/about">Više O nama</Link>
          
        </div>
        
      </div>
      <div className="slow" >
   <img src={par} alt="" />
    </div>
      <ParallaxProvider>


 <Parallax translateY={[-72, 30]}>
<div className="intro-text">
              <h2>Sa ponosom vam predstavljamo našu raskošnu selekciju jela, pripremljenih sa strašću i pažnjom, kako biste uživali u svakom trenutku provedenom za stolom.</h2>
            </div>
</Parallax>
  

</ParallaxProvider>
   
      
      
          
    

     
     <div className="section-o-nama">
        <div className="preporuka">
          <h2>Preporuka šefa kuhinje</h2>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop= {true}
       navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
          {PreporukaItems.map((slide, key) => (
            <SwiperSlide key={key}>
              
              <div className="slide" >
                <img src={slide.url} alt="slika" />
                <div className="slide-text">
                  <h3>{slide.title}</h3>
                 
                  

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="link">
        <Link className="button" to="/service">Kompletan meni</Link>
          

        </div>

        </div>
     
          *
      <div className="dostava">
        <img src={delivery} alt="dostava" />

      <div className="dostava-text">
        <h3> Niste u mogućnosti da nas posjetiti? </h3>
        <h3> Vršimo dostavu na vašu adresu </h3>
        <a className="button" href="tel:066954994"><i className="fa-solid fa-phone"></i> 066954994</a>
        </div>
      </div>
      {/* <div className="banner-gr">
        <h2>aaa</h2>
        
      </div>*/ }

    </>
  );
};
