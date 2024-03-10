import "./FooterStyle.css"
import React from "react"



export const Footer = () => {

    return (
        <>
            <div className="container-footer">
                <div className="adresa">

                    <h2>Adresa</h2>
                    <h4>Lounge Bar Centar</h4>
                    <h4>Banjalučki put</h4>
                    <h4>78418 Nova Topola</h4>
                </div>
                <div className="adresa">

                    <h2>Radno vrijeme</h2>
                    <h4>Lounge bar: </h4>
                    <h4>svaki dan: 06-00h </h4>
                    <h4>Autopraona: </h4>
                    <h4>ponedeljak-subota: 08-20h </h4>
                    <h4>nedelja: 08h-16h</h4>

                </div>
                <div className="kontakt">

                    <h2>Kontakt</h2>
                    <h4>Telefon: 066954994</h4>
                    <h4>email: loungebarcentear@yahoo.com </h4>
                   

                </div>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100051575025188&sk=about"><i className="fa-brands fa-facebook" ></i></a>

                <a href="https://www.instagram.com/lounge_caffe_centar/"><i className="fa-brands fa-instagram"></i></a>


            </div>
        </>
    )
}