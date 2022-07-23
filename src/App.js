import React from "react";
import "./App.css";
import Error from "./404";
import SunMoon from "./SunMoon";
import Fullscreen from "./Fullscreen";

export default function App() {
  // window.oncontextmenu = function () {
  //   console.log("Right Click Disabled");
  //   return false;
  // };
  return (
    <>
      <SunMoon />
      <Error />
      <div className="absolute top-0 right-0 z-[1]"><Fullscreen /></div>
    </>
  );
}
