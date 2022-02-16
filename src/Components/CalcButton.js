import react from "react";
import styled from "styled-components";

let Button = styled.button`
  color: white;
  height: 70px;
  border: none;
  width: 100px;
  :hover {
    color: black;
    border: solid 2px #798191;
  }
`;

const NumberButton = styled(Button)`
  background-color: #2d2f33;
  color: white;
`;

const OperatorButton = styled(Button)`
  background-color: grey;
`;

const ClearButton = styled(Button)`
  grid-column: span 2;
  background-color: red;
  color: white;
  width: auto;
`;

const EqualButton = styled(Button)`
  grid-row: span 2;
  background-color: blue;
  height: auto;
`;

const ZeroButton = styled(Button)`
  background-color: #2d2f33;
  color: white;
  grid-column: span 2;
  width: auto;
`;

export const CalcButton = (props) => {
  const {
    id,
    number,
    type,
    text,
    inputOne,
    inputTwo,
    operand,
    setInputOne,
    setInputTwo,
    setOperand,
    value,
    answer,
    setAnswer,
  } = props;
  const calculatorFunction = (value) => {
    if (operand !== "") {
      setInputTwo(inputTwo + value);
    } else {
      setInputOne(inputOne + value);
    }
  };
  const clearFunction = () => {
    setInputOne("");
    setInputTwo("");
    setOperand("");
    setAnswer("");
  };
  const handleOperator = (text) => {
    if (answer === "") {
      setOperand(text);
    }
    if (answer !== "") {
      setOperand(text);
      setInputOne(answer.toString());
      setInputTwo("");
      setAnswer("");
      console.log({ inputOne });
      console.log({ inputTwo });
      console.log({ operand });
    }
  };
  const answerEquation = () => {
    let firstNumber = parseFloat(inputOne);
    let secondNumber = parseFloat(inputTwo);
    switch (operand) {
      case "+":
        return setAnswer(firstNumber + secondNumber);
        console.log(firstNumber);
      case "-":
        return setAnswer(firstNumber - secondNumber);
      case "/":
        return setAnswer(firstNumber / secondNumber);
      case "x":
        return setAnswer(firstNumber * secondNumber);
    }
  };
  switch (type) {
    case "number":
      return (
        <NumberButton
          id={id}
          type={type}
          text={text}
          onClick={() => calculatorFunction(value)}
        >
          {props.text}
        </NumberButton>
      );
    case "operator":
      return (
        <OperatorButton
          id={id}
          type={type}
          text={text}
          onClick={() => handleOperator(text)}
        >
          {props.text}
        </OperatorButton>
      );
    case "clear":
      return (
        <ClearButton id={id} type={type} text={text} onClick={clearFunction}>
          {props.text}
        </ClearButton>
      );
    case "equals":
      return (
        <EqualButton id={id} type={type} text={text} onClick={answerEquation}>
          {props.text}
        </EqualButton>
      );
    case "zero":
      return (
        <ZeroButton
          id={id}
          type={type}
          text={text}
          onClick={() => calculatorFunction(value)}
        >
          {props.text}
        </ZeroButton>
      );
  }
  return (
    <Button id={id} type={type} text={text}>
      {props.text}
    </Button>
  );
};
