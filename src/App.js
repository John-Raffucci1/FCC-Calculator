import "./App.css";
import react from "react";
import { Calculator } from "./Components/Calculator";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccd4e3;
  height: 100vh;
`;

function App() {
  return (
    <AppDiv id="display" className="App">
      <Calculator />
    </AppDiv>
  );
}

export default App;
