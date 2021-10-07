import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SectionThree.module.css";

function Secton3() {
  return (
    <div className={classes.wrap}>
      <div className={classes.item__text}>
        <h1>Model 3</h1>
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

export default Secton3;
