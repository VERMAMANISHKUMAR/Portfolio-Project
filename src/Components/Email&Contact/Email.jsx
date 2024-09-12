import React, { useRef, useState } from 'react';
import './Email.css';
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b300wke', 'template_yt3cgvr', form.current, 'iETzvIKjIb2GGlxyG')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Set submitted status to true on success
          setToSend({ from_name: '', reply_to: '', message: '' }); // Clear form
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className='blur c-blur2' style={{ background: "skyblue" }}></div>
        </div>
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="reply_to"
            className="user"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            className='user'
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>
          {isSubmitted && <span>Thanks for contacting me!</span>}
          <input type="submit" value="Send" className='button s-button' />
          <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div>
        </form>
      </div>
    </div>
  );
};

export default Email;
