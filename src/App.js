import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Board from './components/Board.js'

import './App.css';

function App() {
  // App holds data for current board and a list of all boards
  const [boardId, setBoard] = useState(null)
  const [boards, setBoards] = useState([])
  // load boards once on render
  useEffect(()=>{
    axios.get('http://localhost:5000/boards')
    .then((res)=>{
      setBoards(res.data)
    })
  }, [])
  // click handler given to each board title in the list
  const clickSetBoard = (id) =>{
    setBoard(id)
  }
  const boardsList = boards.map((board, index)=> {
    console.log(board)
    return <li key={index} onClick={() => clickSetBoard(board.board_id)}>{board.title}</li>
  })
  console.log('setting board', boardId)
  return (
    <div className="App">
      <div className="baords-display-container">
        <h2>Available Boards</h2>
        <ul>
        {boardsList}
        </ul>
        <Board id={boardId} />
      </div>
    </div>
  );
}

export default App;
