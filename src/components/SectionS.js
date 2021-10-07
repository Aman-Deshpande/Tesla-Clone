import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SectionS.module.css";

function Section() {

  return (
    <div className={classes.wrap}>
      <div className={classes.item__text}>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </div>
      <div className={classes.btn__grp}>
        <div className={classes.left__btn}>Custom Order</div>
        <div className={classes.right__btn}>Existing Inventory</div>
      </div>
      <img src={downArrow} alt="Down-Arrow" className={classes.down__arw}/>
    </div>
  );
}

export default Section;
