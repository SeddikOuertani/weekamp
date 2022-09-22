import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import PageExample from "./pages/pageExample";
import PageExample2 from "./pages/pageExample2";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to={"/page-example1"} />}></Route>
          <Route path="/page-example1" element={<PageExample />}></Route>
          <Route path="/page-example2" element={<PageExample2 />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
