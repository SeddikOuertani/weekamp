import React from "react";
import Block from "../../components/block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./home.style.css";
import headerBlockImage from "../../assets/images/camping_grounds1.webp";
import secondBlockImage from "../../assets/images/home-second-block-image.png";
import thirdBlockImage from "../../assets/images/home-third-block-image.png";
import fourthBlockImage from "../../assets/images/home-fourth-block-image.png";

const Home = (props) => {
  return (
    <div className="home-wrapper page-wrapper">
      <Block BgImage={headerBlockImage}>
        <div className="home-header-title-wrapper">
          <h1 className="home-header-title">WELCOME TO WEEKAMP</h1>
        </div>
        <p className="home-header-text">A website for campers</p>
      </Block>
      <Block>
        <div className="home-block-title-wrapper">
          <h2 className="home-block-title">CREATE YOUR OWN CAMPING EVENT</h2>
          <div className="underline" />
        </div>
        <div className="home-block-content">
          <div className="image-wrapper">
            <img className="image" src={secondBlockImage} alt="event" />
          </div>
          <div className="texts-wrapper">
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">Choose your favorite campsite</p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">Select the best date depending on weather</p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                Schedule your events with programs of your choice
              </p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">Select the best date depending on weather</p>
            </div>
          </div>
        </div>
      </Block>
      <Block Ref={props.BlockInvertedRef} Inverted={true}>
        <div className="home-block-title-wrapper">
          <h2 className="home-block-title">
            PARTICIPATE IN OTHER CAMPING EVENTS
          </h2>
          <div className="underline" />
        </div>
        <div className="home-block-content">
          <div className="texts-wrapper">
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                Browse through upcoming events using thorough filters
              </p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                Make friends with participants of the same event
              </p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">Schedule event you’re interested in</p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                Add photos and videos to the collaborative gallery of the event
              </p>
            </div>
          </div>
          <div className="image-wrapper">
            <img className="image" src={thirdBlockImage} alt="backpacker" />
          </div>
        </div>
      </Block>
      <Block>
        <div className="home-block-title-wrapper">
          <h2 className="home-block-title">HELP US EXPAND OUR CATALOGUE</h2>
          <div className="underline" />
        </div>
        <div className="home-block-content">
          <div className="image-wrapper">
            <img className="image" src={fourthBlockImage} alt="event" />
          </div>
          <div className="texts-wrapper">
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">You can suggest unlisted campsites</p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                You can expand the photo gallery of the campsites
              </p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                You can suggest new places of interest near campsites
              </p>
            </div>
            <div className="line">
              <div className="icon-wrapper">
                <FontAwesomeIcon className="icon" icon={faCheck} />
              </div>
              <p className="text">
                You can invite your friends to use our website
              </p>
            </div>
          </div>
        </div>
      </Block>
    </div>
  );
};

export default Home;
