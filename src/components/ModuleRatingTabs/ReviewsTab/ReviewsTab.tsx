import React from "react";
import styles from "./reviewsTab.module.scss";
import { IProps, ModuleCard } from "../../ModuleCard/ModuleCard";
import ReviewCard from "../../ReviewCard/ReviewCard";
export interface Ipros {
  reviews: any[];
}
const ReviewsTab = ({ reviews }: Ipros) => {
  console.log("+++++++", reviews);
  return (
    <div className={styles.reviewsTabMain}>
      <div className={styles.reviewsTabCont}>
        <ul>
          {reviews?.map((review: any) => (
            <li>
              <ReviewCard
                author={review.reviewer || "Anonymous"}
                rating={review.likes - review.dislikes}
                reviewText={review.body}
                date={review.date.split("T")[0]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsTab;
