import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Header(){
    return (
        <div className="nav" id="home" >
    <Link className="title" to="#home" smooth><h2>PAMS</h2></Link>
    <div className="navRight">
    <Link to="#gallery" smooth className="navList">GALLERY</Link>
    <Link to = "#contact" smooth className="navList">CONTACT</Link>
    <Link to = "#about" smooth className="navList">ABOUT</Link>
    </div>
</div>
    )
}
export default Header;



