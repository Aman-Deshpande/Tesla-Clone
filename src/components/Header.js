import React from "react";
import classes from "./Header.module.css";
import logo from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

function Header() {
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
        <a href="#">Tesla Account</a>
        <AiOutlineMenu className={classes.icon} />
      </div>
      <nav className={classes.burger__nav}>
        <div className={classes.close__nav}>
          <GrClose className={classes.icon}/>
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
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </nav>
    </div>
  );
}

export default Header;
