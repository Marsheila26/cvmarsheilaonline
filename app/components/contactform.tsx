// Menambahkan "use client" di bagian atas file
'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

type FormData = {
  name: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Message sent successfully!');
      setFormData({ name: '', message: '' });
    }, 2000);
  };

  return (
    <div className={styles.contactForm}>
      <center><h2>KONTAK SAYA</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Komentar</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Kirim Komentar'}
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default ContactForm;
