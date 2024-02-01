"use client"
import React, { useEffect, useRef } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
// import Scrollbar from 'smooth-scrollbar';


type OverscrollEffect = "bounce" | any;
 const Test = () => {




  
  return (
    <div className="App">
      <h1>SMOOTH-SCROLLBAR-REACT</h1>

      <div
        className="sample-container "
        style={{ maxHeight: 50, display: "flex" }}
      >
        
        <Scrollbar
          plugins={{
            overscroll: {
              effect: "bounce" as OverscrollEffect

            }
          }}
     
        >
        {Array.from({ length: 50 }, (_, i) => (
            <div key={i}>{i}</div>
          ))}
        </Scrollbar>
      </div>

    </div>
  );
};

export default Test;
