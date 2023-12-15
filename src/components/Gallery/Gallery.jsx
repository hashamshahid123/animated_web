import React from "react";
import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import myImg4 from "../../assets/download.svg";
import myImg5 from "../../assets/img8.png";
import myImg6 from "../../assets/img6.png";

const Gallery = () => {
  return (
    <>
      <div className="cont">
        <div className="gallery-heading">
          <h2 className="heading-gallery">
            Your best work happens in Help Scout
          </h2>
        </div>
        <div className="gallery-box">
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "#171952" }}>
                <div className="card-body">
                  <p className="p-1">Delightful</p>
                  <div className="detail-flex">
                    <h2 className="h3-1">Customer Support</h2>
                  </div>
                </div>
                <img src={myImg5} className="card-img-bottom" alt="..." />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ backgroundColor: "#283338" }}>
                <div className="card-body">
                  <p className="p-2">Delightful</p>
                  <div className="detail-flex">
                    <h2 className="h3-2">Customer Support</h2>
                  </div>
                </div>
                <img src={myImg6} className="card-img-bottom" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
