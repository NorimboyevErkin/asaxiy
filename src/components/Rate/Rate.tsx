import { Rate as AntRate } from "antd";
import "./Rate.scss";

type Props = {
  rate?: 1 | 2 | 3 | 4 | 5;
};

function Rate({ rate }: Props) {
  return <AntRate defaultValue={1} value={rate} />;
}

export default Rate;
