// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram, 
  FaDiscord,
  FaCode,
  FaLaptopCode
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../components/shared.css';

function Contact() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/UshanGhosh",
      color: "#f0f6fc"
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/ushan-ghosh-773b24197",
      color: "#0a66c2"
    },
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/Ushan.NerdBanner",
      color: "#1877f2"
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/ushan_ghosh",
      color: "#e4405f"
    },
    {
      icon: <FaDiscord />,
      url: "https://discord.com/users/random9745",
      color: "#5865f2"
    }
  ];

  return (
    <section id="contact-section" className="contact">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-left">
              <p className="contact-description">
                If you want to hire me or have other queries, then knock me anytime. 
                I try to reply within 24 hours.
              </p>
              <div className="contact-info-container">
                <div className="email-container">
                  <MdEmail className="email-icon" />
                  <a href="mailto:ushanghosh00@gmail.com" className="email-link">
                    ushanghosh00@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--hover-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="contact-right">
              <div className="floating-icons">
                <MdEmail className="floating-icon" />
                <FaLinkedinIn className="floating-icon delayed-1" />
                <FaGithub className="floating-icon delayed-2" />
                <FaFacebookF className="floating-icon delayed-3" />
                <FaInstagram className="floating-icon delayed-4" />
                <FaDiscord className="floating-icon delayed-5" />
                <FaCode className="floating-icon delayed-6" />
                <FaLaptopCode className="floating-icon delayed-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Ushan Ghosh. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
