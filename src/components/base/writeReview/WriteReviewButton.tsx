import React from "react";
import styles from "./writeReviewsButton.module.scss";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
const WriteReviewButton = () => {
  const location = useLocation();
  return (
    <Link to={`${location.pathname}/write_review`}>
      <div className={styles.reviewBtn}>
        <div className={styles.uniReviewsIcon}>
          <AiOutlineEdit />
        </div>
        <span>
          <b>Write a Review!</b>
        </span>
      </div>
    </Link>
  );
};

export default WriteReviewButton;
