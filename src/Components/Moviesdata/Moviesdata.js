import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../MoviesCards/Cards";

const ShowData = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      console.log(response.data)
      setShows(response.data);
    });
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="show-list">
        {shows.length > 0 ? (
          shows.map((show) => (
            <Cards
              key={show.id}
              imagesrc={show.image.medium}
              title={show.name}
              rating={show.rating.average}
              genre={show.genres.join(" , ")}
              status={show.status}
              id={show.id}
            />
          ))
        ) : (
          <p>Oops! Data is not found.</p>
        )}
      </div>
    </div>
  );
};

export default ShowData;
