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
                   {/*<li onClick={() => setMenuProducts(Jelovnik) & setObrok('Sva Jela')}>Sva jela</li> */} 
                   <li onClick={() => (filter("Dorucak") & setObrok('Doručak'))}>Novo u ponudi</li>
                    <li onClick={() => (filter("Dorucak") & setObrok('Doručak'))}>Doručak</li>
                    <li onClick={() => (filter("Dorucak") & setObrok('Doručak'))}>Burgeri i ćevapi</li>
                    <li onClick={() => (filter("Dorucak") & setObrok('Doručak'))}>A la carte</li>
                    <li onClick={() => (filter("Piza") & setObrok('Piza'))}>Pize</li>
                    <li onClick={() => filter("Glavno Jelo") & setObrok('Glavna Jela')}>Njoki i Paste</li>
                    <li onClick={() => filter("Glavno Jelo") & setObrok('Glavna Jela')}>Salate i Čorbe</li>
                    <li onClick={() => filter("Glavno Jelo") & setObrok('Glavna Jela')}>Salate Porcije</li>
                    <li onClick={() => filter("Desert") & setObrok('Deserti')}>Slatki Program</li>
                    <li onClick={() => filter("Desert") & setObrok('Deserti')}>Prilozi</li>
                    <li onClick={() => filter("Desert") & setObrok('Deserti')}>Dodatak</li>
                </ul>
                <div className="dropmenu">
                <select name="drop" id="1" onChange={handleChange}>
                    <option value="Piza">Novo u ponudi</option>
                        <option value="Dorucak" >Doručak</option>
                        <option value="Glavno Jelo">Burgeri i ćevapi</option>
                        <option value="A la carte">A la carte</option>
                        <option value="Desert">Njoki i Paste</option>
                        <option value="Dorucak" >Salate i Čorbe</option>
                        <option value="Glavno Jelo">Salate Porcije</option>
                        <option value="Piza">Slatki Program</option>
                        <option value="Desert">Prilozi</option>
                        <option value="Desert">Dodatak</option>
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