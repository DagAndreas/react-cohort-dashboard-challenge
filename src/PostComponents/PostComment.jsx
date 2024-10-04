import { useContext } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";


//import css
import './PostComment.css'

function PostComment(props) {
  const { comment } = props;

  const { contacts } = useContext(ContactContext);

  const commenterId = comment.contactId; // eg. 2
  const commenterContact = contacts.filter(
    (contact) => contact.id === commenterId
  )[0]; // filter on contact.id

  return (
    <>
      <div className="container">
        <div className="item">
          <Icon person={commenterContact} />
        </div>
        <div className="item">
          <div className="overunder">
            <div className="item2">
              <p className="fullname">
                {/* name */}
                {commenterContact.firstName} {commenterContact.lastName}
              </p>
            </div>
            <div className="item2">
              <section>
                {/* text */}
                {comment.content}
            <p></p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="commentinfo"></div>
    </>
  );
}

export default PostComment;
