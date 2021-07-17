import { useState, useEffect } from "react";
import axios from "axios";

import Card from './Card.js'
import NewCard from "./NewCard.js";

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
            console.log(res.data)
            setBoardData(res.data)
            setCardData(res.data.cards)
            }).catch(error => {
                return {'error': error}
            })
        } else{
            return null
        }
        
    }, [props])

    // could refactor because of multiple 'get' calls on card updates. 

    const deleteCard = (id) => {
        // deletes card, triggers re-render by setting state to list of all cards
        // uses API call instead of checking over list of current cards for consistency,
        // so if server goes down etc does not thing they're making changes.
        axios.delete(`${BASE_URL}/cards/${id}`).then(()=>{
            axios.get(`${BASE_URL}/boards/${props.id}/cards`)
            .then((res)=>{
            setCardData(res.data.cards)
            }).catch(error => {
                return {'error': error}
            })
            }
        )
    }

    const likeCard = (id, count) => {
        // updates card, triggers re-render by setting state to list of all cards
        // uses API call instead of checking over list of current cards for consistency,
        // so if server goes down etc does not thing they're making changes.
        count += 1
        axios.put(`${BASE_URL}/cards/${id}/like`, {'likes_count': count}).then(()=>{
            axios.get(`${BASE_URL}/boards/${props.id}/cards`)
            .then((res)=>{
            setCardData(res.data.cards)
            }).catch(error => {
                return {'error': error}
            })
            }
        )
    }
    
    const cardsList = cardData.map((card, index)=> {
        return <Card card={card} key={index} deleteCard={deleteCard} likeCard={likeCard}/>
      })

    const newCardSubmit = (event) => {
        console.log(event)
        // uses new card route to generate new card, resets card data with the new card included
        axios.post(`${BASE_URL}/boards/${props.id}/cards`, {"message": event}).then(()=>{
            axios.get(`${BASE_URL}/boards/${props.id}/cards`)
            .then((res)=>{
            setCardData(res.data.cards)
            }).catch(error => {
                return {'error': error}
            })
            }
        )
    }

        return(
            <div className="board-display-container">
                <h3>Hi, I'm {boardData.title}</h3>
                <h4>These are my cards:</h4>
                {boardData ? cardsList : ''}
                <NewCard newCardSubmit={newCardSubmit}/>
            </div>
            
        )
}
export default Board;