import React, { useEffect, useState } from "react";
import "./carousel.style.css";
import campImg1 from "../../assets/images/camping_grounds5.jpg";
import campImg2 from "../../assets/images/camping_grounds4.jpg";
import campImg3 from "../../assets/images/camping_grounds3.jpg";
import campImg4 from "../../assets/images/camping_grounds2.jpg";
import campImg5 from "../../assets/images/camping_grounds1.webp";
import { useLocation } from "react-router-dom";

const Carousel = (props) => {
  const { pathname } = useLocation();
  const [image, setImage] = useState(campImg5);

  // Slider image
  const changeImage = () => {
    switch (pathname) {
      case "/home":
        setImage(campImg5);
        break;
      case "/addevent":
        setImage(campImg2);
        break;
      case "/events":
        setImage(campImg3);
        break;
      case "/campsites":
        setImage(campImg4);
        break;
      default:
        setImage(campImg1);
    }
  };

  useEffect(()=>{
    changeImage();
    console.log(image);
  }, [pathname])

  return (
    <div className="carousel-wrapper">
      <img className="image" src={image} alt="camping grounds"/>
    </div>
  );
};

export default Carousel;
