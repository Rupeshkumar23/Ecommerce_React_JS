import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/New.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/shop1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={hand_icon} alt="hand_icon"aria-hidden="true" />
          </div>
          <p>Collections</p>
          <main className="container">
            <section className="animation">
              <div className="first">
                <div>Exceptional Styles</div>
              </div>
              <div className="second">
                <div>Uncover Trends</div>
              </div>
              <div className="third">
                <div>Personalized Selections</div>
              </div>
            </section>
          </main>
        </div>
        <div className="hero_latest_btn">
        <div role="button" id="Button"  title="Explore our latest collection" aria-label="Explore our latest collection">Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" aria-hidden="true" />
        </div>
      </div>
      <div className="hero_right">
        <img  src={hero_img} alt="hero_img"data-aos="fade-zoom-in" />
      </div>
    </div>
  );
};

export default Hero;
