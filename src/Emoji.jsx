import "./App.css";
import React from "react";

function Emoji({img1,img1p}) {
  return (
    <>
      <div className="outlin">
        <img src={img1}/>
        <p>{img1p}</p>
      </div>
    </>
  );
}

export default Emoji;
