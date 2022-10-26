import React from "react";
import styles from "./reviewCard.module.scss";
import { Rate, Space } from "antd";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
export interface IProps {
  rating: number;
  reviewText: string;
  author: string;
  date: string;
}
const ReviewCard = ({ rating, reviewText, date, author }: IProps) => {
  const postLike = () => {
    fetch("https://discoursemrank.azurewebsites.net/get_all_institutions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const postDisLike = () => {};
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__left}>
          <h1>{author}</h1>
          <p>{date}</p>
        </div>
        <div className={styles.card__right}>
          <div className={styles.review__container}>
            <Rate
              allowHalf={true}
              disabled={true}
              allowClear={false}
              value={rating}
              style={{ margin: 0 }}
            />
          </div>
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
      <div className={styles.card_bottom_below}>
        <div className={styles.tag}>Lecture Heavy</div>
        <Space>
          <FiThumbsDown cursor="pointer" />
          <FiThumbsUp cursor="pointer" />
        </Space>
      </div>
    </div>
  );
};

export default ReviewCard;
