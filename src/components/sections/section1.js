import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Section1(){
    return(
        <div>
        <section class = "section1">
        <div class="sec1left">
            <img class="logo" src="/img/PAMSLOGO.png" alt="" width="400px"/>
        </div>
        <div class="sec1right">
            <h2 class="">POLITICS ADDA & MARKETING SOLUTIONS  </h2>
            <p class = "titleDetail">A Vision for Change, A Promise of Progress.</p>
            <Link to="#contact" smooth ><button className="btn">Contact Us</button></Link>
        </div>
       </section>
       </div>
    )
}
export default Section1;