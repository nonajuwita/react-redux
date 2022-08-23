import React, {useState} from 'react'
import store from '../redux/store'
import { useSelector } from "react-redux";


const CardImage = () => {
const {data} = useSelector((state)=> state)
  
  return (
    <div>
        <img src={data.avatar}/>
    </div>
  )
}

export default CardImage