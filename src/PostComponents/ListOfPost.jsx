import { useContext } from "react";
import { PostContext } from "../App";
import PostItem from "./PostItem";

function ListOfPosts() {
const {posts} = useContext(PostContext)

const first = posts[0]
  return (
    <>
      <p>Here will be a list of posts</p>
      <PostItem post={first}/>
    </>
  );
}

export default ListOfPosts;
