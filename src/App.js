import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Welcome />
        <FAQ />
      </div>
    </div>
  );
}
