import React from 'react';
import './page.css';

function ContactUs() {
  return (
    <main>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us with any questions, comments, or feedback. We're here to help and look forward to hearing from you.</p>
        <h2>Email</h2>
        <p><a href="mailto:support@bookline.com">support@bookline.com</a></p>
        <h2>Phone</h2>
        <p>+1 (123) 456-7890</p>
        <h2>Address</h2>
        <p>123 Bookline Street, Booktown, BK 12345, USA</p>
        
      </section>
    </main>
  );
}

export default ContactUs;
