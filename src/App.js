import { useEffect, useState } from 'react'; 
import axios from 'axios';

import './App.css';

function App() {
  // App holds data for current board and a list of all boards
  const [board, setBoard] = useState(null)
  const [boards, setBoards] = useState([])
  // load boards once on render
  useEffect(()=>{
    axios.get('http://localhost:5000/boards').then((res)=>{
      console.log(res.data)
      setBoards(res.data)
      console.log(boards)
    })
  }, [])
  return (
    <div className="App">
      <div className="baords-display-container">
        <h2>Available Boards</h2>
        <ul>
        {boards.forEach(board=> {
          <li key={board.id}>{board}</li>
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
