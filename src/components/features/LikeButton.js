import React, { useState } from 'react';
import './LikeButtonStyle.css'; // Assuming you'll style the button in this file

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button" onClick={toggleLike}>
      <i className={`fa fa-heart${liked ? '' : '-o'}`}></i>
      <span>{liked ? 'You loved this recipe!' : 'Click to like'}</span>
    </div>
  );
};

export default LikeButton;