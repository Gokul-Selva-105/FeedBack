import React from "react";
import Close from "./assets/Close.svg";
import Emoji from "./Emoji";
import star from "./assets/star-struck.png";
import bad from "./assets/bad.png";
import good from "./assets/good.png";
import worst from "./assets/worst.png";
import ok from "./assets/ok.png";
import christmas from "./assets/christmas-hat.png"

function MainCont() {
  return (
    <>
    <img src={christmas} id="hat" />
      <div className="indexOut">
        <img src={Close} className="Close" />
        <h1>We Value Your feedback!</h1>
        <p>
          Your feedback is invaluable in shaping a better shopping journey for
          you and
        </p>
        <p>
          others. Thank you for being a part of our commitment to excellence!
        </p>

        <div className="emoList">
          <Emoji img1={worst} img1p={"Terrible"} />
          <Emoji img1={bad} img1p={"Bad"} />
          <Emoji img1={ok} img1p={"Okay"} />
          <Emoji img1={good} img1p={"Good"} />
          <Emoji img1={star} img1p={"Amazing"} />
        </div>
        <h2>Share Your feedback</h2>
        <div className="fotter">
          <div className="Message">
            <input type="text" className="Msg"  placeholder="Message" maxLength={53}/>
          </div>
          <button className="btn">Send feedback</button>
        </div>
      </div>
    </>
  );
}

export default MainCont;
