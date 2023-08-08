import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imagesrc} className="card_img" />
          <div className="card_info">
            <h2 className="card_title">{props.title}</h2>
            <h4 className="card_category">Rating: {props.rating}</h4>
            <p className="card_category">Genre: {props.genre}</p>
            <p className="card_category">Status: {props.status}</p>

            <Link to={`/showdetails/${props.id}`}>
              <button>View Summary</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
