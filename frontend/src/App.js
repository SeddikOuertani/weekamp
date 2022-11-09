import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "./App.css";
import Main from "./layout/main";
import Navbar from "./layout/navbar";

//Lazily loaded into memory

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { pathname } = useLocation();
  const blockInvertedRef = useRef(null);

  const runNavbarAnimation = (toggle) => {
    let navbarElement = document.getElementById("navbar-backdrop");
    if (toggle) {
      navbarElement.classList.add("animation");
    } else {
      navbarElement.classList.remove("animation");
    }
  };

  const navbarAnimateToggle = () => {
    if (
      (window.scrollY >= 0 && window.scrollY < 50) ||
      window.scrollY >= 50 + window.innerHeight
    ) {
      runNavbarAnimation(true);
    } else {
      runNavbarAnimation(false);
    }
  };

  const addingScrollListener = (pathname) => {
    if (pathname === "/home") {
      window.addEventListener("scroll", navbarAnimateToggle);
    } else {
      window.removeEventListener("scroll", navbarAnimateToggle);
      runNavbarAnimation(false);
    }
  };

  useEffect(() => {
    addingScrollListener(pathname);
  }, [pathname]);

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
