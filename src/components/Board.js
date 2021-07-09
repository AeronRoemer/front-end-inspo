import { useState, useEffect } from "react";
import axios from "axios";

import Card from './Card.js'

const BASE_URL = 'http://localhost:5000'
// rather than passing props data to have info about baord, we're making another API call. 
// that way, our cards and board info is all in one place

const Board = (props) =>{
    const [boardData, setBoardData] = useState([])
    const [cardData, setCardData] = useState([])
    useEffect(()=>{
        if (props.id){
            axios.get(`${BASE_URL}/boards/${props.id}/cards`)
            .then((res)=>{
            setBoardData(res.data)
            setCardData(res.data.cards)
            })
        } else{
            return null
        }
        
    }, [props])

    const deleteCard = (id) => {
        // deletes card, triggers re-render by setting state to list of all cards
        // uses API call instead of checking over list of current cards for consistency,
        // so if server goes down etc does not thing they're making changes.
        axios.delete(`${BASE_URL}/cards/${id}`).then(()=>{
            axios.get(`${BASE_URL}/boards/${props.id}/cards`)
            .then((res)=>{
            setCardData(res.data.cards)
            })
            }
        )
    }
    
    const cardsList = cardData.map((card, index)=> {
        return <Card card={card} key={index} deleteCard={deleteCard}/>
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