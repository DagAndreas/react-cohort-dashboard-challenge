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
          <li>
            <p>list of posts</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PostsPage;
