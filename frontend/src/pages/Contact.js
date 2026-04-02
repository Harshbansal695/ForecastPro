import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1 className="contact-title">
            Contact <span className="highlight">Us</span>
          </h1>
          <p className="contact-intro">
            Have questions about our platform? Ready to transform your
            e-commerce analytics? We're here to help and excited to hear from
            you.
          </p>
        </section>

        {/* Main Content */}
        <section className="contact-content">
          {/* Left Sidebar */}
          <div className="contact-sidebar">
            <div className="response-banner">
              <svg className="banner-icon" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>We'll respond within 24 hours</p>
            </div>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-content">
                  <h3>Phone</h3>
                  <p className="info-value">+91 99999-9999</p>
                  <p className="info-detail">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-content">
                  <h3>Office</h3>
                  <p className="info-value">Delhi, India</p>
                  <p className="info-detail">E-Commerce Analytics Hub</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-content">
                  <h3>Support</h3>
                  <p className="info-value">24/7 Available</p>
                  <p className="info-detail">Technical support team</p>
                </div>
              </div>
            </div>

            <div className="why-choose">
              <h3 className="why-title">Why Choose ForecastPro?</h3>
              <ul className="why-list">
                <li>Customized solutions for your business</li>
                <li>Expert data science team</li>
                <li>Proven results with Olist dataset</li>
                <li>Ongoing support and training</li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>

            <form
              action="https://formspree.io/f/xlgowwzw"
              method="POST"
              className="contact-form"
            >
              {/* Prevent Spam */}
              <input type="hidden" name="_captcha" value="false" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Enquiry</option>
                    <option value="sales">Sales</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell us about your project or questions..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
