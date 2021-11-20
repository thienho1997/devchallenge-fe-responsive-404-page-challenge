import React from "react";
import scarryImageSrc from "../../assets/images/Scarecrow.png";
import "./styles/style.scss";

const Body = () => {
  return (
    <div className="body container">
      <section className="content">
        <div className="row">
          <div className="col-sm-6 scarry-image">
            <img
              className="img-fluid"
              src={scarryImageSrc}
              alt="scarry 404"
            ></img>
          </div>
          <div className="col-sm-6 notificaton">
            <h2 className="title">I have bad news for you</h2>
            <p className="description">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <button className="button-back">Back to homepage</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
