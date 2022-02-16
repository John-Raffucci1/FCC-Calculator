import react from "react";
import { CalcButtonCollection } from "./CalcButtonCollection";
import { Display } from "./Display";
import styled from "styled-components";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";

const CalcStyle = styled.div`
  align-items: center;
  border: solid 1px black;
  justify-content: center;
  background-color: black;
  padding: 10px;
`;

export function Calculator() {
  const [inputOne, setInputOne] = react.useState("");
  const [inputTwo, setInputTwo] = react.useState("");
  const [operand, setOperand] = react.useState("");
  const [answer, setAnswer] = react.useState("");
  const displayFunction = () => {
    if (answer !== "") {
      return answer;
    }
    if (operand !== "" && inputTwo !== "") {
      return inputTwo;
    }
    if (operand !== "") {
      return operand;
    }
    return inputOne;
  };
  return (
    <CalcStyle>
      <Display displayNum={displayFunction()} />
      <CalcButtonCollection
        inputOne={inputOne}
        setInputOne={setInputOne}
        inputTwo={inputTwo}
        setInputTwo={setInputTwo}
        operand={operand}
        setOperand={setOperand}
        answer={answer}
        setAnswer={setAnswer}
      />
    </CalcStyle>
  );
}
