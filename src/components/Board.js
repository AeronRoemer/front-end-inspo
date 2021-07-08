import { useState, useEffect } from "react";
import axios from "axios";

import Card from './Card.js'


// rather than passing props data to have info about baord, we're making another API call. 
// that way, our cards and board info is all in one place

const Board = (props) =>{
    const [boardData, setBoardData] = useState([])
    useEffect(()=>{
        if (props.id){
            axios.get(`http://localhost:5000/boards/${props.id}/cards`)
            .then((res)=>{
                console.log(res.data)
            setBoardData(res.data)
            })
        } else{
            return null
        }
        
    }, [props])
    console.log(boardData)

    const cardsList = boardData.cards.map((card, index)=> {
        return <Card id={card.card_id} />
      })

    console.log(boardData)
        return(
            <div className="board-display-container">
                <h3>Hi, I'm {boardData.title}</h3>
                <h4>These are my cards:</h4>
                {boardData ? cardsList : ''}
            </div>
            
        )
}
export default Board;