import React from "react";
import styles from "./logo.module.scss";
import { SlGraduation } from "react-icons/sl";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/home">
      <div className={styles.logo}>
        <SlGraduation />
        <span>DisCourse</span>
      </div>
    </Link>
  );
};

export default Logo;
