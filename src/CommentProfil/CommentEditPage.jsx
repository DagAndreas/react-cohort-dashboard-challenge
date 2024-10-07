import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../maincomponents/Sidebar";

import "./CommentEditPage.css";
import { useEffect, useState } from "react";

function CommentEditPage(props) {
  const { postid, commentid } = useParams();
  const navigate = useNavigate(); // For navigation after actions

  const [comment, setComment] = useState(null);
  const [contactId, setContactId] = useState("");
  const [content, setContent] = useState("");

  const updateText = (event, setter) => {
    const newText = event.target.value;
    setter(newText);
    console.log(newText);
  };

  useEffect(() => {
    let path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${postid}/comment`;
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched comments: ", data);

        // Find the comment that matches commentid
        const foundComment = data.find(
          (com) => com.id.toString() === commentid
        );
        // Set the comment state
        setComment(foundComment);
        console.log("Found comment:", foundComment);

        // Populate the state variables with the fetched data
        if (foundComment) {
          setContactId(foundComment.contactId.toString());
          setContent(foundComment.content);
        }
      })
      .catch((error) => console.error("Error fetching comment:", error));
  }, [postid, commentid]);

  if (!comment) return <p>Loading comment...</p>;

  // Function to handle saving the updated comment
  const onSave = () => {
    // Validate that none of the state variables are empty
    if (
      postid === "" ||
      commentid === "" ||
      contactId === "" ||
      content.trim() === ""
    ) {
      alert("Please fill in all fields before saving.");
      return;
    }

    let path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${postid}/comment/${commentid}`;
    const data = {
      postId: parseInt(postid),
      commentId: parseInt(commentid),
      contactId: parseInt(contactId),
      content: content,
    };

    fetch(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Comment updated successfully");
        } else {
          console.error("Failed to update comment");
          response.json().then((err) => {
            console.error("Server error:", err);
            alert(`Error: ${err.message}`);
          });
        }
      })
      .catch((error) => {
        console.error("Error updating comment:", error);
      });
  };

  // Function to handle deleting the comment
  const onDelete = () => {
    let path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${postid}/comment/${commentid}`;

    fetch(path, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Comment deleted successfully");
          // Optionally navigate or update UI
          navigate(`/`);
        } else {
          console.error("Failed to delete comment");
          response.json().then((err) => {
            console.error("Server error:", err);
            alert(`Error: ${err.message}`);
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  // Render the form with input fields linked to state variables
  return (
    <>
      <div className="commentedit-container">
        <Sidebar />
        <div className="commentForms">
          <h2>
          </h2>
          <form className="comment-form">
            {/* Field for comment ID (read-only) */}
            <div className="input-group">
              <label>Comment ID:</label>
              <input type="text" value={commentid} readOnly />
            </div>
            {/* Field for post ID (read-only) */}
            <div className="input-group">
              <label>Post ID:</label>
              <input type="text" value={postid} readOnly />
            </div>
            {/* Field for contact ID */}
            <div className="input-group">
              <label>Contact ID:</label>
              <input
                type="text"
                value={contactId}
                onChange={(event) => updateText(event, setContactId)}
              />
            </div>
            {/* Field for content */}
            <div className="input-group">
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(event) => updateText(event, setContent)}
              />
            </div>
            <div className="button-group">
              <button type="button" className="save-button" onClick={onSave}>
                Save
              </button>
              <button type="button" className="delete-button" onClick={onDelete}>
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CommentEditPage;
