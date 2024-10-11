import { useParams } from "react-router-dom";
import Sidebar from "../maincomponents/Sidebar";
import { useEffect, useState } from "react";
import PostItem from "../PostComponents/PostItem";

function JustPostPage() {
  const { id } = useParams();
  console.log("id", id);

  const [post, setPost] = useState(" ");

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/dagandreas/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return (
      <div className="commentedit-container">
        <Sidebar />
        <p>Fetching post</p>
      </div>
    );
  }

  return (
    <>
      <div className="commentedit-container">
        <Sidebar />
        <ul>
          <PostItem post={post} />
        </ul>
      </div>
    </>
  );
}

export default JustPostPage;
