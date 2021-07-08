import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {

    return(
        <p> Hi,I'm a card {props.id}</p>
    )
}

export default Card