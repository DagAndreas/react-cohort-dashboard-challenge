import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";

function PostItem(props) {
  const { post } = props;

  const { contacts } = useContext(ContactContext);

  const [comments, setComments] = useState([]);

  // user of post
  const posterid = post.contactId; // eg. 2
  const posterContact = contacts.filter(
    (contact) => contact.id === posterid
  )[0]; // filter on contact.id

  // fetch comments for correct post id

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
            {/* render all comments */}
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
