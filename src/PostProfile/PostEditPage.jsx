import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../maincomponents/Sidebar";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../App";
import "./PostEditPage.css"

function PostEditPage() {
  const { postid } = useParams();
  const navigate = useNavigate();
  const { posts } = useContext(PostContext);

  const [post, setPost] = useState(null);
  const [contactId, setContactId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const updateText = (event, setter) => {
    setter(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    if (posts && postid) {
      const matchingPost = posts.find(
        (post) => post.id === parseInt(postid)
      );
      setPost(matchingPost);

      if (matchingPost) {
        setContactId(matchingPost.contactId.toString());
        setTitle(matchingPost.title);
        setContent(matchingPost.content);
      }
    }
  }, [posts, postid]);

  if (!post) return <p>Loading post...</p>;

  const onSave = () => {
    // Validate that the title and content are not empty
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in all fields before saving.");
      return;
    }
  
    console.log("Title:", title);
    console.log("Content:", content);
  
    const path = `https://boolean-uk-api-server.fly.dev/dagandreas/post/${postid}`;
  
    console.log("API Path:", path);
  
    const data = {
      id: parseInt(postid),
      contactId: parseInt(contactId),
      title: title,
      content: content,
    };
  
    console.log("Data being sent:", data);
  
    fetch(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // Log the response status to check if it succeeded
        console.log("Response status:", response.status);
  
        if (response.ok) {
          console.log("Post updated successfully");
          navigate(`/`);
        } else {
          console.error("Failed to update post");
          response.json().then((err) => {
            // Log the server error details
            console.error("Server error:", err);
            alert(`Error: ${err.message}`);
          });
        }
      })
      .catch((error) => {
        // Log any error encountered during fetch
        console.error("Error updating post:", error);
      });
  };
  

  return (
    <>
      <div className="postedit-container">
        <Sidebar />
        <div className="postForms">
          <h2>Edit Post</h2>
          <form className="post-form">
            {/* Field for Post ID (read-only) */}
            <div className="input-group">
              <label>Post ID:</label>
              <input type="text" value={postid} readOnly />
            </div>
            {/* Field for Contact ID (read-only) */}
            <div className="input-group">
              <label>Contact ID:</label>
              <input type="text" value={contactId} readOnly />
            </div>
            {/* Field for Title */}
            <div className="input-group">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(event) => updateText(event, setTitle)}
              />
            </div>
            {/* Field for Content */}
            <div className="input-group">
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(event) => updateText(event, setContent)}
              />
            </div>
            <div className="button-group">
              <button type="button" className="save-button" onClick={onSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostEditPage;
