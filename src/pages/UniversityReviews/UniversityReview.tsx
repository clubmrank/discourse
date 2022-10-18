import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./universities.module.scss";
import { AiOutlineEdit } from "react-icons/ai";

const UniversityReview = () => {
  return (
    <div className={styles.uniMain}>
      <div className={styles.uniCont}>
        <div className={styles.uniTop}>
          <h1>University of the western cape courses</h1>
          <div className={styles.topRight}>
            <div className={styles.uniReviewsIcon}>
              <AiOutlineEdit />
            </div>
            <span>
              <b>Write a Review!</b>
            </span>
          </div>
        </div>
        <div className={styles.uniReviews}></div>
      </div>
    </div>
  );
};

export default UniversityReview;
