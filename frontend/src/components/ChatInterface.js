import React, { useState } from 'react';
import axios from 'axios';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('/api/chat', { message });
    setResponse(res.data);
  };

  return (
    <div>
      <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
}

export default ChatInterface;
