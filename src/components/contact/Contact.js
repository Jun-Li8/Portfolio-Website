import './contact.scss'
import emailjs from 'emailjs-com';
import React, { useRef,useState } from 'react';

const Contact = ({}) =>{ 

    const form = useRef();

    const [message, setMessage] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      setMessage(true);
      emailjs.sendForm('service_wpilso8', 'template_t6p8l39', form.current, process.env.REACT_APP_EMAILJS_API_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
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
                    <input type="email" placeholder='Email' name="email" required/>
                    <input type="text" placeholder='Subject' name="subject" required/>
                    <textarea placeholder='Message' name="message" required/>
                    <input type="submit" value="Send Message" /> 
                    {message && <span>Message Sent! I'll reply ASAP. If you want to contact me directly, email me at lijun2357@gmail.com!</span>}
                </form>
            </div>
        </div>
        );
    }

export default Contact;