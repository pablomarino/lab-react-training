import { useState } from 'react';

const ClickablePicture = function ({img, imgClicked}) {
    const [image, setImage] = useState(img)
    const handleClick = () => setImage(imgClicked);
    return (
      <div>
        <img src={image} alt="img" onClick={handleClick}/>
      </div>
    )
    
}

export default ClickablePicture