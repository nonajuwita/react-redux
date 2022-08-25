import React, {useState} from 'react'
import store from '../redux/store'
import { useSelector } from "react-redux";


const CardImage = () => {
const {cardReducer} = useSelector((state)=> state)
  
  return (
    <div>
        <img src={cardReducer.data.avatar}/>
    </div>
  )
}

export default CardImage