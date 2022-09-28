import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import "./main.style.css";

const AddEvent = React.lazy(() => import("../../pages/addevent"));

const Main = (props) => {
  return (
    <div className="main-wrapper">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/addevent"
          element={
            <React.Suspense fallback={<>loading ...</>}>
              <AddEvent/>
            </React.Suspense>
          } 
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;
