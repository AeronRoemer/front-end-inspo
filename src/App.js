import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Board from './components/Board.js'
import NewBoard from './components/NewBoard.js';

import './App.css';

const BASE_URL = 'http://localhost:5000'

function App() {
  // App holds data for current board and a list of all boards
  const [boardId, setBoard] = useState(null)
  const [boards, setBoards] = useState([])

  const submitBoard = (title, owner) => {
    axios.post(`${BASE_URL}/boards`, {"title": title, "owner": owner}).catch(error => {
            return {'error': error}
        })
  }

  // load boards once on render
  useEffect(()=>{
    axios.get(`${BASE_URL}/boards`)
    .then((res)=>{
      console.log(res.data)
      setBoards(res.data)
    })
  }, [])
  // click handler given to each board title in the list
  const clickSetBoard = (id) =>{
    setBoard(id)
  }
  const boardsList = boards.map((board, index)=> {
    return <li key={index} onClick={() => clickSetBoard(board.board_id)}>{board.title}</li>
  })
  

  return (
    <div className="App">
      <div className="boards-display-container">
        <div className='boards-list-container'>
          <h2>Available Boards</h2>
          <ul>
            {boardsList}
          </ul>
        </div>
        <div>
          <NewBoard submitBoard={submitBoard}/>
        </div>
        <section className="current-board">
          {boardId ? <Board id={boardId} /> : ''}
        </section>
        
      </div>
    </div>
  );
}

export default App;
