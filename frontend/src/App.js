import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/navbar";
import Home from "./pages/home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { isLoggedIn: true };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        {this.isLoggedIn ? <Navbar /> : null}
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
