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
    font-size: 22px;
  }

  .buttons {
    padding-top: 15px;

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
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
      </div>
    </SocialButtons>
  )
}
