import React, { useState } from 'react';
import axios from 'axios';

function PromptInterface() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const sendPrompt = async () => {
    const res = await axios.post('/api/prompt', { prompt });
    setImage(res.data);
  };

  return (
    <div>
      <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
      <button onClick={sendPrompt}>Send</button>
      {image && <img src={image} alt="Prompt response" />}
    </div>
  );
}

export default PromptInterface;
