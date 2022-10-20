import { Tag as AntTag } from "antd";
import "./Tag.scss";

type Props = {
  color?: "red" | "orange";
  text?: string;
};

function Tag({ color = "red", text }: Props) {
  return (
    <AntTag
      style={
        color === "red" ? { background: "#ff0000" } : { background: "#ff9800" }
      }
    >
      {text}
    </AntTag>
  );
}

export default Tag;
