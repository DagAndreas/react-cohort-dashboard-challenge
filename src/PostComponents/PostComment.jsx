import { useContext } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";

// Import CSS
import "./PostComment.css";
import { useNavigate } from "react-router-dom";

function PostComment(props) {
  const { comment, postid } = props;

  const navigate = useNavigate();
  const { contacts } = useContext(ContactContext);

  const commenterId = comment.contactId;
  const commenterContact = contacts.find(
    (contact) => contact.id === commenterId
  );

  const editPress = () => {
    console.log("Going to edit for post", postid, "comment ID", comment.id);
    navigate(`/post/${postid}/comment/${comment.id}`);
  };

  return (
    <>
      <div className="container">
        <div className="item"></div>
        <div className="item">
          <div className="overunder">
            <button className="edit-button" onClick={editPress}>
              Edit
            </button>
            <div className="iconandpost">
              <div className="icon">

            <Icon person={commenterContact} />
              </div>
            <div className="nameandpost">

            <div className="item2">
              <p className="fullname">
                {commenterContact.firstName} {commenterContact.lastName}
              </p>
            </div>
            <div className="item2">
              <section>
                <p>{comment.content}</p>
              </section>
            </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostComment;
