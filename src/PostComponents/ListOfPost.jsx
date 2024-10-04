import { useContext } from "react";
import { PostContext } from "../App";
import PostItem from "./PostItem";

import "./ListOfPost.css";

function ListOfPosts() {
  const { posts } = useContext(PostContext);

  // const first = posts[0];
  return (
    <>
      <div className="spacer"></div>
      <div>
        {/* Map over posts and create a PostItem for each */}
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export default ListOfPosts;
