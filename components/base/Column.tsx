import * as React from "react";

const Column: React.FC<{ style?: string }> = ({ style = "", children }) => (
  <div className={`flex flex-col ${style}`}>{children}</div>
);

export default Column;
