import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowDetails() {
  const { id } = useParams();
  const [showdetails, setDetails] = useState({});

  async function downloadMovies() {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setDetails({
      name: response.data.name,
      image: response.data.image.medium,
      summary: response.data.summary,
    });
  }

  useEffect(() => {
    downloadMovies();
  }, []);

  return (
    <>
      <div className="details">
        <div className="card2">
          <img className="movieImg" src={showdetails.image} />
          <div className="card_info">
            <h2 className="name-details">Title: {showdetails.name}</h2>
            <Link to={`form/${id}`}>
              <button>Book Movie Ticket</button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="summary-details">About The Movie </h1>
      <div className="about"> {showdetails.summary}</div>
    </>
  );
}
export default ShowDetails;
