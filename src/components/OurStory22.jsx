import ImgStory1 from "/40.jpg";
import ImgStory2 from "/38.jpg";
import ImgStory3 from "/97.jpg";
import ImgStory4 from "/142.jpg";
import ImgStory5 from "/35.jpg";
import ImgStory6 from "/150.jpg";
import ImgStory7 from "/99.jpg";
import ImgStory8 from "/141.jpg";
import ImgStory13 from "/34.jpg";
import "./Ourstory2.css";
import { OurStoryData } from "./OurStoryData";
import React from "react";
import imglogo from "../../assets/heading-var-shap.png";
import ImgStory9 from "../../assets/57.jpg";
import ImgStory10 from "/113.jpg";
import ImgStory11 from "/menu/cartepileciisos.jpg";
import ImgStory12 from "/129.jpg";

import { Link } from "react-router-dom";


export const OurStory22 = () => {
    return (
        <div className="our-story-container">

            <div className="ourstory-intro">
                <div className="ourstory-intro-text">
                    <h2>Naša priča</h2>

                    <img src={imglogo} alt="logo" />

                    <p>Naša priča počinje 2016. godine, kada smo vođeni ljubavlju prema kulinarskoj umetnosti i gostoprimstvu, otvorili vrata našeg lounge caffe-a.
                        Želja nam je bila da stvorimo prostor u koji ćete nam dolaziti kao gosti, a vraćati nam se kao prijatelji.
                        Svaki detalj smo pažljivo birali kako bi stvorili prijatan i udoban ambijent za naše goste.

                    </p>

                </div>
                <div className="our-story-intro-picture">
                    <img src={ImgStory10} alt="slika" />

                </div>
            </div>
            <div className="ourstory-intro-reverse">
                <div className="our-story-intro-picture">
                    <img src={ImgStory9} alt="slika" />

                </div>

                <div className="ourstory-intro-text-reverse">


                    <p>Pored unutrašnjosti objekta, gosti se mogu  udobno smjestiti i u zimskoj i ljetnoj bašti.
                        Takođe, našim gostima je na raspolaganju parking koji se nalazi iza i preko puta lounge caffe-a.
                        Bez obzira da li ste došli da proslavite posebnu priliku ili jednostavno želite da se prepustite čarima večeri,
                        naš lounge bar vas poziva da se pridružite u stvaranju nezaboravnih trenutaka.

                    </p>

                </div>
            </div>
            <div className="ourstory-intro">
                <div className="ourstory-intro-text">




                    <p>Naš jelovnik je pažljivo osmišljen kako bi zadovoljio raznovrsne ukuse naših gostiju. Od tradicionalnih domaćih specijaliteta do modernih kulinarskih kreacija, svako jelo nosi pečat kvaliteta i pažnje prema detaljima, obećavajući neprocenjivo gastronomsko iskustvo.
                        Pored toga, nudimo vam širok izbor alkoholnih i bezalkoholnih napitaka koji će doprineti vašem gastronomskom doživljaju.
                    </p>


                    <div className="our-story-button">

                        <Link className="button-menu" to="/service">Kompletan meni</Link>

                    </div></div>


                <div className="our-story-intro-picture1">
                    <img src={ImgStory11} alt="slika" />
                    <img src={ImgStory12} alt="slika" />
                    <img src={ImgStory1} alt="slika" />
                    <img src={ImgStory2} alt="slika" />
                </div>
            </div>
            <div className="ourstory-intro-reverse">

                <div className="our-story-intro-picture2">
                    <img src={ImgStory4} alt="slika" />
                    <img src={ImgStory7} alt="slika" />
                </div>
                <div className="ourstory-intro-text-reverse">


                    <p> Idealan smo izbor za poslovne ručkove, porodične proslave, dječije rođendane i slične vrste događaja. Za više informacija, slobodno nas kontaktirajte.
                    </p>
                    <div className="our-story-button">

                        <Link className="button-menu-reverse" to="/contact">Kontakt</Link>

                    </div>
                </div>
            </div>
{/* <div className="story-org">
                <div className="story-org-img">
                    <img src={ImgStory4} alt="slika" />
                </div>
                <div className="story-org-text">
                    <p> Idealan smo izbor za poslovne ručkove, porodične proslave, dječije rođendane i slične vrste događaja. Za više informacija, slobodno nas kontaktirajte.
                    </p>
                    <div className="our-story-button">

                        <Link className="button-menu" to="/contact">Kontakt</Link>

                    </div>
                </div>
                <div className="story-org-img">
                    <img src={ImgStory7} alt="slika" />
                </div>

            </div> */ }
            <OurStoryData
                destclass="first-story"
                title="Igraonica"
                text="Našim najmlađim gostima na raspolaganju je igraonica, uređena po motivima popularnog crtanog filma Medo i Maša. Igraonica je opremljena raznim sadržajima u kojoj će vaša djeca provoditi vrijeme sa osmijehom i zadovoljstvom. Koriscenje igraonice je besplatno."
                Img1={ImgStory8}
                Img2={ImgStory13} />

            <OurStoryData
                destclass="second-story"
                title="Autopraona"
                text="U sklopu lounge caffe-a se nalazi i autopraonica. Dok uživate u ambijentu lounge caffe-a, prepustite nam brigu o vašem limenom ljubimcu. Naše usluge (vanjsko, unutrašnje, komplet i dubinsko pranje) će vratiti sjaj vašem automobilu."
                Img1={ImgStory5}
                Img2={ImgStory6} />
           
        </div>
    )
}