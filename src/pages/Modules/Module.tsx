import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./module.module.scss";
const Module = () => {
  return (
    <div className={styles.moduleMain}>
      <Header />

      <div className={styles.moduleCont}>
        <div className={styles.topDiv}></div>
        <div className={styles.tabs}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Module;
