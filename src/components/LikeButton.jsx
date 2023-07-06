import { useState } from 'react';

const LikeButton = function() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState(0);
  const background_color=['purple','blue','green','yellow','orange','red']

  const handleClick = () => {
    setLikes(likes + 1);
    setColor((color + 1) % background_color.length);
    
  };

  return <button 
  style={{backgroundColor:background_color[color]}} 
  onClick={handleClick}> 
  {likes} Likes
  </button>;
}

export default  LikeButton;