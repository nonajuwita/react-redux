import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './component/Card';
import Navbar from './component/Navbar';


function App() {

  return (
  <div>
      
      <Navbar/>
    
    <div>
    <Card/>
    </div>
  </div>
  );
}

export default App;
