
import React, { useState } from 'react';

const PostForm = ({ onPostSubmit }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [hostelName, setHostelName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      imageUrl,
      price,
      location,
      hostelName,
    };
  
    onPostSubmit(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Hostel Name:
        <input type="text" value={hostelName} onChange={(e) => setHostelName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;

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
            <img src={post.imageUrl} alt={`Hostel ${index + 1}`} style={{ maxWidth: '100%' }} />
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
