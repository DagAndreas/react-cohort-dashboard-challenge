import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";
import PostComment from "./PostComment";
import { useNavigate } from "react-router-dom";
import CreateCommentButton from "./CreateCommentButton";
import "./PostItem.css";

function PostItem(props) {
  const { post } = props;
  const { contacts } = useContext(ContactContext);
  const [comments, setComments] = useState([]);
  const [seeAllComments, setSeeAllComments] = useState(false);

  // User of post
  const posterid = post.contactId;
  const posterContact = contacts.find((contact) => contact.id === posterid);

  const navigate = useNavigate();

  // Fetch comments for the correct post id
  useEffect(() => {
    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${post.id}/comment`;
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        // Reverse the comments so the most recent are first
        setComments(data.reverse());
      })
      .catch((error) => console.log("error in postitem", error));
  }, [post.id]);

  function handlePostClick(event) {
    // Prevent navigating when clicking on buttons or links inside the post
    if (
      event.target.tagName === "BUTTON" ||
      event.target.tagName === "A" ||
      event.target.closest(".non-clickable")
    ) {
      return;
    }
    navigate(`/post/${post.id}`);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/post/${post.id}`);
    }
  }

  // Fix the Edit button to navigate correctly
  function handleEditClick(event) {
    event.stopPropagation();
    navigate(`/post/edit/${post.id}`); // Adjust the path if needed
  }

  // Determine whether to show the "Show all comments" button
  const showShowAllButton = comments.length > 3;

  // Get the comments to display
  const commentsToDisplay = seeAllComments
    ? comments
    : comments.slice(0, 3);

  return (
    <>
      <li
        className="postwrapper clickable"
        onClick={handlePostClick}
        role="button"
        tabIndex="0"
        onKeyPress={handleKeyPress}
      >
        <section className="postsection">
          <section className="userinfo">
            {posterContact && <Icon person={posterContact} />}
            <section className="nameAndTitle">
              <div className="editbutton non-clickable">
                <button
                  onClick={handleEditClick}
                  className="new-post-button"
                >
                  Edit
                </button>
              </div>
              <div className="name">
                {posterContact ? (
                  <>
                    {posterContact.firstName} {posterContact.lastName}
                  </>
                ) : (
                  "Unknown User"
                )}
              </div>
              <div className="title">
                {posterContact?.jobTitle || "No Title Available"}
              </div>
            </section>
          </section>
          <section className="posttext">
            <p>{post.content}</p>
          </section>
        </section>

        <div className="divider" />

        <div className="comments-section non-clickable">
          {commentsToDisplay.length > 0 ? (
            commentsToDisplay.map((comment) => (
              <PostComment
                key={comment.id}
                comment={comment}
                postid={post.id}
              />
            ))
          ) : (
            <p>No comments available</p>
          )}

          {showShowAllButton && (
            <button
              className="showAllCommentsButton"
              onClick={(e) => {
                e.stopPropagation();
                setSeeAllComments(!seeAllComments);
              }}
            >
              {seeAllComments ? "Hide comments" : "Show all comments"}
            </button>
          )}
        </div>

        <div className="create-comment-button non-clickable">
          <CreateCommentButton post={post} />
        </div>
      </li>
    </>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
