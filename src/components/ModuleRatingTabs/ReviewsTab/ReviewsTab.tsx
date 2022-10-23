import React from "react";
import styles from "./reviewsTab.module.scss";
import { IProps, ModuleCard } from "../../ModuleCard/ModuleCard";
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
            <ModuleCard
              courseName={dummyModuleData.courseName}
              rating={dummyModuleData.rating}
              reviewCount={dummyModuleData.reviewCount}
              reviewText={dummyModuleData.reviewText}
              universityName={dummyModuleData.universityName}
            />
          </li>
          <li>
            <ModuleCard
              courseName={dummyModuleData.courseName}
              rating={dummyModuleData.rating}
              reviewCount={dummyModuleData.reviewCount}
              reviewText={dummyModuleData.reviewText}
              universityName={dummyModuleData.universityName}
            />
          </li>
          <li>
            <ModuleCard
              courseName={dummyModuleData.courseName}
              rating={dummyModuleData.rating}
              reviewCount={dummyModuleData.reviewCount}
              reviewText={dummyModuleData.reviewText}
              universityName={dummyModuleData.universityName}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewsTab;
