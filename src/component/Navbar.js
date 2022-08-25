import React from 'react'
import NavbarImage from './NavbarImage';
import NavbarName from './NavbarName';
import { useState } from 'react';

const Navbar = () => {
  
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <NavbarName />
        <NavbarImage />
    </div>
  )
}

export default Navbar