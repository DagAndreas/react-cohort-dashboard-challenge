import { useParams } from "react-router-dom";
import Sidebar from "../maincomponents/Sidebar";

import "./CommentEditPage.css";
import { useEffect, useState } from "react";

function CommentEditPage(props) {
  const { postid, commentid } = useParams();

  const [comment, setComment] = useState({});
  // const [comments, setComments] = useState([])

  
  useEffect(() => {
      let path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${postid}/comment`;
      fetch(path)
        .then((res) => res.json())
        .then((data) => {
          console.log("success cepage: ", data);

          // Find the comment that matches commentid
          const foundComment = data.find(
            (com) => com.id.toString() === commentid
          );
          // Set the comment state
          setComment(foundComment);
        })
        .catch((error) => console.error("Error from commenteditpage:", error));
    },
    postid,
    commentid
  );

  if (!comment) return <p>Loading comment...</p>;

  // fetch the data for the comment
  return (
    <>
      <div className="commentedit-container">
        <Sidebar />
        <div className="commentForms">
          <h2>
            Edit Comment. {postid}, {commentid}
          </h2>
          {/* field for comment id */}
          {/* field for postid*/}
        </div>
      </div>
    </>
  );
}

export default CommentEditPage;
