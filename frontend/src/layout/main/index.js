import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddProgram } from "../../pages/addprogram";
import Events from "../../pages/events";
import Home from "../../pages/home";
import "./main.style.css";

const AddEvent = React.lazy(() => import("../../pages/addevent"));

const Main = (props) => {
  return (
    <div className="main-wrapper">
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}></Route>
        <Route path="/home" element={<Home BlockInvertedRef={props.BlockInvertedRef}/>}></Route>
        <Route
          path="/events/addevent"
          element={
            <React.Suspense fallback={<>loading ...</>}>
              <AddEvent />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/events"
          element={
            <React.Suspense fallback={<>loading ...</>}>
              <Events />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/events/addevent/addprogram"
          element={
            <React.Suspense fallback={<>loading ...</>}>
              <AddProgram />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;
