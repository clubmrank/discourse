import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./universities.module.scss";
const Universities = () => {
  return (
    <div className={styles.universtiesMain}>
      <Header />
      <Footer />
    </div>
  );
};

export default Universities;
