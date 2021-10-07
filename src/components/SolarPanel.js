import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SolarPanel.module.css";

function SolarPanel() {

  return (
    <div className={classes.wrap}>
      <div className={classes.item__text}>
        <h1>Lowest Cost Solar Panels in America</h1>
        <p>Money-back guarantee</p>
      </div>
      <div className={classes.btn__grp}>
        <div className={classes.left__btn}>Custom Order</div>
        <div className={classes.right__btn}>Existing Inventory</div>
      </div>
      <img src={downArrow} alt="Down-Arrow" className={classes.down__arw}/>
    </div>
  );
}

export default SolarPanel;