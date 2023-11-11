import Header from "../Components/Header/Header";
import SideBar from "../Components/Sidebar/SideBar";
import { useEffect, useState } from "react";
import { useRef } from "react";

import React from "react";

const DefaultLayout = ({ children }) => {
  // State for Sidebar
  const elementRef = useRef();
  const [showSideBar, setshowSideBar] = useState(false);

  const handleOnClickOut = (e) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(e.target) &&
      !e.target.matches("#Header_MenuIcon") &&
      !e.target.matches("svg") &&
      !e.target.matches("path") &&
      // e.target.matches("overlay") &&
      window.innerWidth <= 849
    ) {
      setshowSideBar(false);
    }
  };

  useEffect(() => {
    // Show/hide SideBar when the App is opened ([desktop] != [tablet & phone])
    if (window.innerWidth > 1280) {
      setshowSideBar(true);
    } else {
      setshowSideBar(false);
    }
    // Hide the Sidebar when we click out and the content is overlay
    document.addEventListener("click", handleOnClickOut);
    return () => {
      document.removeEventListener("click", handleOnClickOut);
    };
  }, []);

  // The state for the layout
  const [marginLeft, setMarginLeft] = useState("ml-[66px]");

  // Overlay on Tablet & Phone when show the Sidebar
  // Handle new layout on Desktop when show the Sidebar
  useEffect(() => {
    setMarginLeft("ml-[66px]");
    if (window.innerWidth > 1280 && showSideBar) {
      setMarginLeft("ml-[250px]");
    }
  }, [showSideBar]);

  return (
    <div>
      <Header
        showSideBar={showSideBar}
        setShowSideBar={setshowSideBar}
      ></Header>
      <div className="w-full flex mt-[66px] md:mt-[55px] relative">
        <SideBar showSideBar={showSideBar} elementRef={elementRef}></SideBar>
        <div className={`Main_Container ${marginLeft} w-full bg-[#f8f9fa]`}>
          {children}
        </div>
        {/* {showSideBar && window.innerWidth <= 849 && (
          <div
            id="overlay"
            className="overlay absolute inset-0 z-30 bg-slate-200"
          ></div>
        )} */}
      </div>
    </div>
  );
};

export default DefaultLayout;
