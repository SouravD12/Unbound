import React from "react";
import "./herostyles.css";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="section-left">
          <a id="templates" href="/">
            Back to Templates
          </a>
          <div>
            <h1>MULTOR</h1>
            <p>
              Schedule more virtual appointments, online classes, and video
              consultations with this high-converting lead capture template.
            </p>
            <button className="btn-secondary">MAKE IT YOURS</button>
          </div>
        </div>
        <div className="section-right">
          <a href="/">Back to Templates</a>
          <h1>Category</h1>
          <p>
            Agency Lead
            Generation|Consulting|Ecourse|Events|Featured|Health|Landing
            Pages|Lead Generation|Medical|Webinar|WordPress
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
