import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <div className=" text-center">
          <div className="card-body">
            <h4 className="card-title-h5">GET STARTED</h4>
            <p className="card-text-contact">
              Learn the platform in less than an hour. <br /> Become a power
              user in less than a day.
            </p>
            <a href="#" className="btn btn-primary">
              Free 15-Day Trial
            </a>
            <a href="#" className="btn btn-light">
              Get a Demo
            </a>
          </div>
        </div>
        <div
          className="card card-5"
          style={{
            marginTop: "4.5rem",
            position: "absolute",
            borderBottomRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            marginRight: "2rem",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">Customer-centric inspiration</h5>
            <p className="card-text">
              A quarterly publication for curious people who want to lead with
              values..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
