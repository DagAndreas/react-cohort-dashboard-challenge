import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ContactContext } from "../App";
import Icon from "../headercomponents/Icon";

function CreateCommentButton(props) {
  const { contacts } = useContext(ContactContext);
  const { post } = props;

  // find user (first)
  const currentUser = contacts[0];
  // console.log("currentuser", currentUser);

  const [field, setField] = useState("");
  const updateOnTextbox = (event, setter) => {
    const updatedText = event.target.value;
    setter(updatedText);
    console.log(updatedText);
  };

  function submitPost(event) {
    event.preventDefault();

    if (field === "") {
      console.log("cant submit empty comment");
    }

    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${post.id}/comment`;

    const data = {
      postId: post.id,
      content: field,
      contactId: currentUser.id,
    };

    fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setField("");
      })
      .catch((error) => {
        console.error("error when creating comment", error);
      });
  }

  return (
    <>
      <div className="new-post-wrapper">
        <div className="new-post-container">
          <Icon person={currentUser} />
          <input
            onChange={(event) => updateOnTextbox(event, setField)}
            type="text"
            placeholder="Comment"
            maxLength={100} /* Adjust max length as needed */
            className="new-post-input"
          />
          <button onClick={submitPost} className="new-post-button">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

CreateCommentButton.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateCommentButton;
