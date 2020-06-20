import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import FAQ from "./components/FAQ";
import styled from "styled-components";

const Copyright = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 11px;
  color: #999;
`;

const date = new Date();

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Welcome />
        <FAQ />
      </div>
      <Header />
      <Copyright>
        &copy; {date.getFullYear()} Ajabu TV - All rights reserved.
      </Copyright>
    </div>
  );
}
