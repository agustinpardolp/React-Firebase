import React from "react";

const TableRow = ({ fieldValue }) => {
  return <span>{fieldValue}</span>;
};

export default React.memo(TableRow);
