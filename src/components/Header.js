import React, { useState } from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Fade from "react-reveal/Fade";

function Header() {
  const [sideNav, setSideNav] = useState(false);

  const sideNavToggle = () => {
    setSideNav(!sideNav);
  };

  return (
    <div className={classes.container}>
      <a>
        <img src={logo} alt="" />
      </a>
      <div className={classes.menu}>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </div>
      <div className={classes.right__menu}>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <AiOutlineMenu className={classes.icon} onClick={sideNavToggle} />
      </div>
      {sideNav && (
        <Fade right>
          <nav className={classes.burger__nav}>
            <div className={classes.close__nav}>
              <GrClose className={classes.icon} onClick={sideNavToggle} />
            </div>
            <li>
              <a href="#">Existing Inventory</a>
            </li>
            <li>
              <a href="#">Used Inventory</a>
            </li>
            <li>
              <a href="#">Trade-in</a>
            </li>
            <li>
              <a href="#">Cyber Truck</a>
            </li>
            <li>
              <a href="#">Roadaster</a>
            </li>
            <li>
              <a href="#">Test Drive</a>
            </li>
            <li>
              <a href="#">Powerwall</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </nav>
        </Fade>
      )}
    </div>
  );
}

export default Header;
