import ImgStory1 from "../../assets/37.jpg";
import ImgStory2 from "../../assets/31.jpg";
import ImgStory3 from "../../assets/33.jpg";
import ImgStory4 from "../../assets/34.jpg";
import ImgStory5 from "../../assets/35.jpg";
import ImgStory6 from "../../assets/36.jpg";
import ImgStory7 from "../../assets/38.jpg";
import ImgStory8 from "../../assets/32.jpg";
import "./OurStoryStyles.css";
import { OurStoryData } from "./OurStoryData";
import { SmallCard } from "./SmallCard";
import React from "react";
import imglogo from "../../assets/heading-var-shap.png";
import ImgStory9 from "../../assets/57.jpg";
import ImgStory10 from "../../assets/56.jpg";
import ImgStory11 from "../../assets/55.jpg";
import parking from "../../assets/parking-svg.svg";


export const OurStory = () => {
    return (
        <div className="our-story-container">

            <div className="our-story">
                <div className="our-story-one">
                    <div className="nasa-prica">
                        <h2>Naša priča</h2>

                        <img src={imglogo} alt="logo" />

                        <p>Naša priča počinje sa željom za gostoprimstvom i ljubavlju prema kulinarskoj umetnosti.
                            Svaki detalj smo pažljivo birali kako bi stvorili prijatan i udoban ambijent za naše goste.
                            Pored elegantne unutrašnjosti objekta, našim gostima je na raspolaganju je zimska i ljetna bašta.
                            Bez obzira da li ste došli da proslavite posebnu priliku ili jednostavno želite da se prepustite čarima večeri, naš lounge bar vas poziva da se pridružite u stvaranju nezaboravnih trenutaka.
                            Želja nam je da nam dođete kao gost, a a odete kao prijatelj...

                            ...jer ovo je naša priča, ali vi ste ti koji je čine posebnom.
                        </p>

                    </div>
                    <img src={ImgStory9} alt="slika" />
                </div>
                <div className="our-story-one">
                    <div className="nasa-prica">
                        <div className="our-story-img">

                            <img src={ImgStory10} alt="logo" />
                            <img src={ImgStory11} alt="logo" />
                            <img src={ImgStory1} alt="logo" />
                            <img src={ImgStory2} alt="logo" />
                        </div>

                        <p>Naš jelovnik je pažljivo osmišljen kako bi zadovoljio raznovrsne ukuse naših gostiju. Od tradicionalnih domaćih specijaliteta do modernih kulinarskih kreacija, svako jelo nosi pečat kvaliteta i pažnje prema detaljima, obećavajući neprocenjivo gastronomsko iskustvo.
                            Pored toga, nudimo vam širok izbor alkoholnih i bezalkoholnih napitaka koji će doprineti vašem gastronomskom doživljaju.
                        </p>

                    </div>
                    <div className="our-story-button">

                        <a href="/service" className="button">Kompletan meni</a>
                    </div>
                </div>
            </div>
            <div className="small-card-cont">
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            </div>
           
            

            <OurStoryData
                destclass="second-story"
                title="Igraonica"
                text="Našim najmlađim gostima na rapolaganju je igraonica, uređena po motivima popularnog crtanog filma Medo i Maša. Igraonica je opremljena raznim sadržajima u kojoj će vaša djeca provoditi vrijeme sa osmijehom i zadovoljstvom. Koriscenje igraonice je besplatno."
                Img1={ImgStory3}
                Img2={ImgStory4} />

            <OurStoryData
                destclass="first-story"
                title="Autopraona"
                text="U sklopu lounge bar-a se nalazi i autopraonica. Dok uživate u ambijentu lounge bar-a,prepustite nam brigu o vašem limenom ljubimcu.   Radno vrijeme praonice: 09h-20h."
                Img1={ImgStory5}
                Img2={ImgStory6} />

           

        </div>

    )
}