import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateWorkBoard() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    axios.post('/api/workboards/', { title, description })
      .then(() => history.push('/'));
  };

  return (
    <div>
      <h1>Create Work Board</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Work Board Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreateWorkBoard;

