import React, {useEffect} from "react";

import { Hero } from '../components/Hero';

import {HomeIntro} from "../components/HomeIntro"
import {HomeIntro2} from "../components/HomeIntro2"


export const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <>



            <Hero />
            <HomeIntro/>
            

        </>


    )
};