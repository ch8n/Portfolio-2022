import * as React from "react";

const Row: React.FC<{ style?: string }> = ({ style = "", children }) => (
  <div className={`flex flex-row ${style}`}>{children}</div>
);

export default Row;
