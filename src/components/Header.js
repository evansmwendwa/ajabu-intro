
import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  position: fixed;
  width: 100%;
  background: #000;
  color: #FE6A00;
  top: 0;
  left: 0;

  .container {
    position: relative;
    height: 70px;
  }

  .tagline {
    position: absolute;
    right: 0;
    top: 25px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    display: none;

    @media(min-width: 700px) {
      display: block;
      margin-right: 30px;
    }

    @media(min-width: 1080px) {
      margin-right: 0;
    }
  }

  .logo {
    position: absolute;
    top: 13px;
    height: 45px;
    line-height: 45px;
    padding-left: 60px;
    left: 50%;
    margin-left: -75px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    font-size: 20px;

    @media(min-width: 700px) {
      left: 0;
      margin-left: 30px;
    }

    @media(min-width: 1080px) {
      margin-left: 0;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: auto;
      height: 100%;
      border-radius: 50%;
    }

    span {
      color: #FE6A00;
    }
  }
`;

export default function Header() {
  return (
    <AppHeader>
      <div className="container">
        <div className="logo">
          <img src="/logo.jpeg" className="App-logo" alt="logo" />
          Ajabu <span>TV</span>
        </div>

        <div className="tagline">Watch breaking news, humor, quizzes, trending and more</div>
      </div>

    </AppHeader>
  );
}
