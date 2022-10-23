import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { NewReviewModal } from "../../components/NewReviewModal/NewReviewModal";
import styles from "./writeReview.module.scss";
const WriteReview = () => {
  return (
    <div className={styles.writeReviewMain}>
      <Header />
      <div className={styles.writeReviewCont}>
        <h1>University of the Western Cape</h1>

        <div className={styles.writer}>
          <NewReviewModal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WriteReview;
