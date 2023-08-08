import { Link } from "react-router-dom";
import React from "react";
import tickImg from "../SubmitCard/tick.png";

function SubmitCard() {
  return (
    <>
      <section id="main">
        <div className="container">
          <img src={tickImg} alt="img" />
          <h3>Thank You!</h3>
          <p className="para2"> Booked Successfully .</p>
          <Link to={"/"}>
            <button id="btn1">OK</button>
          </Link>
        </div>
      </section>
    </>
  );
}
export default SubmitCard;
