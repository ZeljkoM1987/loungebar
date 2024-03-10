import { useEffect } from "react";
import { CardTest } from "../components/CardTest";
import ContactImg from "../../assets/18.jpg";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CardTest />
    </>
  );
};
{
  /* <Hero
         cName= "heromid"
         heroImg= {ContactImg}
         title = "Contact"
        
         btnClass="hide"/>
   <div className="container-body">
      <div ref={parallax.ref} className="spinner"></div>
    </div>
        
        <Navbar />
    </> 
  */
}
