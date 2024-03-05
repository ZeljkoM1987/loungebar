import React, { useState } from "react"
import { Jelovnik } from "./Jelovnik"
import "./MeniStyles.css";


export const Meni = () => {

    const [Obrok, setObrok] = useState('Sva jela')
    const [MenuProducts, setMenuProducts] = useState(Jelovnik);
    const filter = (sort) => {
        setMenuProducts(Jelovnik.filter((product) => product.sort === sort))
    }

    const handleChange = (event) => {
        console.log(event.target.value)

        filter(event.target.value);
        setObrok(event.target.value)


    }


    return (
        <div className="container">


            <div className="products">
                <ul className="izbor">
                    <li onClick={() => setMenuProducts(Jelovnik) & setObrok('Sva Jela')}>Sva jela</li>
                    <li onClick={() => (filter("Dorucak") & setObrok('Doručak'))}>Doručak</li>
                    <li onClick={() => (filter("Piza") & setObrok('Piza'))}>Pize</li>
                    <li onClick={() => filter("Glavno Jelo") & setObrok('Glavna Jela')}>Glavna jela</li>
                    <li onClick={() => filter("Desert") & setObrok('Deserti')}>Deserti</li>
                </ul>
                <div className="dropmenu">
                    <select name="drop" id="1" onChange={handleChange}>
                     
                        <option value="Dorucak" >Doručak</option>
                        <option value="Glavno Jelo">Glavno Jelo</option>
                        <option value="Piza">Piza</option>
                        <option value="Desert">Desert</option>
                    </select>
                </div>

                <h1 className="title">{Obrok}</h1>
                <div className="list">
                    {
                        MenuProducts.map((product, i) =>
                            <div className="product" key={i}>
                                <img src={product.url} alt="jelo" className="img-product" />

                                <div className="name">
                                    <h1>{product.title}</h1>
                                    <p>{product.text}</p>
                                </div>



                            </div>


                        )

                    }


                </div>

            </div>
        </div>
    )

}