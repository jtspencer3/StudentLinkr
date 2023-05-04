import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../stylesheets/Contact.css';

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b3h3yws',
        'contact_studentlinkr',
        form.current,
        'RMJnOQMoMvYaWU9Rm'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p>Message sent successfully! One of our team members will get in touch with you soon.</p>
      ) : (
        <form className='cf' ref={form} onSubmit={sendEmail}>
          <div className='cf'>
            <input className='contact-input' type='text' placeholder='Subject' name='subject' />
          </div>
          <div className='half left cf'>
            <input
              type='text'
              className='contact-input'
              placeholder='First Name'
              name='first_name'
            />
            <input
              type='text'
              className='contact-input'
              placeholder='Last Name'
              name='last_name'
            />
            <input
              type='text'
              className='contact-input'
              placeholder='User Name'
              name='user_name'
            />
            <input
              type='email'
              className='contact-input'
              placeholder='Email address'
              name='user_email'
            />
          </div>
          <div className='half right cf'>
            <textarea
              name='message'
              type='text'
              className='contact-input'
              placeholder='Message'
            ></textarea>
          </div>
          <input type='submit' value='Submit' id='input-submit' />
        </form>
      )}
    </div>
  );
};

export default Contact;
