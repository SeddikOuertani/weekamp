import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./App.css";
import Main from "./layout/main";
import Navbar from "./layout/navbar";

//Lazily loaded into memory

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const blockInvertedRef = useRef(null);


  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="layout">
          <Navbar Id="navbar-backdrop" />
          {/* <Aside /> */}
          <Main BlockInvertedRef={blockInvertedRef} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
