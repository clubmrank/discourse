import React from "react";
import styles from "./logo.module.scss";
import { SlGraduation } from "react-icons/sl";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <SlGraduation />
      <span>DisCourse</span>
    </div>
  );
};

export default Logo;
