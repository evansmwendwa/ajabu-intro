import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Welcome />
        <FAQ />
      </div>
      <Header />
    </div>
  );
}
