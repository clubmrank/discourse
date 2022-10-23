import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./module.module.scss";
import { Rate } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import ModuleTabs from "../../components/ModuleRatingTabs/Tabs/ModuleTabs";
import WriteReviewButton from "../../components/base/writeReview/WriteReviewButton";
const Module = () => {
  return (
    <div className={styles.moduleMain}>
      <Header />

      <div className={styles.moduleCont}>
        <div className={styles.topDiv}>
          <div className={styles.uniTop}>
            <div>
              <p>University of the Western Cape</p>
              <h1>COMPUTER SCIENCE 101</h1>
            </div>
            <WriteReviewButton />
          </div>
          <div className={styles.topRating}>
            <h3>12 Reviews!</h3>
            <div
              style={{
                backgroundColor: "#fff",
                width: "200px",
                borderRadius: "20px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rate allowHalf defaultValue={3.5} />
            </div>
          </div>
        </div>
        <div className={styles.tabs}>
          <ModuleTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Module;
