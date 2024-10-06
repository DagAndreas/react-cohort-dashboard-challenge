import './Home.css'; // Import the CSS file
import PostsPage from './PostsPage';
import Sidebar from './Sidebar';

function Hom e() {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <PostsPage />
      </div>
    </>
  );
}

export default Home;
