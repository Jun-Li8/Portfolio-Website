import './contact.scss'
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

const Contact = ({}) =>{ 

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();  
      emailjs.sendForm('service_wpilso8', 'template_t6p8l39', form.current, process.env.REACT_APP_EMAILJS_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div className='contact' id="contact">
            <div className='left'>
                <img src='assets/output-onlinegiftools.gif' />
            </div>
            <div className='right'>
                <h2>
                    Contact
                </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="email" placeholder='Email' name="email"/>
                    <input type="text" placeholder='Subject' name="subject"/>
                    <textarea placeholder='Message' name="message"/>
                    <input type="submit" value="Send Message" /> 
                </form>
            </div>
        </div>
        );
    }

export default Contact;