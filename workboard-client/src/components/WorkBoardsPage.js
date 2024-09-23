import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function WorkBoardsPage() {
  const [workboards, setWorkBoards] = useState([]);

  useEffect(() => {
    axios.get('/api/workboards/').then(response => {
      setWorkBoards(response.data);
    });
  }, []);

  return (
    <div>
      <h1>My Work Boards</h1>
      <Link to="/create-workboard">Create New Work Board</Link>
      <ul>
        {workboards.map(board => (
          <li key={board.id}>
            <Link to={`/workboard/${board.id}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkBoardsPage;
