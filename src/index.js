import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";

function TestStarRating() {
  const [movieRaiting, setMovieRaiting] = useState(0);

  return (
    <div>
      <StarRating
        maxRating={5}
        color={"red"}
        size={30}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={3}
        onSetRating={setMovieRaiting}
      />
      <p>This movies was rated {movieRaiting}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <TestStarRating />
  </React.StrictMode>
);
