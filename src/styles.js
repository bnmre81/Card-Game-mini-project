import styled from "styled-components";

const Test = styled.h1`
  text-align: center;
  color: green;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  backgroundcolor: #2196f3;
  padding: 10px;
`;

const GridItem = styled.div`
  background-color: green;
  border: 5px solid blue;
  padding: 20px;
  font=size: 30px;
  text-align: center;
`;
export { GridContainer, GridItem, Test };

const styles = {
  container: {
    marginLeft: "50px",
    marginRight: "50px",
  },
  cards: {
    margin: "50px",
  },
  cardSize: {
    border: "15px solid black",
    padding: "0px",
    width: "300px",
    height: "180px",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
};
export default styles;
