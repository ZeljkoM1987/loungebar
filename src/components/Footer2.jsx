import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle2.css";
import logo from "../logo.svg";
import visa from "/visa_card.png";

export const Footer2 = () => {
  return (
    <footer className="footer">
      <section className="header">
        <div className="headerInner">
          <div className="third">
            <div className="satnica">
              <h4>
                <i className="fa-regular fa-clock"></i> Radno vrijeme
              </h4>
              <h5>Lounge bar:</h5>
              <p>Svaki dan: 08h - 20h</p>
              <h5>Autopraona:</h5>
              <p>Ponedeljak - Subota: 08h - 20h</p>
              <p>Nedelja: 08h-16h</p>
            </div>
          </div>
          <div className="second">
            <div className="headerLogo">
              <img
                src={logo}
                alt="centar logo"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(381%) hue-rotate(352deg) brightness(104%) contrast(92%)",
                }}
              ></img>
              <div>
                <h2>lounge caffe</h2>
                <h1>Centar</h1>
              </div>
            </div>
          </div>
          <div className="first">
            <div className="socialWrapper">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100051575025188&sk=about"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="socials links"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lounge_caffe_centar/"
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="socials links"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="body">
        <div className="bodyInner">
          <div className="column about">
            <div>
              <div className="footer-title">
                <h4>Kako do nas?</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <span className="fa fa-map-marker icon"></span>
                <p>Banjalučki put, Nova Topola, BiH</p>
              </li>
              <li>
                <span className="fa fa-phone icon"></span>

                <p>(+387) 66 954 994</p>
              </li>
              <li>
                <span className="fa fa-paper-plane icon"></span>
                <p>loungebarcentar@yahoo.com</p>
              </li>
            </ul>
          </div>
          <div className="column important">
            <div>
              <div className="footer-title">
                <h4>Važni Linkovi</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <span className="fa-solid fa-chevron-right icon"></span>
                <p>POČETNA</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>O NAMA</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>MENI</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>GALERIJA</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>KONTAKT</p>
              </li>
            </ul>
          </div>
          <div className="column important">
            <div>
              <div className="footer-title">
                <h4>Meni Kategorija</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <ul>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>DORUČAK</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>GLAVNO JELO</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>SUPE I ČORBE</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>PIZZA</p>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right icon"></i>
                <p>DESERTI</p>
              </li>
            </ul>
          </div>
          <div className="column post">
            <div>
              <div className="footer-title">
                <h4>Naša Lokacija</h4>
              </div>
              <div className="divider">
                <span></span>
              </div>
            </div>
            <div className="postlist">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.0595510047672!2d17.306881024393203!3d45.05256868295168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475df7e0dc82a1c9%3A0x375c82f1075eb7b4!2z4oCcQ0VOVEFS4oCdIENhZmU!5e0!3m2!1ssr!2sba!4v1710635359841!5m2!1ssr!2sba"
                width="100%"
                height="300"
                style={{ border: "0", overflow: "hidden", margin: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map address"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="foot">
        <div className="footInner">
          <p>Copyright 2023 lounge bar Centar. All Rights Reserved By Zeljko</p>
          <div>
            <img
              width={188}
              height={25}
              src={visa}
              alt="visa and master cards"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};
