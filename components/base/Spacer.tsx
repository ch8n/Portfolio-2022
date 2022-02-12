import * as React from "react";

const Spacer: React.FC<{ style?: string }> = ({ style = "", children }) => (
  <div className={`${style}`} />
);

export default Spacer;
