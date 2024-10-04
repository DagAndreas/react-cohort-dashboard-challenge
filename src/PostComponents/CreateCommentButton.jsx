import { useContext } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";

function CreateCommentButton() {
  const { contacts } = useContext(ContactContext);

  // find user (first)
  const currentUser = contacts[0];

  return (
    <>
      <div className="new-post-wrapper">
      <div className="new-post-container">
        <Icon person={currentUser} />
        <input
          type="text"
          placeholder="Comment"
          maxLength={100} /* Adjust max length as needed */
          className="new-post-input"
        />
        <button className="new-post-button">Send</button>
      </div>
    </div>
    </>
  );
}

export default CreateCommentButton;
