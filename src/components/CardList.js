import React from "react";
// Styles
import styled from "styled-components";
import { GridContainer } from "../styles";
// Data
import cards from "../data";
// Components
import CardItem from "./CardItem";

const CardList = () => {
  // Shuffle
  let arrayShuffle = (arr) => {
    let newpos, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      newpos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newpos];
      arr[newpos] = temp;
    }
    return arr;
  };
  let newArray = arrayShuffle(cards);

  const cardList = newArray.map((card) => (
    <CardItem card={card} key={card.id} />
  ));
  return <GridContainer>{cardList}</GridContainer>;
};
export default CardList;
