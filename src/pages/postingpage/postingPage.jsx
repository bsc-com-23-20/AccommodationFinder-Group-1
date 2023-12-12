
import React, { useState } from 'react';

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

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
      <div className="trial">
        see this
      </div>
    );
  }
}

export default PostPage;
