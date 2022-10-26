import React from "react";
import styles from "./modulecard.module.scss";
import { Rate } from "antd";

export interface IProps {
  universityName: string;
  courseName: string;
  rating: number;
  reviewCount: number;
  reviewText: string;
}

export const ModuleCard = ({
  courseName,
  rating,
  reviewCount,
  reviewText,
  universityName,
}: IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__left}>
          <h2>{universityName}</h2>
          <h1>{courseName}</h1>
        </div>
        <div className={styles.card__right}>
          <div className={styles.review__container}>
            <Rate
              allowHalf={true}
              disabled={true}
              allowClear={false}
              value={rating}
            />
          </div>
          <h4>{reviewCount > 1 ? `${reviewCount} REVIEWS` : "1 REVIEW"}</h4>
        </div>
      </div>
      <div className={styles.card__bottom}>
        <p>
          {`${reviewText.slice(0, 200)}...`}
          {reviewText.length > 200 && (
            <span className={styles.readmore}>Read more...</span>
          )}
        </p>
      </div>
    </div>
  );
};
