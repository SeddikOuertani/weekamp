import React, { Component, useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Main from "./layout/main";
import Navbar from "./layout/navbar";

//Lazily loaded into memory

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      blockInvertedRef: React.createRef(null),
      pathname: window.location.pathname,
    };
  }

  runNavbarAnimation(toggle) {
    let navbarElement = document.getElementById("navbar-backdrop");
    if (toggle) {
      navbarElement.classList.add("animation");
    } else {
      navbarElement.classList.remove("animation");
    }
  }

  addingScrollListener() {
    window.addEventListener("scroll", () => {
      if (
        (window.scrollY >= 0 && window.scrollY < 50) ||
        window.scrollY >= 50 + window.innerHeight
      ) {
        this.runNavbarAnimation(true);
      } else {
        this.runNavbarAnimation(false);
      }
    });
  }

  componentDidMount() {
    this.addingScrollListener();
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <div className="layout">
            <Navbar Id="navbar-backdrop" />
            {/* <Aside /> */}
            <Main BlockInvertedRef={this.blockInvertedRef} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
