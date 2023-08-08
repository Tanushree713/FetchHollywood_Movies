import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowDetails from "./Components/MoviesDetails/MoviesDetails.js";
import ShowData from "./Components/Moviesdata/Moviesdata.js";
import "./App.css";
import BookTickets from "./Components/Form/Form.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ShowData />} />
          <Route exact path="/showdetails/:id" element={<ShowDetails />} />
          <Route path="/showdetails/:id/form/:id" element={<BookTickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
