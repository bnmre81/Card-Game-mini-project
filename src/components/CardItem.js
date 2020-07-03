import React, { useState } from "react";
// Styles
import styles from "../styles";
import styled from "styled-components";
import { GridItem } from "../styles";

const CardItem = (props) => {
  const [currentImage, setImage] = useState(props.card.image);
  const handleImage = () => {
    setImage(
      currentImage === props.card.image ? props.card.image2 : props.card.image
    );
  };
  return (
    <GridItem onClick={handleImage}>
      <img src={currentImage} alt={props.card.name} style={styles.cardSize} />
    </GridItem>
  );
};
export default CardItem;
