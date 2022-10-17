import React from "react";
import Header from "../../components/header/Header";
import styles from "./home.module.scss";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.homeMain}>
      <Header />

      <div className={styles.homeBody}>
        <h1>WELCOME TO DISCOURSE</h1>
        <p>
          A students guide to navigating their academic choices, from the
          perspective of students who have done or experienced them before.
        </p>

        <div className={styles.dropdowns}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
