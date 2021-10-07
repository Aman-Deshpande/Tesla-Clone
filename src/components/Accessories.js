import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./Accessories.module.css";
import Fade from "react-reveal/Fade";

function Accessories() {
  return (
    <div className={classes.wrap}>
      <Fade bottom>
        <div className={classes.item__text}>
          <h1>Accessories</h1>
          <p>Money-back guarantee</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.btn__grp}>
          <div className={classes.left__btn}>Shop Now</div>
        </div>
      </Fade>
      <img src={downArrow} alt="Down-Arrow" className={classes.down__arw} />
    </div>
  );
}

export default Accessories;
