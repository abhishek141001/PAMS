import React, { useState } from "react";


function Contact(){

const [name,setName] = useState("");
const [submit,setSubmit] = useState(false);

    const handleChange = (e)=>{
        console.log(e.target.value)
        setName(e.target.value)

    }
    const handleSubmit = ()=>{
        setSubmit(true);
    }
    return(
        <div className="contact" id="contact">
            <h3 className="contactTitle">CONTACT</h3>
            {submit ? (<div className="Submitted"><p>We will contact you soon, thankyou {name}.</p></div>) :(
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="NAME" className="input" onChange={handleChange} />
                <input type="email" name="Email" placeholder="EMAIL" className="input" />
                <input type="number" name="Number" placeholder="NUMBER" className="input" />
                <textarea name="textArea" placeholder="Write it off.." className="textArea input"></textarea>
                <button className="btn-1">SUBMIT</button>
            </form>
            )}
        </div>

    )
}
export default Contact;