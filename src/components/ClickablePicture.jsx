import { useState } from 'react';
import './ClickablePicture.css';
const ClickablePicture = function ({img, imgClicked}) {
    const [image, setImage] = useState(img)
    const handleClick = () => setImage(imgClicked);
    return (
      <div className='clickablepicturecard'>
        <img src={image} alt="img" onClick={handleClick}/>
      </div>
    )
    
}

export default ClickablePicture