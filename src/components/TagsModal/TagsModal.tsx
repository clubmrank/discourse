import styles from "./tagsmodal.module.scss";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { GiPrettyFangs } from "react-icons/gi";

interface IProps {
  close: (tags?: string[]) => void;
}

export const TagsModal = ({ close }: IProps) => {
  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState("");
  const [isTagsModalOpen, setIsTagsModalOpen] = React.useState(false);
  const [tags, setTags] = React.useState<string[]>([]);
  const loadTags = [
    {
      id: 1,
      name: "Group Work",
    },
    {
      id: 2,
      name: "Gives Good Feedback",
    },
    {
      id: 3,
      name: "Get Ready To Read",
    },
    {
      id: 4,
      name: "Lecture Heavy",
    },
  ];
  const AddOrRemoveTag = (tag: string) => {
    let tagsCopy: string[] = [...tags];

    if (tagsCopy.includes(tag)) {
      tagsCopy = tagsCopy.filter((tagName: string, idx: number) => {
        return tagName !== tag;
      });
      setTags(tagsCopy);
    }
    tagsCopy.push(tag);
    setTags(tagsCopy);
  };

  const submit = () => {
    console.log(tags);
    close(tags);
  };

  return (
    <div style={{ width: 600 }}>
      <div className={styles.modal}>
        <div className={styles.modal__top}>
          <p>
            <i className={[styles.arrow, styles.left].join(" ")}></i>
          </p>
          <h2>Select Your Tags</h2>
          <p></p>
        </div>
        <div className={styles.modal__mid}>
          <div className={styles.tagrow}>
            {loadTags.map((tg: any) => (
              <div onClick={() => AddOrRemoveTag(`${tg.id}`)}>
                <p>{tg.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.modal__bottom}>
          <div className={styles.bottom__bottom}>
            <button onClick={submit}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};
