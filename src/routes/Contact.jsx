import { useEffect } from "react";
import "../components/ContactStyless.css";

import { HeroOther } from "../components/HeroOther";
import GalImg from "/contact.jpg";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <HeroOther heroImg={GalImg} title="Kontakt" />
      <div className="container">
        <div className="inner-container">
          <div className="text-container">
            <h2>Ostanite u kontaktu. Kako do nas?</h2>
          </div>
        </div>
        <div className="inner-container">
          <div className="col">
            <div className="wrapper">
              <div className="icons-container">
                <div className="contact-icon-wrapper">
                  <div className="inner-contact-icon">
                    <div className="contact-icon">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="contact-text">
                      <p>
                        <span>Adresa:</span>
                        &nbsp; Banjalučki put, Nova Topola 78418 BiH
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-icon-wrapper">
                  <div className="inner-contact-icon">
                    <div className="contact-icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="contact-text">
                      <p>
                        <span>Telefon:&nbsp;</span>
                        <a href="tel://1234567920">+ 387 66954994</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-icon-wrapper">
                  <div className="inner-contact-icon">
                    <div className="contact-icon">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="contact-text">
                      <p>
                        <span>Email:&nbsp;</span>
                        <a href="mailto:info@gmail.com">loungebarcentar@yahoo.com </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="contact-icon-wrapper">
                  <div className="inner-contact-icon">
                    <div className="contact-icon">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="contact-text">
                      <p>
                        <span>Website:&nbsp;</span>
                        <a href="#">www.loungebarcentar.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-container">
                <div className="form-wrapper">
                  <h3>Ispunite formu. Veoma je lako.</h3>
                  <form
                    className="contact-form"
                    name="contact"
                    method="post"
                    //action="/contact/?success=true"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group name-inform">
                      <label htmlFor="name">Cijelo Ime</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ime"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group email">
                      <label htmlFor="email">Email Adresa</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group subject">
                      <label htmlFor="subject">Subjekat</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subjekat"
                        className="form-control"
                      ></input>
                    </div>
                    <div className="form-group message">
                      <label htmlFor="message">Poruka</label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={4}
                        required
                        placeholder="Poruka"
                        className="form-control"
                      ></textarea>
                    </div>
                    <div className="form-group btn-wrapper">
                      <input
                        type="submit"
                        value="Pošalji"
                        className="btn"
                      ></input>
                    </div>
                  </form>
                </div>
                <div className="map-wrapper">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.0595510047672!2d17.306881024393203!3d45.05256868295168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475df7e0dc82a1c9%3A0x375c82f1075eb7b4!2z4oCcQ0VOVEFS4oCdIENhZmU!5e0!3m2!1ssr!2sba!4v1710635359841!5m2!1ssr!2sba"
                    width="100%"
                    height="100%"
                    style={{ border: "0", overflow: "hidden", margin: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google map address"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
