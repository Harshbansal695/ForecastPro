import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About ForecastPro</h1>
          <p className="about-intro">
            We're revolutionizing e-commerce analytics with cutting-edge machine
            learning and deep insights from the Olist Brazilian dataset. Our
            mission is to empower businesses with predictive intelligence.
          </p>
        </section>

        {/* Key Metrics */}
        <section className="metrics-section">
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="12"
                    cy="5"
                    rx="9"
                    ry="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M21 5c0 1.66-4 3-9 3S3 6.66 3 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M3 5v14M21 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="metric-value">100K+</h3>
              <p className="metric-label">Data Points Analyzed</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="metric-value">50+</h3>
              <p className="metric-label">Businesses Served</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="23 6 13.5 15.5 8.5 10.5 1 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="17 6 23 6 23 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="metric-value">99.9%</h3>
              <p className="metric-label">Accuracy Rate</p>
            </div>

            <div className="metric-card">
              <div className="metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
              </div>
              <h3 className="metric-value">24/7</h3>
              <p className="metric-label">Global Support</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                ForecastPro emerged from a simple observation: e-commerce
                businesses were drowning in data but starving for insights.
                While companies had access to vast amounts of transactional
                data, they lacked the tools to transform this information into
                actionable predictions.
              </p>
              <p>
                Leveraging the comprehensive Olist Brazilian e-commerce dataset,
                we developed advanced machine learning models that combine ARIMA
                and LSTM techniques to deliver accurate demand forecasting. Our
                platform helps businesses optimize inventory, reduce waste, and
                maximize revenue through data-driven decision-making.
              </p>
              <p>
                Today, ForecastPro serves businesses across multiple industries,
                providing them with the predictive intelligence they need to
                stay competitive in an ever-evolving e-commerce landscape.
              </p>
            </div>
            <div className="story-visual">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="8" width="3" height="8" fill="#4a90e2" />
                <rect x="9" y="4" width="3" height="12" fill="#4a90e2" />
                <rect x="14" y="6" width="3" height="10" fill="#4a90e2" />
                <rect x="19" y="10" width="3" height="6" fill="#4a90e2" />
              </svg>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-section">
          <div className="mission-card">
            <div className="mission-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="8" width="3" height="8" fill="#4a90e2" />
                <rect x="9" y="4" width="3" height="12" fill="#4a90e2" />
                <rect x="14" y="6" width="3" height="10" fill="#4a90e2" />
              </svg>
            </div>
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p>
                To democratize advanced analytics and demand forecasting, making
                predictive intelligence accessible to businesses of all sizes.
                We believe that every e-commerce company should have the tools
                to make data-informed decisions that drive growth and
                sustainability.
              </p>
              <h2 className="section-title">Our Vision</h2>
              <p>
                To become the leading platform for e-commerce intelligence,
                where businesses worldwide rely on our insights to optimize
                operations, reduce costs, and maximize profitability. We
                envision a future where data-driven decision-making is the
                standard, not the exception.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2 className="section-title centered">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="value-title">Precision</h3>
              <p className="value-description">
                We deliver accurate forecasting models that help businesses make
                data-driven decisions with confidence.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="value-title">Transparency</h3>
              <p className="value-description">
                Clear, understandable insights and methodologies that you can
                trust and verify.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-description">
                Working closely with our clients to understand their unique
                challenges and goals.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                Constantly evolving our algorithms and approaches to stay ahead
                of market trends.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2 className="section-title centered">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="team-name">Harsh Bansal</h3>
            </div>

            <div className="team-card">
              <div className="team-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="team-name">Shubhneet Kaur</h3>
            </div>

            <div className="team-card">
              <div className="team-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="team-name">Tanisha Agarwal</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
