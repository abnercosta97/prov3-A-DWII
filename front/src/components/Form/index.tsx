import { useState } from "react";
import styled from "styled-components";
import { ColorProps } from "../../types";
import { useColor } from "../../hooks";

export default function Form() {
  const [red, setRed] = useState("");
  const [green, setGreen] = useState("");
  const [blue, setBlue] = useState("");
  const { create } = useColor();

  const save = async () => {
    try {
      const color: ColorProps = {
        red: parseInt(red),
        green: parseInt(green),
        blue: parseInt(blue),
      };
      create(color);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <WrapperSld>
      <InputSld
        placeholder="R"
        value={red}
        onChange={(e) => setRed(e.target.value)}
      />
      <InputSld
        placeholder="G"
        value={green}
        onChange={(e) => setGreen(e.target.value)}
      />
      <InputSld
        placeholder="B"
        value={blue}
        onChange={(e) => setBlue(e.target.value)}
      />
      <ButtonSld onClick={save}>Cadastrar</ButtonSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #888;
  padding: 10px;
  margin: 10px;
`;
const InputSld = styled.input.attrs({ type: "text" })`
  border: 1px solid #555;
  border-radius: 6px;
  padding: 8px;
  margin-right: 10px;
  font-weight: bold;
  font-family: calibri;
  font-size: 16px;
  width: 35px;
  text-align: right;
`;

const ButtonSld = styled.button`
  background-color: #aaa;
  font-weight: bold;
  border-radius: 6px;
  border: 1px solid #aaa;
  padding: 5px;
  margin-left: 10px;
  &:hover {
    background-color: orange;
  }
`;
