import React from "react";
import styles from "./writeReviewsButton.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const WriteReviewButton = () => {
  return (
    <div className={styles.reviewBtn}>
      <div className={styles.uniReviewsIcon}>
        <AiOutlineEdit />
      </div>
      <span>
        <b>Write a Review!</b>
      </span>
    </div>
  );
};

export default WriteReviewButton;
