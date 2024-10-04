import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";
import PostComment from "./PostComment";

import "./PostItem.css";
import CreateCommentButton from "./CreateCommentButton";

function PostItem(props) {
  const { post } = props;

  const { contacts } = useContext(ContactContext);

  const [comments, setComments] = useState([]);
  const [seeAllComments, setSeeAllComments] = useState(false);

  // user of post
  const posterid = post.contactId; // eg. 2
  const posterContact = contacts.find((contact) => contact.id === posterid); // find the contact based on id

  // fetch comments for correct post id
  useEffect(() => {
    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${post.id}/comment`;
    fetch(path)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.log("error in postitem", error));

    console.log("fetched from path:", path);
  }, [post.id]);

  useEffect(() => {
    console.log("Updated comments:", comments);
  }, [comments]);

  return (
    <>
      <li>
        <main className="postwrapper">
          <section className="postsection">
            <section className="userinfo">
              {/* Only render Icon if posterContact exists */}
              {posterContact && <Icon person={posterContact} />}
              <section className="nameAndTitle">
                <div className="name">
                  {/* Check if posterContact is defined before accessing properties */}
                  {posterContact ? (
                    <>
                      {posterContact.firstName} {posterContact.lastName}
                    </>
                  ) : (
                    "Unknown User"
                  )}
                </div>
                {/* Also check for jobTitle */}
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

          <div>
            <button className="previousCommentsButton">
              See previous comments
            </button>

            {comments.length > 0 ? (
              comments.map((comment) => (
                <PostComment key={comment.id} comment={comment} />
              ))
            ) : (
              <p>No comments available</p>
            )}
          </div>

          <CreateCommentButton/>
        </main>
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
