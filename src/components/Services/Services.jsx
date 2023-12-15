import React from "react";
import "./Services.css";
import myImg3 from "../../assets/img3.jpg";
import myImg12 from "../../assets/img12.png";
import myImg13 from "../../assets/img13.jpg";

const Services = () => {
  return (
    <div className="container">
      <div className="Service-box">
        <div className="service-img">
          <img src={myImg12} alt="" className="img-service-1" />
          <img src={myImg3} alt="" className="img-service" />
        </div>
        <div className="service-heading">
          <p className="service-heading-1">
            {" "}
            Our team was able to teach themselves Help Scout in a day. It’s like
            using a shared email inbox — just way more robust and better
            looking.
          </p>
          <div className="child-img">
            <img src={myImg13} alt="" className="child-img1" />
            <p className="service-heading-2">Brianne Henderlong</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
