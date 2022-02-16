import ButtonsConsts from "../ButtonsConsts";
import { CalcButton } from "./CalcButton";
import styled from "styled-components";

const CalcButtonCollectionDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  justify-content: center;
  height: min-content;
  grid-gap: 2px;
`;

export const CalcButtonCollection = (props) => {
  const {
    inputOne,
    inputTwo,
    operand,
    setInputOne,
    setInputTwo,
    setOperand,
    setAnswer,
    answer,
  } = props;
  return (
    <CalcButtonCollectionDiv>
      {ButtonsConsts.map(({ id, type, text, value }) => {
        return (
          <CalcButton
            id={id}
            type={type}
            text={text}
            inputOne={inputOne}
            inputTwo={inputTwo}
            operand={operand}
            setInputOne={setInputOne}
            setInputTwo={setInputTwo}
            setOperand={setOperand}
            value={value}
            setAnswer={setAnswer}
            answer={answer}
          />
        );
      })}
    </CalcButtonCollectionDiv>
  );
};
