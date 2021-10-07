import React from "react";
import downArrow from "../images/down-arrow.svg";
import classes from "./SolarRoof.module.css";
import Fade from "react-reveal/Fade";

function SolarRoof() {
  return (
    <div className={classes.wrap}>
      <Fade bottom>
        <div className={classes.item__text}>
          <h1>Solar for New Roofs</h1>
          <p>Solar Roof costs less Than a New Roof Plus Solar Panels</p>
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

export default SolarRoof;
