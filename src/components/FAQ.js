import React from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
  padding: 50px;
  background: #F1F1F1;
`;

const FaqContent = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export default function () {
  return (
    <FaqContainer>
      <FaqContent>
        <h2>Frequently Asked Questions</h2>
        <h3>How Can I send a video to Ajabu TV?</h3>
        <p><strong>4 easy Ways:</strong></p>
        <ol>
          <li>
            Email info@tafsiri.com with a link or a description of the video. Videos you send should be videos you shot or have permission to share.
          </li>
          <li>
            Please fill our submission form to upload/ send the file
          </li>
          <li>
            Send the file through wetransfer.com or any other file sending site to info@tafsiri.com
          </li>
          <li>
            Send the video on WhatsApp to +254781054084
          </li>
        </ol>

        <p>
          <strong>What happens when I send a video to Ajabu TV?</strong>
        </p>

        <p>
          We share videos with publishers, advertisers and include it in our in house productions. We aim to maximize the commercial potential of your video.
        </p>

        <h3>How can I earn money?</h3>
        <p><strong>2 transparent ways to make money:</strong></p>
        <ol>
          <li><strong>Buyout/ Direct purchase</strong> - we buy your video outright</li>
          <li><strong>Partnership</strong> -  We promote and market your video to multiple international partners and work hard to monetize the video through all available avenues and split the revenue with you. You will get frequent updates on how your video is performing.</li>
        </ol>

        <p>
          <strong>Do I have to have many videos?</strong>
        </p>
        <p>
          No. You don’t have to have many videos. Send one or more videos.
        </p>
        <p>
          <strong>What type of videos do you take?</strong>
        </p>
        <p>Any video can work- Clients look for all sorts of videos and people online respond to different types of videos. Cute, funny, dramatic, strange, weird, pets, bike/ boda boda/okada stunts, etc anything goes.</p>
        <p>
          <strong>Why should I work with Ajabu TV?</strong>
        </p>
        <p>Ajabu TV is part of the Haiya TV and Tafsiri Group Network. We specialize in providing user-generated video content to newsrooms and publishers worldwide. We also leverage user generated content for brand campaigns offering our content partners multiple revenue streams and our brand partners unlimited options and possibilities.</p>
        <p><strong>How much Money can I make?</strong></p>
        <p>The amount depends on the video, how well it does, if it’s licensed or used in a campaign. We do our best to market every video because different people like different things and we don’t get paid unless you get paid. So we are in this together. That’s why we are partners ☺</p>
        <p>
          <strong>How do I get paid?</strong>
        </p>
        <p>Once your videos start generating revenue. We will send you monthly or quarterly reports (depending on revenue size) showing you how it’s performing. Payments over 50 dollars will be paid monthly through mobile money channels or paypal.</p>
        <p>
          <strong>Exclusive Licensing – Why is this important?</strong>
        </p>
        <p>Exclusive licensing is important to us because we spend a lot of money marketing your video and shaping content around it to help it monetize. So it’s important that we manage the licensing to help you make money. However, we are open to working with any other company that wants to partner in monetizing the video and would split revenue with them too. We strongly believe that the more options your video has to monetize the better for all of us.</p>
      </FaqContent>
    </FaqContainer>
  )
}
