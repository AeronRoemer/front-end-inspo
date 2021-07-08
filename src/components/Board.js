import { useState, useEffect } from "react";
import axios from "axios";

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
        return(
            <h2>Hi, I'm {boardData.title}</h2>
        )
}
export default Board;