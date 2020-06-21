import React from "react";
import styled from "styled-components";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const SocialButtons = styled.div`
  position: relative;
  text-align: center;
  padding: 0 0 10px;

  h3 {
    font-size: 18px;

    @media(min-width: 1200px) {
      font-size: 22px;
    }
  }

  .buttons {
    padding-top: 15px;

    a {
      text-decoration: none;
    }

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin: 5px;
    }
  }
`;

export default function () {
  return (
    <SocialButtons>
      <h3>Visit our Social Media accounts for more streaming content</h3>
      <div className="buttons">
        <a
          href="https://web.facebook.com/AjabuTv?_rdc=1&_rdr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://twitter.com/AjabuTv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/ajabutv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
    </SocialButtons>
  )
}
