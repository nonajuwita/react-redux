import React from 'react'
import NavbarImage from './NavbarImage';
import NavbarName from './NavbarName';
import { useState } from 'react';

const Navbar = () => {
    const [data, setData] = useState({
        name: "muhsin",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      });
  return (
    <div style={{display:"flex"}}>
        <NavbarName data={data}/>
        <NavbarImage data={data}/>
    </div>
  )
}

export default Navbar