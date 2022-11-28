import React, {useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Main from "./layout/main";
import Navbar from "./layout/navbar";

//Lazily loaded into memory

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const blockInvertedRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(()=>{

  }, [setIsLoggedIn])

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="layout">
          {pathname !== "/login" ? <Navbar Id="navbar-backdrop" /> : null}
          {/* <Aside /> */}
          <Main BlockInvertedRef={blockInvertedRef} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
