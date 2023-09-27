import React from 'react';
import ChatInterface from './components/ChatInterface';
import PromptInterface from './components/PromptInterface';
import ImageUploadInterface from './components/ImageUploadInterface';

function App() {
  return (
    <div className="App">
      <ChatInterface />
      <PromptInterface />
      <ImageUploadInterface />
    </div>
  );
}

export default App;
