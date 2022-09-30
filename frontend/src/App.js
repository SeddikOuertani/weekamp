import React, { Component } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Carousel from "./components/carousel";
import Main from "./layout/main";
import Navbar from "./layout/navbar";

//Lazily loaded into memory

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  componentDidMount() {
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <div className="layout">
            <Navbar />
            <Carousel/>
            {/* <Aside /> */}
            <Main />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
