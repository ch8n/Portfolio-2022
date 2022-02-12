import React from "react";
import Column from "./base/Column";

const PageTitle: React.FC<{ name: string; views: number }> = (props) => (
  <Column style="pl-8 pt-8">
    <p className="text-4xl">{props.name}</p>
    <p className="text-sm">{props.views} Views</p>
  </Column>
);

export default PageTitle;
