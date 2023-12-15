import React from "react";
import "./Brands.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myLogo1 from "../../assets/logo1.svg";
import myLogo2 from "../../assets/logo2.svg";
import myLogo3 from "../../assets/logo3.svg";
import myLogo4 from "../../assets/logo4.svg";
import myLogo5 from "../../assets/logo5.svg";
import myLogo6 from "../../assets/logo6.svg";

const Brands = () => {
  return (
    <div className="container">
      <div className="brand">
        <div className="brands-heading">
          <h2 className="brands-heading-h2">
            More than 12,000 businesses delight their customers with Help Scout
          </h2>
        </div>
        <div className="brand-col" style={{ marginTop: "3rem" }}>
          <div className="row">
            <div className="col-md-2">
              <img src={myLogo1} alt="" />
            </div>
            <div className="col-md-2">
              <img src={myLogo2} alt="" />
            </div>
            <div className="col-md-2">
              <img src={myLogo3} alt="" />
            </div>
            <div className="col-md-2">
              <img src={myLogo4} alt="" />
            </div>
            <div className="col-md-2">
              <img src={myLogo5} alt="" />
            </div>
            <div className="col-md-2">
              <img src={myLogo6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
