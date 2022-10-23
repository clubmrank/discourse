import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { ModuleCard } from "../../components/ModuleCard/ModuleCard";
import { IProps } from "../../components/ModuleCard/ModuleCard";
import { NewReviewModal } from "../../components/NewReviewModal/NewReviewModal";
import { ReviewSuccessModal } from "../../components/ReviewSuccessModal/ReviewSuccessModal";

const dummyModuleData: IProps = {
  courseName: "Computer Science 101",
  rating: 4.5,
  reviewCount: 25,
  reviewText:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis error ea porro consectetur autem vel molestiae, commodi, adipisci beatae doloribus cupiditate fugit magnam nesciunt deleniti repellat. Numquam obcaecati doloremque aliquam?",
  universityName: "University Of The Western Cape",
};

const ModuleRating = () => {
  return (
    <div>
      <Header />
      <ModuleCard
        courseName={dummyModuleData.courseName}
        rating={dummyModuleData.rating}
        reviewCount={dummyModuleData.reviewCount}
        reviewText={dummyModuleData.reviewText}
        universityName={dummyModuleData.universityName}
      />
      <NewReviewModal />
      <ReviewSuccessModal />
      <Footer />
    </div>
  );
};

export default ModuleRating;
