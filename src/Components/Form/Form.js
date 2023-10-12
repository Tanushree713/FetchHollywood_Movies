import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SubmitCard from "../SubmitCard/SubmitCard";

function BookTickets() {
  const { id } = useParams();
  const [movieName, setMovieName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [showSubmitCard, setShowSubmitCard] = useState(false);

  async function ticketForm() {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    setMovieName({
      name: response.data.name,
    });
  }

  useEffect(() => {
    ticketForm();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSubmitCard(true);
  };

  return (
    <>
      <div className="page">
        <h1 style={{ color: "#fff", marginTop: "0" }}>Booking Summary</h1>
        <form onSubmit={handleSubmit}>
          <div className="widthdiv">
            <label htmlFor="movieName">Movie Name:</label>
            <br />
            <input
              type="text"
              id="movieName"
              value={movieName.name}
              readOnly
              required
            />
          </div>
          <div className="widthdiv">
            <label htmlFor="date">Date:</label>
            <br />
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Time:</label>
            <br />
            <br />
            <div>
              <label>
                <input
                  type="radio"
                  value="9am-12pm"
                  checked={time === "9am-12pm"}
                  onChange={(e) => setTime(e.target.value)}
                />
                Shift 1 (9am - 12pm)
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="3pm-6pm"
                  checked={time === "3pm-6pm"}
                  onChange={(e) => setTime(e.target.value)}
                  defaultValue={time === "3pm-6pm"}
                />
                Shift 2 (3pm - 6pm)
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="9pm-12am"
                  checked={time === "9pm-12am"}
                  onChange={(e) => setTime(e.target.value)}
                />
                Shift 3 (9pm - 12am)
              </label>
            </div>
          </div>
          <div className="widthdiv">
            <br />
            <br />
            <label htmlFor="numTickets">Number of Tickets:</label>
            <br />
            <br />
            <input
              type="number"
              id="numTickets"
              value={numTickets}
              min={1}
              max={10}
              onChange={(e) => setNumTickets(parseInt(e.target.value))}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {showSubmitCard && <SubmitCard />}
    </>
  );
}

export default BookTickets;
