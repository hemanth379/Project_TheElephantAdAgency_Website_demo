import "./contact.css" 
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef as UseRef, useState as UseState } from "react";
import emailjs from "emailjs-com"

const contact = () => {
    const formRef = UseRef();
    const [done, setDone] = UseState(false)

     
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm( "service_ix6yvgn",  "template_m0okguj", formRef.current, "AeYZW8vERyJDig0r0")
         .then(
           (result) => {
             console.log(result.text);
             setDone(true)
           },
           (error) => {
             console.log(error.text);
           }
         );
    };

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Lets discuss your Project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon"/>
                        +91 80087 83823, +91 80087 70440
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        info@elephantadagency.com
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                        D No. 1-90/7/B/121, F No. F1,Innovative Cyberview Apts, Patrika Nagar, Madhapur, Hyderabad – 500081
                    </div>
                </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email " name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
              </form> 
            </div>
        </div>
    </div>
  )
};

export default contact 