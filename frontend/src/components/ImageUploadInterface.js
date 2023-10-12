import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set the result image received from the backend
      setResultImage(response.data.image);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Object Detection with Yolo</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Detect</button>
      {resultImage && <img src={`data:image/jpeg;base64,${resultImage}`} alt="Result" />}
    </div>
  );
}

export default ImageUploader;
