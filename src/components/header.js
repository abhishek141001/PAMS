import React, { useEffect,useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header(){

    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
       
        if (isNavOpen) {
          document.querySelector(".navRight").style.visibility = "visible";
        } else {
          document.querySelector(".navRight").style.visibility = "hidden";
        }
    
      }, [isNavOpen]);
    
  
    return (
        <div className={`nav ${isNavOpen ? 'change' : ''}`} id="home" >
    <Link className="title" to="#home" smooth><h2>PAMS</h2></Link>
    <div className="navBox">
    <div className="navRight">
    <Link to="#gallery" smooth className="navList">GALLERY</Link>
    <Link to = "#contact" smooth className="navList">CONTACT</Link>
    <Link to = "#about" smooth className="navList">ABOUT</Link>
   

    
    </div>
    <div class="container" onClick={()=>{setIsNavOpen(!isNavOpen)}}>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  </div>
</div>
    )
}
export default Header;



