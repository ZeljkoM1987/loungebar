import React, {useState} from "react";
import { MenuItems } from "./MenuItems"
import "./NavbarStyless.css";
import { Link } from "react-router-dom"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  
    return (

        
        <nav className="NavBarItems">
           {/* <h1 className="Navbar-logo">Lounge Bar Centar</h1> */}
           <div className= "Navbar-logo" >
            <h2>lounge bar</h2>
            <h1>Centar</h1>
               </div>
            <div className="menu-icons"  onClick={() => setMenuOpen(!menuOpen)}>
            
                <i className={menuOpen ? "fa fa-times" : "fa fa-bars" }></i>
               
            </div>
            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cname} to={item.url} onClick={() => setMenuOpen(false)}>
                                    <i className={item.icon} aria-hidden="true"></i> {item.title}
                                    
                                </Link>
                            
                            </li>
                        )
                    }
                    )}
                <a className="nav-tel" href="tel:066954994"><i className="fa-solid fa-phone"></i> 066954994</a>
            </ul>
           
            
            
          
        </nav>
    )

}
/*
class Navbar extends Component {
    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="Navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                    <li>
                        <a>
                            <i className="fa fa-home" aria-hidden="true"></i>Home
                        </a>
                    </li>

                </ul>
            </nav>
        )

    }
}

export default Navbar 
*/