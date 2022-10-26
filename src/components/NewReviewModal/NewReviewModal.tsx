import React, { useState, useEffect } from "react";
import styles from "./newreviewmodal.module.scss";
import { Rate } from "antd";
import { TagsModal } from "../TagsModal/TagsModal";
import { useNavigate, useParams } from "react-router-dom";
export const NewReviewModal = () => {
  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState("");
  const [isTagsModalOpen, setIsTagsModalOpen] = React.useState(false);
  const [tags, setTags] = React.useState<any>([]);
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [module, setModule]: any = useState({});
  const params: any = useParams();
  const navigate = useNavigate();
  const close = (tags?: string[]) => {
    setIsTagsModalOpen(false);
    setTags(tags);
    console.log("here", tags);
  };
  const getModule = (code: string) => {
    fetch(`https://discoursemrank.azurewebsites.net/get_module_by_id/${code}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setModule(data))
      .catch((err) => console.log(err));
  };

  const postReview = () => {
    const item = {
      reviewer: isAnonymous || 9876543,
      body: review,
      module: params.module,
      tags: tags,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    fetch(
      "https://discoursemrank.azurewebsites.net/post_review",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        navigate(
          `/universities/${params.university}/${params.course}/${params.module}`
        )
      )
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    postReview();
  };
  useEffect(() => {
    getModule(params.module);
    console.log("params", params);
  });
  return (
    <div style={{ width: 400, borderRadius: "20px" }}>
      {isTagsModalOpen ? null : (
        <div className={styles.modal}>
          <div className={styles.modal__top}>
            <p>
              <i className={[styles.arrow, styles.left].join(" ")}></i>
            </p>
            <h2>{module.name}</h2>
            <p></p>
          </div>
          <div className={styles.modal__mid}>
            <textarea
              onChange={(e) => setReview(e.target.value)}
              placeholder="Start writing here"
              value={review}
              className={styles.textarea}
              cols={30}
              rows={7}
              required
            ></textarea>
            <div className={styles.ratingcontainer}>
              <Rate
                allowHalf={true}
                value={rating}
                onChange={(e: any) => {
                  setRating(e);
                }}
              />
            </div>
          </div>
          <div className={styles.modal__bottom}>
            <div className={styles.bottom__top}>
              <div className={styles.checkcontainer}>
                <input
                  checked={tags?.length > 0 ? true : false}
                  onChange={() => setIsTagsModalOpen(!isTagsModalOpen)}
                  type="checkbox"
                />
                <span>Select Review Tags</span>
              </div>
              <div className={styles.checkcontainer}>
                <input
                  onChange={() => setIsAnonymous(!isAnonymous)}
                  type="checkbox"
                />
                <span>Mark as Anonymous</span>
              </div>
            </div>
            <div className={styles.bottom__bottom}>
              <button type="submit" onClick={handleSubmit}>
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
      {isTagsModalOpen && <TagsModal close={close} />}
    </div>
  );
};
