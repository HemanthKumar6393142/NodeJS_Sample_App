import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>React + Node.js Sample App</h1>
      <p>Message from Hemanth server:</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
