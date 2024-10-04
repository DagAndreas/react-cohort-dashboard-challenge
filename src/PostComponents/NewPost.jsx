import { useContext, useState } from "react";
import Icon from "../headercomponents/Icon";
import { ContactContext } from "../App";
import "./NewPost.css"; // Import the CSS file

function NewPost() {
  const { contacts } = useContext(ContactContext);
  const firstcontact = contacts[0];

  const [field, setField] = useState("")

  const updateOnTextbox = (event, setter) => {
      const updatedText = event.target.value
      setter(updatedText)
      console.log(updatedText);
      
  }

  const submitPost = (event) =>  {
    event.preventDefault()

    if(field === ''){
      console.log("Can't submit empty post")
      return;
    }

  const path = "https://boolean-uk-api-server.fly.dev/dagandreas/post/"

  const data = {
    title: firstcontact.jobTitle,
    content: field,
    contactId: firstcontact.id
  }

  console.log(data)

  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((res => res.json()))
  .then((data) => {
    console.log("success:", data)
    setField("")
  })
  .catch((error) => {
    console.error("error in newpost:", error)
  })

  }

  return (
    <div className="new-post-wrapper">
      <div className="new-post-container">
        <Icon person={firstcontact} />
        <input
        onChange={(event) => updateOnTextbox(event, setField)}
          type="text"
          placeholder="What's on your mind?"
          maxLength={100} /* Adjust max length as needed */
          className="new-post-input"
        />
        <button onClick={submitPost} className="new-post-button">Post</button>
      </div>
    </div>
  );
}

export default NewPost;
