import React from "react";

const ParameterItem = ({
  name = "",
  value = "",
}: {
  name: string;
  value: string;
}) => {
  return (
    <li className="pro">
      <span>{name}</span>
      <span>{value}</span>
    </li>
  );
};

export default ParameterItem;
