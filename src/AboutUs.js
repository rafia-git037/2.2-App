import React from 'react';
import './page.css'; 

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-section">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Welcome to BookLine! We are dedicated to providing you with the best experience in discovering, managing, and enjoying your favorite books.</p>
        </div>
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>Our mission is to connect book lovers with the books they cherish. We aim to create a seamless platform where you can explore, save, and share your favorite reads.</p>
          <h2>Our Story</h2>
          <p>Founded in 2021, BookLine was created by a group of passionate readers who wanted to make it easier to find and keep track of the best books. Since then, we've grown into a vibrant community of book enthusiasts.</p>
          <h2>Meet the Team</h2>
          <p>Our team is comprised of bookworms, tech geeks, and customer service pros, all working together to make BookLine the best it can be. We are constantly innovating and improving to serve you better.</p>
          
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
