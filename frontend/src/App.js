import React from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import PromptInterface from './components/PromptInterface';
import ImageUploadInterface from './components/ImageUploadInterface';

function App() {
  return (
    <div className="App">
      <Layout>
        <ChatInterface />
        <PromptInterface />
        <ImageUploadInterface />
      </Layout>
    </div>
  );
}

export default App;
