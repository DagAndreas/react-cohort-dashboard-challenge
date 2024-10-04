import ListOfPosts from "../PostComponents/ListOfPost";
import NewPost from "../PostComponents/NewPost";
import "./PostsPage.css";

function PostsPage() {
  return (
    <>
      <div className="posts-page">
        <ul>
          <li>
            <NewPost/>
          </li>
          {/* <div className="divider"></div> */}
          <li>
            <ListOfPosts/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PostsPage;
