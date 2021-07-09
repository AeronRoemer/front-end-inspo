import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:5000'

const Card = (props) => {
    const [likes, setLikes] = useState(props.card.likes_count)
    const data = props.card
    const deleteCard = props.deleteCard

    const updateCard = (id, likeCount) =>{
        likeCount +=1
        axios.put(`${BASE_URL}/cards/${id}/like`, {'likes_count': likeCount})
        setLikes(likeCount)
    }
    console.log(data.likes_count, likes)
    return(
        <div className='single-card'>
            <p> Hi,I'm a card {data.card_id}</p>
            <p>I have something to say: {data.message}</p>
            <p>I have this many likes {data.likes_count}<span onClick={()=> updateCard(data.card_id, likes)}>+</span></p>
            <p>But you can delete me too <button onClick={() => deleteCard(data.card_id)}>bye</button></p>
        </div>
        
    )
}

export default Card