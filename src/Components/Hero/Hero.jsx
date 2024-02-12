import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/New.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/Mens_2.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={hand_icon} alt="hand_icon" />
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
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_img} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
