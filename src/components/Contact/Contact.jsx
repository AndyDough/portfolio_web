import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      }, () => {
        setStatus('error');
      });
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new opportunities and exciting projects!</p>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className={styles.formGroup}>
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <input type="hidden" name="to_name" value="Andy" />
        <button type="submit" className={styles.submitBtn}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
        {status === 'error' && <p className={styles.error}>Failed to send message. Please try again.</p>}
      </form>

      <ul className={styles.links}>
        <li>
          <a href="mailto:andynguyendo@gmail.com" className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>andynguyendo@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andynguyendo" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/BearB34R" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};
