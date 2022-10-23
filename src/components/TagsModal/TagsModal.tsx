import styles from './tagsmodal.module.scss'
import React from 'react'
import { Rate } from "antd";

interface IProps {
    close: (tags?: string[]) => void
}

export const TagsModal = ({ close }:IProps) => {
    const [rating, setRating] = React.useState(1);
    const [review, setReview] = React.useState("");
    const [isTagsModalOpen, setIsTagsModalOpen] = React.useState(false)
    const [tags, setTags] = React.useState<string[]>([])


    const AddOrRemoveTag = (tag: string) => {
        let tagsCopy:string[] = [...tags];

        if (tagsCopy.includes(tag)){
            tagsCopy = tagsCopy.filter((tagName:string, idx:number)=>{
                return tagName !== tag
            })
            setTags(tagsCopy)
        }
        tagsCopy.push(tag);
        setTags(tagsCopy)
    }

    const submit = () =>{
        console.log(tags)
        close(tags)
    }

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal__top}>
                    <p><i className={[styles.arrow, styles.left].join(" ")}></i></p>
                    <h2>Select Your Tags</h2>
                    <p></p>
                </div>
                <div className={styles.modal__mid}>
                    <div className={styles.tagrow}>
                        <div onClick={() => AddOrRemoveTag('GROUP WORK')}>
                            <p>GROUP WORK</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('TEST HEAVY')}>
                            <p>TEST HEAVY</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('PARTICIPATION MATTERS')}>
                            <p>PARTICIPATION MATTERS</p>
                        </div>
                    </div>
                    <div className={styles.tagrow}>
                        <div onClick={() => AddOrRemoveTag('GOOD FEEDBACK')}>
                            <p>GOOD FEEDBACK</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('LOTS OF SELF STUDY')}>
                            <p>LOTS OF SELF STUDY</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('TAKE NOTES')}>
                            <p>TAKE NOTES</p>
                        </div>
                    </div>
                    <div className={styles.tagrow}>
                        <div onClick={() => AddOrRemoveTag('LECTURE HEAVY')}>
                            <p>LECTURE HEAVY</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('GROUP PROJECTS')}>
                            <p>GROUP PROJECTS</p>
                        </div>
                        <div onClick={() => AddOrRemoveTag('POP QUIZZES')}>
                            <p>POP QUIZZES</p>
                        </div>
                    </div>
                    <div className={styles.tagrow}>
                        <div onClick={() => AddOrRemoveTag('GET READY TO READ')}>
                            <p>GET READY TO READ</p>
                        </div>
                        <div className={styles.lastdiv} onClick={() => AddOrRemoveTag('INTERACTIVE ASSIGNMENTS')}>
                            <p>INTERACTIVE ASSIGNMENTS</p>
                        </div>
                    </div>
                </div>
                <div className={styles.modal__bottom}>
                    <div className={styles.bottom__bottom}>
                        <button onClick={submit}>Done</button>
                    </div>
                </div>
            </div>
        </>
       
    )
}
