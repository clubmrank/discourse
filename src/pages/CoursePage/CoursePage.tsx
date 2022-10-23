import React from "react";
import WriteReviewButton from "../../components/base/writeReview/WriteReviewButton";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ModuleCard, IProps } from "../../components/ModuleCard/ModuleCard";
import styles from "./coursePage.module.scss";
const dummyModuleData: IProps = {
  courseName: "Computer Science 101",
  rating: 4.5,
  reviewCount: 25,
  reviewText:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis error ea porro consectetur autem vel molestiae, commodi, adipisci beatae doloribus cupiditate fugit magnam nesciunt deleniti repellat. Numquam obcaecati doloremque aliquam?",
  universityName: "University Of The Western Cape",
};
const CoursePage = () => {
  return (
    <div className={styles.coursePageMain}>
      <Header />
      <div className={styles.coursePageCont}>
        <div className={styles.coursePageTop}>
          <h1>Bsc Mathematics Modules</h1>
          <div>
            <WriteReviewButton />
          </div>
        </div>
        <div className={styles.coursePageList}>
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
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursePage;
