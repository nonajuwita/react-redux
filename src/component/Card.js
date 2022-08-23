import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
import { useState } from "react";
import { useSelector } from "react-redux";

const Card = () => {
const reduxData = useSelector((data) => data)

  const [data, setData] = useState({
    name: "muhsin",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  });

  console.log("data", reduxData)
  return (
    <div>
      <CardName data={data} />
      <CardImage data={data} />
    </div>
  );
};

export default Card;
