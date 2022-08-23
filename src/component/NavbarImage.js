import React from 'react'
import { useSelector } from 'react-redux'

const NavbarImage = () => {
const {data} = useSelector((state)=>state)

  return (
    <div>
        <img src={data.avatar}/>
    </div>
  )
}

export default NavbarImage