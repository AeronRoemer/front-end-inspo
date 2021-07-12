import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:5000'

const Card = (props) => {
    const data = props.card
    const deleteCard = props.deleteCard
    const likeCard = props.likeCard

    return(
        <div className='single-card'>
            <p> Hi,I'm a card {data.card_id}</p>
            <p>I have something to say: {data.message}</p>
            <p>I have this many likes {data.likes_count}<span onClick={()=> likeCard(data.card_id, data.likes_count)}>+</span></p>
            <p>But you can delete me too <button onClick={() => deleteCard(data.card_id)}>bye</button></p>
        </div>
        
    )
}

export default Card