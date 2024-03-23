import React, { useState, useEffect } from "react";
import { Jelovnik } from "./Jelovnik";
import "./MeniStyles2.css";

export const Meni2 = () => {
  const [MenuProducts, setMenuProducts] = useState(Jelovnik.filter((product) => product.spec === "Novo"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [MenuProducts]);

  const [Obrok, setObrok] = useState("Novo u ponudi");

  const filter = (sort) => {
    setMenuProducts(Jelovnik.filter((product) => product.sort === sort));
  };
  const filterspec = (sort) => {
    setMenuProducts(Jelovnik.filter((product) => product.spec === sort));
  };

  const filterposno = (sort) => {
    setMenuProducts(Jelovnik.filter((product) => product.posno === sort));
  };

  const handleChange = (event) => {
    
    console.log (event.target.value)
    
    if (event.target.value === "Novo") {
      
      filterspec(event.target.value);
    }
    


    else if (event.target.value === "true")  {
     
    filterposno(event.target.value);
    }
    else {
      filter(event.target.value);
      setObrok(event.target.value);
    }
    
  };

  return (
    <div className="products">
      <div className="left-izbor">
        <div className="left-izbor-title">
          {" "}
          <h2>KATEGORIJE</h2>
        </div>
        <ul className="izbor">
          {/*<li onClick={() => setMenuProducts(Jelovnik) & setObrok('Sva Jela')}>Sva jela</li> */}
          <li onClick={() => filterspec("Novo") & setObrok("Novo u ponudi")}>
            Novo u ponudi
          </li>
          <li onClick={() => filter("Dorucak") & setObrok("Doručak")}>
            Doručak
          </li>
          <li onClick={() => filter("Burger") & setObrok("Burgeri i Ćevapi")}>
            Burgeri i Ćevapi
          </li>
          <li onClick={() => filter("carte") & setObrok("A la carte")}>
            A la carte
          </li>
          <li onClick={() => filter("Piza") & setObrok("Pizza")}>Pizza</li>
          <li
            onClick={() =>
              filter("SlanePalacinke") & setObrok("Slane Palačinke")
            }
          >
            Slane Palačinke
          </li>
          <li onClick={() => filter("Meze") & setObrok("Meze i Plate")}>
            Meze i Plate
          </li>
          <li onClick={() => filterposno("true") & setObrok("Posni program")}>
            Posni Program
          </li>
          <li onClick={() => filter("Pasta") & setObrok("Njoki i Paste")}>
            Njoki i Paste
          </li>
          <li onClick={() => filter("Salata") & setObrok("Obrok salate")}>
            Obrok salate
          </li>
          <li onClick={() => filter("Corbe") & setObrok("Čorbe")}>Čorbe</li>
          <li onClick={() => filter("Salate") & setObrok("Salate Porcije")}>
            Salate Porcije
          </li>
          <li onClick={() => filter("Slatko") & setObrok("Slatki Program")}>
            Slatki Program
          </li>
          <li onClick={() => filter("Prilozi") & setObrok("Prilozi")}>
            Prilozi
          </li>
          <li onClick={() => filter("Dodatak") & setObrok("Dodatak")}>
            Dodatak
          </li>
        </ul>
      </div>
      <div className="dropmenu">
        <select name="drop" id="1" onChange={handleChange}>
       
          <option value="Novo">Novo u ponudi</option>
          <option value="Dorucak">Doručak</option>
          <option value="Burger">Burgeri i ćevapi</option>
          <option value="carte">A la carte</option>
          <option value="Piza">Pizza</option>
          <option value="SlanePalacinke">Slane Palačinke</option>
          <option value="Meze">Meze i Plate</option>
          <option value= "true" >Posni Program</option>
          <option value="Pasta">Njoki i Paste</option>
          <option value="Salata">Obrok salate</option>
          <option value="Corbe">Čorbe</option>
          <option value="Salate">Salate Porcije</option>
          <option value="Slatko">Slatki Program</option>
          <option value="Prilozi">Prilozi</option>
          <option value="Dodatak">Dodatak</option>
          
        </select>
      </div>

      <div className="list">
        <h1 className="title">{Obrok}</h1>
        {MenuProducts.map((product, i) => (
          <div
            className="product"
            key={i}
            style={{ backgroundImage: `url(${product.url})` }}
          >
            {!product.url && (
              <div className="name">
                <h1>{product.title}</h1>
                <p>{product.text}</p>
                <p>{product.vel}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="list-desktop">
        <h2 className="title">{Obrok}</h2>
        {MenuProducts.map((product, i) => {
          return (
            product.url !== " " && (
              <div className="product" key={i}>
                <img
                  src={product.url}
                  alt="product-image"
                  className="product-img"
                />

                <div className="name">
                  <h1>{product.title}</h1>
                  <p>{product.text}</p>
                  <p>{product.vel}</p>
                </div>
              </div>
            )
          );
        })}

        {MenuProducts.map((product, i) => {
          return (
            product.url === " " && (
              <div className="product-none" key={i}>
                <img
                  src={product.url}
                  alt="product-image"
                  className="product-img-none"
                />

                <div className="name-img-none">
                  <h1>{product.title}</h1>
                  <p>{product.text}</p>
                  <p>{product.vel}</p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
