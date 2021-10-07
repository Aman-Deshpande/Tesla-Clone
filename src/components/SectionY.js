import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SectionY.module.css";

function SectionY() {
  return (
    <div className={classes.wrap}>
      <div className={classes.item__text}>
        <h1>Model Y</h1>
        <p>Order Online for Touchless Delivery</p>
      </div>
      <div className={classes.btn__grp}>
        <div className={classes.left__btn}>Custom Order</div>
        <div className={classes.right__btn}>Existing Inventory</div>
      </div>
      <img src={downArrow} alt="Down-Arrow" className={classes.down__arw} />
    </div>
  );
}

export default SectionY;
