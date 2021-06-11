import React from 'react';
import Head from 'next/head';

const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>{title} · Fernando Briceño</title>

      {/* FACEBOOK & OTHER SITES */}
      <meta property="og:title" content={`${title} · Fernando Briceño`} />
      <meta
        property="og:description"
        content="I'm Fernando Briceño, a Software Engineer from Costa Rica, who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills"
      />
      <meta property="og:image" content="https://i.imgur.com/THcx242.png" />
      <meta property="og:url" content="https://www.fernando.gg/" />

      {/* TWITTER CARD */}
      <meta name="twitter:title" content={`${title} · Fernando Briceño`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@scriptkash" />
      <meta name="twitter:image" content="https://i.imgur.com/THcx242.png" />
      <meta name="twitter:creator" content="@ScriptKash" />
      <meta
        name="twitter:description"
        content="I'm Fernando Briceño, a Software Engineer from Costa Rica, who loves and is passionate about technology and video games. Trained to solve problems with different solutions using programming skills."
      />
      <meta name="twitter:image" content="./assets/images/avatar.jpg" />
    </Head>
  );
};

export default HeadComponent;
