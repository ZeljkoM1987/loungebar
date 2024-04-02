import React from "react"


import { Swiper, SwiperSlide } from "swiper/react"
 
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import ImgHero1 from "../../assets/18.jpg"
import ImgHero2 from "../../assets/14.jpg"
import ImgHero3 from "../../assets/22.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./HeroStyless.css"
import 'swiper/css/effect-fade';
/*
export const  Hero = (props) => {

    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg} alt="Heromg" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttontext}</a>
                </div>


            </div>
        </>
    )
}*/

export const  Hero = () => {



   
    return (
        <div className="hero">
                    
                    <Swiper
        spaceBetween={30}
        effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
            }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide className="swipperslide">
            <img src={ImgHero1} alt="heroimg" />
            <div className="text-hero">
            <h1>lounge caffe Centar</h1>
            <h2>Dobro došli!</h2>
            
            </div>
            <p className="etc"> EST. 2016</p>
         </SwiperSlide>
        <SwiperSlide>
        <img src={ImgHero2} alt="heroimg" />
        <div className="text-hero">
            <h1>lounge caffe Centar</h1>
            <h2>Vaša Gastronomska Oaza</h2>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={ImgHero3} alt="heroimg" />
        <div className="text-hero">
            <h1>lounge caffe Centar</h1>
            <h2>Otkrijte Svet Savršenih Ukusa</h2>
        </div>
        </SwiperSlide>
        
      
      </Swiper>
                
              
        </div>
    )
        }
