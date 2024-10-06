import './Home.css'; // Import the CSS file
import PostsPage from './PostsPage';
import Sidebar from './Sidebar';

function Home() {
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
