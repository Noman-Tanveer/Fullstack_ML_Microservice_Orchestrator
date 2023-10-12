import React, { useState } from 'react';
import './Prompt.css'

function ImageFetcher() {
  const [prompt, setPrompt] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const fetchImage = async () => {
    try {
      // Display a loading message while fetching data
      setLoading(true);
      setError('');

      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to fetch an image based on the prompt
      const response = await fetch(`${process.env.DIFFUSION_ENDPOINT}?prompt=${prompt}`);

      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }

      const data = await response.json();
      const imageUrl = data.imageUrl;

      // Update the state with the fetched image URL
      setImageURL(imageUrl);
    } catch (err) {
      // Handle any errors that occur during the fetch
      setError('An error occurred while fetching the image.');
    } finally {
      // Hide the loading indicator
      setLoading(false);
    }
  };

  return (
    <div className="ImageFetcher-container">
      <h2>Generate Image with Stable Diffusion</h2>
      <input
        type="text"
        placeholder="Enter a prompt"
        value={prompt}
        onChange={handlePromptChange}
      />
      <button onClick={fetchImage}>Generate Image</button>

      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {imageURL && (
        <div className="image-container">
          <h3>Image:</h3>
          <img src={imageURL} alt="Fetched" />
        </div>
      )}
    </div>
  );
}

export default ImageFetcher;
