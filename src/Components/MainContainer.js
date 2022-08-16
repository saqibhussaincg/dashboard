import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";

import Card1 from '../img/card1.jpg';
import Card2 from '../img/card2.jpg';
import Card3 from '../img/card3.jpg';
import Card4 from '../img/card4.jpg';
import Card5 from '../img/card5.jpg';
import Card6 from '../img/card6.jpg';

import CardMain from "./CardMain";
const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexdander Vernof</p>
            <div className="bid">
              <a href="#" className="button1">Bid Now</a>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div> 
        {/* BANNER SECTION END */}

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">Popular</a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button1">All</a>
              <a href="#" className="button2">Illustration</a>
              <a href="#" className="button2">Art</a>
              <a href="#" className="button2">Games</a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
          </main>
        </div>
      </div>


      <div className="right"></div>
    </div>
  );
};

export default MainContainer;
