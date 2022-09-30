import React from "react";
import "./home.style.css";

const Home = (props) => {
  return (
    <div className="home-wrapper page-wrapper">
      <div className="page-header">
        <h1 className="page-title">welcome !</h1>
        <p className="page-description">
          Please browse the list below for camping events you might be
          interested in
        </p>
      </div>
      <div className="page-body">
      </div>
    </div>
  );
};

export default Home;
