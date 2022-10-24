import React from "react";
import styles from "./reviewsTab.module.scss";
import { IProps, ModuleCard } from "../../ModuleCard/ModuleCard";
import ReviewCard from "../../ReviewCard/ReviewCard";
const ReviewsTab = () => {
  const dummyModuleData: IProps = {
    courseName: "Computer Science 101",
    rating: 4.5,
    reviewCount: 25,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis error ea porro consectetur autem vel molestiae, commodi, adipisci beatae doloribus cupiditate fugit magnam nesciunt deleniti repellat. Numquam obcaecati doloremque aliquam?",
    universityName: "University Of The Western Cape",
  };
  return (
    <div className={styles.reviewsTabMain}>
      <div className={styles.reviewsTabCont}>
        <ul>
          <li>
            <ReviewCard
              author="Anonymous"
              rating={dummyModuleData.rating}
              reviewText={dummyModuleData.reviewText}
              date="12/03/2022"
            />
          </li>
          <li>
            <ReviewCard
              author="Anonymous"
              rating={dummyModuleData.rating}
              reviewText={dummyModuleData.reviewText}
              date="12/03/2022"
            />
          </li>
          <li>
            <ReviewCard
              author="Anonymous"
              rating={dummyModuleData.rating}
              reviewText={dummyModuleData.reviewText}
              date="12/03/2022"
            />
          </li>
          <li>
            <ReviewCard
              author="Anonymous"
              rating={dummyModuleData.rating}
              reviewText={dummyModuleData.reviewText}
              date="12/03/2022"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewsTab;
