import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";
import PostComment from "./PostComment";

function PostItem(props) {
  const { post } = props;

  const { contacts } = useContext(ContactContext);

  const [comments, setComments] = useState([]);

  const [seeAllComments, setSeeAllComments] = useState(false)

  // user of post
  const posterid = post.contactId; // eg. 2
  const posterContact = contacts.filter(
    (contact) => contact.id === posterid
  )[0]; // filter on contact.id

  // fetch comments for correct post id
  useEffect(() => {
    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${post.id}/comment`
    fetch(path)
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(error => console.log("error in postitem", error))

    console.log("fetched from path:", path)
  }, [post.id])

  useEffect(() => {
    console.log("Updated comments:", comments);
  }, [comments]);

  return (
    <>
      <p>Hei</p>
      <main className="postwrapper">
        <section className="postsection">
          <section className="userinfo">
            <Icon person={posterContact} />
            <section className="nameAndTitle">
              {/* set as bold maybe */}
              <div className="name">
                {posterContact.firstName} {posterContact.lastName}
              </div>
              <div className="title">{posterContact.jobTitle}</div>
            </section>
          </section>
          <section className="posttext">
            <p>{post.content}</p>
          </section>
        </section>

        <div>
            {/* see all comments button */}
            <button>See all comments</button>
            {/* TODO: render all comments */}
            {/* Test with one comment first */}
            {comments.length > 0 ? (
                comments.map((comment) => (
                  <PostComment key={comment.id} comment={comment} />
                ))
              ) : (
                <p>No comments available</p>
              )}

            {/* add a comment */}
        </div>
      </main>
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
