import React, { useState } from 'react';
import styles from './Contact.module.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a mock form. In the future, this will submit data!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Contact Me</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={styles.contactInput}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={styles.contactInput}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className={styles.contactInput}
          rows={5}
        ></textarea>
        <button type="submit" className={styles.contactButton}>
          Send Message
        </button>
      </form>
    </section>
  );
}
