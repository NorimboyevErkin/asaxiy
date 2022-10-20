import React from "react";
import styles from "./Grid.module.scss";

type Props = {
  children: any;
  minmax: string;
  gap?: string;
  others?: any;
};

const Grid = ({ children, minmax, gap, others }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(${minmax}, 1fr))`,
        gap: gap,
      }}
      {...others}
    >
      {children}
    </div>
  );
};

export default Grid;
