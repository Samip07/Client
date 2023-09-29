import React from "react";
import { Navbar,Footer } from "../components";

const About = () => {
  return (
    <div>
        <Navbar />
      <section className="middle_content">
        <div className="photo_first">
          <img src="img/p00.jpg" alt="" className="about-img"/>
          <div className="text1">
            <h1>Visit Yatra</h1>
            <h1>Explore Services</h1>
            <h1>We Povide.</h1>
          </div>
          <div className="btn_first">
            <button><a href="/register" className="about-link">Join Us</a></button>
          </div>
        </div>
      </section>
      <div className="about_container">
        <div className="about_left">
          <h2>Who We Are</h2>
          <p>
            "We are a top-tier hotel management system provider, revolutionizing
            the hospitality industry with our cutting-edge solutions. Our
            customer-centric approach and expertise ensure seamless operations
            and outstanding guest experiences, driving hotel success."
          </p>
        </div>
        <div className="about_left">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower hotels with user-friendly technology that
            optimizes operations, elevates guest satisfaction, and increases
            revenue. We strive to be a reliable partner, providing innovative
            solutions that meet the unique needs of each property, while
            ensuring seamless integration and exceptional support.
          </p>
        </div>
        <div className="about_left">
          <h2>What We Do</h2>
          <p>
            Our Yatra aims to empower hotels with the technology and tools they
            need to operate efficiently, deliver exceptional guest experiences,
            and drive revenue growth in the competitive hospitality industry.
          </p>
        </div>
      </div>
      <div className="teams">
        <h1>Meet Our Team!</h1>
        <div className="developer_img">
          <div className="team_img">
            <img src="img/samip.jpg" alt="asis" />
            <h3>Samip Poudel</h3>
            <p>CEO & co-founder</p>
          </div>
          <div className="team_img">
            <img src="img/aashish.JPG" alt="asis" />
            <h3>Aashish Paudel</h3>
            <p>CEO & co-founder</p>
          </div>
          <div className="team_img">
            <img src="img/sandesh.jpg" alt="asis" />
            <h3>Sandesh Sigdel</h3>
            <p>CMO</p>
          </div>
          <div className="team_img">
            <img src="img/ujwal.jpg" alt="asis" />
            <h3>Ujwal Poudel</h3>
            <p>Executive Head</p>
          </div>
          <div className="team_img">
            <img src="img/prabhat.JPG" alt="asis" />
            <h3>Prabhat Pandit</h3>
            <p>Helper</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
