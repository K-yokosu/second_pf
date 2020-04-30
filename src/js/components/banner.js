import React from 'react';
import TopBanner from '../../image/top-banner.jpg';


const BackImageStyle = {
  backgroundImage: `url(${TopBanner})`,
};

const Banner = () => (
  <section className="main-banner" style={BackImageStyle}>
    <div className="main-banner_container">
      <h1 className="main-banner_title">CryptoTrend</h1>
      <p className="main-banner_discription">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </p>
    </div>
  </section>
);


export default Banner;
