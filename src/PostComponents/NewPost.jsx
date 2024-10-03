import { useContext } from "react";
import Icon from "../headercomponents/Icon";
import { ContactContext } from "../App";
import "./NewPost.css"; // Import the CSS file

function NewPost() {
  const { contacts } = useContext(ContactContext);
  const firstcontact = contacts[0];

  return (
    <div className="new-post-wrapper">
      <div className="new-post-container">
        <Icon person={firstcontact} />
        <input
          type="text"
          placeholder="What's on your mind?"
          maxLength={100} /* Adjust max length as needed */
          className="new-post-input"
        />
        <button className="new-post-button">Post</button>
      </div>
    </div>
  );
}

export default NewPost;
