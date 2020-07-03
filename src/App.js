import React, { useState } from "react";
// Data
import cards from "./data";
// Styles
import styled from "styled-components";
import styles from "./styles";
import { Test, GridItem, GridContainer } from "./styles";
// Components
import CardList from "./components/CardList";

function App() {
  // Switching Between Images
  const [picture, setImage] = useState(cards[9].image);
  const handlePicture = () => {
    setImage(picture === cards[9].image ? cards[9].image2 : cards[9].image);
  };
  return (
    <div>
      <GridContainer>
        <GridItem onClick={handlePicture}>
          <img src={picture} alt={cards[0].name} style={styles.cardSize} />
        </GridItem>
      </GridContainer>
      <h1>Are you raddy?</h1>
      <CardList />
      <Test>working?</Test>
    </div>
  );
}

export default App;
