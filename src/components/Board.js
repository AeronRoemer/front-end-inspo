import { useState, useEffect } from "react";
import axios from "axios";

import Card from './Card.js'


// rather than passing props data to have info about baord, we're making another API call. 
// that way, our cards and board info is all in one place

const Board = (props) =>{
    const [boardData, setBoardData] = useState([])
    const [cardData, setCardData] = useState([])
    useEffect(()=>{
        if (props.id){
            axios.get(`http://localhost:5000/boards/${props.id}/cards`)
            .then((res)=>{
                console.log(res.data)
            setBoardData(res.data)
            setCardData(res.data.cards)
            })
        } else{
            return null
        }
        
    }, [props])
    const deleteCard = (id) => {
        return false
    }
    const cardsList = cardData.map((card, index)=> {
        return <Card card={card} key={index}/>
      })

        return(
            <div className="board-display-container">
                <h3>Hi, I'm {boardData.title}</h3>
                <h4>These are my cards:</h4>
                {boardData ? cardsList : ''}
            </div>
            
        )
}
export default Board;