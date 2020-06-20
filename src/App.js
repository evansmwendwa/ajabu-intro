import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Welcome />
      </div>
    </div>
  );
}
