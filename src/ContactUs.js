import React from 'react';
import './styles.css'; // Import the combined CSS file

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
        <h2>Follow Us</h2>
        <p>Connect with us on social media:</p>
        <ul>
          <li><button onClick={() => window.open('https://www.facebook.com', '_blank')}>Facebook</button></li>
          <li><button onClick={() => window.open('https://www.twitter.com', '_blank')}>Twitter</button></li>
          <li><button onClick={() => window.open('https://www.instagram.com', '_blank')}>Instagram</button></li>
        </ul>
      </section>
    </main>
  );
}

export default ContactUs;
