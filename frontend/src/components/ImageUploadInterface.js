import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadInterface() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);
    const res = await axios.post('/api/upload', formData);
    setImage(res.data);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      {image && <img src={image} alt="img" />}
      <>
        <img src={img} alt="icons" />
      </>
    </div>
  );
}

export default ImageUploadInterface
