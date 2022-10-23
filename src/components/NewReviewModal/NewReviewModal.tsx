import React from "react";
import styles from "./newreviewmodal.module.scss";
import { Rate } from "antd";
import { TagsModal } from "../TagsModal/TagsModal";
export const NewReviewModal = () => {
  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState("");
  const [isTagsModalOpen, setIsTagsModalOpen] = React.useState(false);
  const [tags, setTags] = React.useState<any>([]);
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const close = (tags?: string[]) => {
    setIsTagsModalOpen(false);
    setTags(tags);
    console.log("here", tags);
  };

  return (
    <div style={{ width: 400, borderRadius: "20px" }}>
      {isTagsModalOpen ? null : (
        <div className={styles.modal}>
          <div className={styles.modal__top}>
            <p>
              <i className={[styles.arrow, styles.left].join(" ")}></i>
            </p>
            <h2>Writing a review for CSC 101</h2>
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
            ></textarea>
            <div className={styles.ratingcontainer}>
              <Rate
                allowHalf={true}
                value={rating}
                onChange={(e) => {
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
              <button>Submit Review</button>
            </div>
          </div>
        </div>
      )}
      {isTagsModalOpen && <TagsModal close={close} />}
    </div>
  );
};
