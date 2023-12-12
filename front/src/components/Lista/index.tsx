import styled from "styled-components";
import { useColor } from "../../hooks";
import { ColorProps } from "../../types";

export default function Lista() {
  const { colors, remove } = useColor();

  return (
    <WrapperSld>
      {colors.map((color) => (
        <ColorSld
          key={color.id}
          back={rgbHexadecimal(color)}
          color={inverseColor(color)}
          onClick={() => remove(color.id || 0)}
        >
          {rgbHexadecimal(color)}
        </ColorSld>
      ))}
    </WrapperSld>
  );
}

function rgbHexadecimal(color: ColorProps) {
  const r =
    color.red.toString(16).length < 2
      ? "0" + color.red.toString(16)
      : color.red.toString(16);
  const g =
    color.green.toString(16).length < 2
      ? "0" + color.green.toString(16)
      : color.green.toString(16);
  const b =
    color.blue.toString(16).length < 2
      ? "0" + color.blue.toString(16)
      : color.blue.toString(16);
  return `#${r}${g}${b}`;
}

function inverseColor(color: ColorProps) {
  const rinverse = 255 - color.red,
    ginverse = 255 - color.green,
    binverse = 255 - color.blue;
  const r =
    rinverse.toString(16).length < 2
      ? "0" + rinverse.toString(16)
      : rinverse.toString(16);
  const g =
    ginverse.toString(16).length < 2
      ? "0" + ginverse.toString(16)
      : ginverse.toString(16);
  const b =
    binverse.toString(16).length < 2
      ? "0" + binverse.toString(16)
      : binverse.toString(16);
  return `#${r}${g}${b}`;
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ListProps {
  color: string;
  back: string;
}

// Props no componente estilizado
const ColorSld = styled.div<ListProps>`
  padding: 5px;
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.color};
  background: ${(props) => props.back};
  cursor: pointer;

  &:hover {
    font-style: italic;
  }
`;
