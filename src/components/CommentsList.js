import { memo } from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({ comments }) => {
    return (
        <div>
            <h2>{ comments.length } Comments</h2>

            {comments.map(({ _id, author, text }) => (
                <CommentItem 
                    key={_id} 
                    author={author} 
                    text={text} 
                />
            ))}
        </div>
    )
}

export default memo(CommentsList);