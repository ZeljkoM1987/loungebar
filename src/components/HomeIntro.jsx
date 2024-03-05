
import "./HomeIntroStyle.css";
import { TripData } from "./TripData";
import TripImg1 from '../../assets/16.jpg';
import TripImg2 from '../../assets/36.jpg';
import TripImg3 from '../../assets/33.jpg';
import { PreporukaItems } from "./PreporukaItems";
import { Swiper, SwiperSlide } from 'swiper/react';
import delivery from '../../assets/delivery.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules'


import React from "react";

export const HomeIntro = () => {
  return (
    <>
      <div className="intro-text">
        <h2>Dobrodošli u naš restoran, gde se svaki zalogaj pretvara u nezaboravno iskustvo, a svaka večer postaje posebna priča.</h2>
      </div>
      <div className="section-o-nama">
        <div className="t-cards">
          <TripData
          
            image={TripImg1}
            heading="Lounge Bar"
            text="Nas jedinstveni ambijent predstavlja spoj elegancije i udobnosti, stvarajući savršeno okruženje za uživanje u vrhunskoj gastronomiji. Naša misija je da vam pružimo nezaboravan doživljaj, bilo da dolazite na druženje sa prijateljima, romantičnu večeru, porodični ručak ili poslovni sastanak. Naše ljubazno osoblje je tu da vam pruži vrhunsku uslugu i učini vaš boravak kod nas ugodnim i opuštajućim."
          />
          <TripData
          
            image={TripImg3}
            heading="Igraonica"
            text="Našim najmlađim gostima na rapolaganju je igraonica, uređena po motivima popularnog crtanog filma Medo i Maša. Igraonica je opremljena raznim sadržajima u kojoj će vaša djeca provoditi vrijeme sa osmijehom i zadovoljstvom. Koriscenje igraonice je besplatno"
          />
          <TripData
        
            image={TripImg2}
            heading="Autopraona"
            text="Bilo da se radi o osnovnom pranju, dubinskom čišćenju enterijera ili detaljnom poliranju, mi smo tu da udovoljimo vašim potrebama."
          />
        </div>
        <div className="link">
          <h3>više na </h3>
          <a href="/about" className="button">O nama</a>
        </div>
      </div>
      <div className="parallax"></div>
      <div className="intro-text">
        <h2>Sa ponosom vam predstavljamo našu raskošnu selekciju jela, pripremljenih sa strašću i pažnjom, kako biste uživali u svakom trenutku provedenom za stolom.</h2>
      </div>
      <div className="section-o-nama">
        <div className="preporuka">
          <h2>Preporuka šefa kuhinje</h2>
        </div>
        <Swiper
         
         
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
              
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween:40,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
              spaceBetween:40,
            }
          }}
          loop={true}
          navigation={true}
         
          modules={[ Navigation]}
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

          <a href="/service" className="button">Kompletan meni</a>

        </div>

        </div>
     

      <div className="dostava">
        <img src={delivery} alt="dostava" />

      <div className="dostava-text">
        <h3> Niste u mogućnosti da nas posjetiti? </h3>
        <h3> Vršimo dostavu na vašu adresu </h3>
        <a className="button" href="tel:066954994"><i className="fa-solid fa-phone"></i> 066954994</a>
        </div>
      </div>
    </>
  )
}
