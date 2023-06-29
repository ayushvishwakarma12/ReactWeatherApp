import React from "react";
import CurrentLocation from "./components/Location/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div> 
    </React.Fragment>
  );
}

export default App;
