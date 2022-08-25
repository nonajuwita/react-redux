import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {

const {authReducer} = useSelector((state) => state)

  return (
   <div>
    {
      !!authReducer.isLogin ? (
        <div>
          <CardImage/>
          <CardName/>
          </div>
      ) : (
        <div>
          belum login
          </div>
      )
    }
   </div>
  );
};

export default Card;
