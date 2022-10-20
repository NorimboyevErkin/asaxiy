import { Collapse as AntCollapse } from "antd";
import React from "react";
import "./Collapse.scss";

const { Panel } = AntCollapse;

type ChildArr = {
  header: string;
  text?: any;
};

type Props = {
  items: Array<ChildArr>;
};
function Collapse({ items }: Props) {
  return (
    <div className="my-collapse">
      <AntCollapse accordion>
        {items.map((item, index) => (
          <Panel header={item.header} key={index}>
            {item.text}
          </Panel>
        ))}
      </AntCollapse>
    </div>
  );
}

export default Collapse;
