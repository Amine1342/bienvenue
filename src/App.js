import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Result from "./Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Result />
    </div>
  );
}

export default App;
