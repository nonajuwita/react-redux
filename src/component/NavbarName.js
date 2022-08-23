import React from 'react'
import { useSelector } from 'react-redux'

const NavbarName = () => {

    const {data} = useSelector((state)=>state)
  return (
    <div>
         <h1>{data.name}</h1>
    </div>
  )
}

export default NavbarName