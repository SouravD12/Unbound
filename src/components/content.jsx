import React from "react";
import "./contentstyles.css";
const Content = () => {
  return (
    <>
      <div className="content-container">
        <div className="info">
          <div className="heading">
            <h2>MULTOR</h2>
          </div>
          <div className="content">
            <h1>
              Describe the <br /> value of booking <br /> an appointment
            </h1>
            <p>
              No need to get clever. Tell people exactly what <br /> you're
              offering, then use this space to <br /> communicate your key value
              proposition.
            </p>
          </div>
        </div>
        <div className="form-container">
          <form className="form" action="">
            <h1>
              Schedule an <br /> Appointment
            </h1>
            <p>
              Here, let visitors know what will happen when <br /> they complete
              your form.
            </p>
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
            <input type="email" placeholder="E-Mail *" required />
            <input type="number" placeholder="Phone Number *" required />
            <input type="text" placeholder="Type of Appointment *" required />
            <button className="btn-schedule">SCHEDULE NOW</button>
          </form>
        </div>
        <div className="benefits">
          <div className="benefit-1">
            <h1>
              <i class="fa-solid fa-tv"></i> Benefit 1
            </h1>
            <p>
              Highlight the benefits of signing up for an <br /> appointment,
              online class, or video consultation.
            </p>
          </div>
          <div className="benefit-2">
            <h1>
              <i class="fa-regular fa-heart"></i> Benefit 2
            </h1>
            <p>
              For example, fitness instructors might describe how <br /> their
              routines make people healthier *and* happier.
            </p>
          </div>
          <div className="benefit-3">
            <h1>
              <i class="fa-light fa-ribbon"></i> Benefit 3
            </h1>
            <p>
              Remind visitors how easy it is to claim your offer <br /> and
              start enjoying the benefits.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
