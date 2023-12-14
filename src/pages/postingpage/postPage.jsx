import { useState } from 'react';
import PostForm from './postingPage';

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Hostel Postings</h1>
      <PostForm onPostSubmit={handlePostSubmit} />
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <img
              src={post.image}
              alt={`Hostel ${index + 1}`}
              style={{ maxWidth: '100%' }}
            />
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Hostel Name: {post.hostelName}</p>
            <p>Vacant Room(s): {post.vacantRoom}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
