import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SectionS.module.css";
import Fade from "react-reveal/Fade";

function Section() {
  return (
    <div className={classes.wrap}>
      <Fade bottom>
        <div className={classes.item__text}>
          <h1>Model S</h1>
          <p>Order Online for Touchless Delivery</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className={classes.btn__grp}>
          <div className={classes.left__btn}>Custom Order</div>
          <div className={classes.right__btn}>Existing Inventory</div>
        </div>
      </Fade>
      <img src={downArrow} alt="Down-Arrow" className={classes.down__arw} />
    </div>
  );
}

export default Section;
