import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hello');
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Swagger Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
