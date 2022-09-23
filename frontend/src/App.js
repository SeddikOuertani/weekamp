import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Aside from "./layout/aside";
import Main from "./layout/main";
import Navbar from "./layout/navbar";
import Home from "./pages/home";

//Lazily loaded into memory
const AddEvent = React.lazy(() => import("./pages/addevent"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ? (
          <div className="layout">
            <Navbar />
            <Aside />
            <Main>
              <Routes>
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/addevent" element={<AddEvent />}></Route>
              </Routes>
            </Main>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
