
import React from "react";
import styled from "styled-components";
import ResponsiveEmbed from "react-responsive-embed";
import SubscribeForm from "./Form";
import SocialMedia from "./Social";

const Welcome = styled.div`
  position: relative;
  background: #fff;
  padding: 15px;

  .welcome-content {
    display: block;

    @media(min-width: 1000px) {
      display: flex;
    }

    .video {
      width: 100%;
      padding: 15px;

      @media(min-width: 1000px) {
        width: 50%;
      }
    }

    .intro {
      width: 100%;
      padding: 15px;

      @media(min-width: 1000px) {
        width: 50%;
      }

      h2 {
        font-weight: 500;
        font-size: 26px;
        margin-top: 0;
      }
    }
  }

  h3 {
    margin: 20px 0 3px 0;
    font-weight: 500;
  }

  .subscribe-form {
    padding: 0 15px;
  }
`;

export default function Header() {
  return (
    <Welcome>
      <div className="welcome-content">
        <div className="video">
          <ResponsiveEmbed src='https://www.youtube.com/embed/nZdLTrHmbBE?autoplay=1&controls=0&loop=1' />
        </div>
        <div className="intro">
          <h2>We have a story to tell</h2>
          <p>Out with the old - In with Ajabu TV, a new way to earn money, discover and enjoy great content.</p>
          <p>
            For brands, it’s the freshest way to connect with your target audience in exciting new ways,
            leveraging on user generated content. Let’s partner to build campaigns that resonate and put
            money back in your clients’ pockets.
        </p>
          <p>
            Ajabu TV curates and produces real life programming that people love to watch.
            But what gets us excited is putting money in people’s pockets.
        </p>
          <p>
            We are wholly powered by people like you. People who chose to make their phones
            and cameras work for them instead of the other way around.
        </p>
          <p><strong>Call +1-818-626-2865 or Email info@tafsiri.com</strong></p>
        </div>
      </div>

      <div className="subscribe-form">
        <SubscribeForm />
      </div>

      <SocialMedia />
    </Welcome>
  );
}
