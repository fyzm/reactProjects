import React from "react"

import CommentList from "./CommentList"
import CommerForm from "./CommentForm"

const comments = [
    {
        author: "Nate",
        content: "Hello React! This is a sample comment.",
    },
    { author: "Kevin", content: "Hello Redux!" },
    { author: "Bood", content: "Hello Rekit!" },
];

class CommentBox extends React.PureComponent {
    render(){
        return(
            <div className={"comment-box"}>
              <h1>Comments ({comment.length})</h1>
              <CommentList comments = {comments} />
            </div>
        )
    }
}