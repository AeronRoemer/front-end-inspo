import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
    const data = props.card
    console.log(props.card)
    return(
        <div className='single-card'>
            <p> Hi,I'm a card {data.card_id}</p>
            <p>I have something to say: {data.message}</p>
            <p>But you can delete me too <button>bye</button></p>
        </div>
        
    )
}

export default Card