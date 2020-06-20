
import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  position: relative;
`;

export default function Header() {
  return (
    <header className="app-header">
      <div>
        <img src="/logo.jpeg" className="App-logo" alt="logo" />
                Ajabu <span>TV</span>
      </div>

      <div>Watch breaking news, humor, quizzes, trending and more</div>
    </header>
  );
}
