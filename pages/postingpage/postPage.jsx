import { useState } from "react";
import PostForm from "./postingPage";
import './postin.scss'


const PostPage = () => {
    const [posts, setPosts] = useState([]);
  
    const handlePostSubmit = (newPost) => {
      setPosts([...posts, newPost]);
    };

    

  
    return (
      <div className="posting">
        <PostForm onPostSubmit={handlePostSubmit} />
        <div>
          {posts.map((post, index) => (
            <div key={index}>
              <img src={post.image} alt={`Hostel ${index + 1}`} style={{ maxWidth: '100%' }} />
              <p>Price: {post.price}</p>
              <p>Location: {post.location}</p>
              <p>Hostel Name: {post.hostelName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PostPage;
  