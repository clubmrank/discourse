import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./module.module.scss";
import { Rate } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import ModuleTabs from "../../components/ModuleRatingTabs/Tabs/ModuleTabs";
import WriteReviewButton from "../../components/base/writeReview/WriteReviewButton";
import { useParams } from "react-router-dom";
const Module = () => {
  const [module, setModule]: any = useState({});
  const [reviews, setReviews]: any = useState([]);

  const params: any = useParams();

  const getModule = (code: string) => {
    fetch(`https://discoursemrank.azurewebsites.net/get_module_by_id/${code}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setModule(data))
      .then(() => getReviews(code))
      .catch((err) => console.log(err));
  };

  const getReviews = (code: string) => {
    fetch(
      `https://discoursemrank.azurewebsites.net/get_all_reviews_by_module/${code}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getModule(params.module);
  });
  return (
    <div className={styles.moduleMain}>
      <Header />

      <div className={styles.moduleCont}>
        <div className={styles.topDiv}>
          <div className={styles.uniTop}>
            <div>
              <p>{params.university}</p>
              <h1>{module?.name}</h1>
            </div>
            <WriteReviewButton />
          </div>
          <div className={styles.topRating}>
            <h3>{reviews.length} Reviews!</h3>
            <div
              style={{
                backgroundColor: "#fff",
                width: "200px",
                borderRadius: "20px",
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rate allowHalf defaultValue={3.5} />
            </div>
          </div>
        </div>
        <div className={styles.tabs}>
          <ModuleTabs reviews={reviews} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Module;
