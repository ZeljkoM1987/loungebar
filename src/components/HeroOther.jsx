import React from "react"
import "./HeroOtherstyles.css"

export const  HeroOther = (props) => {

    return (
        <>
            <div className="hero-section">
                <img src={props.heroImg} alt="Heromg" />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                                       
                </div>


            </div>
        </>
    )
}