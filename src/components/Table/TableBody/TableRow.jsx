import React from "react";

const TableRow = ({ fieldValue, toolTipActive, row, hasToolTip }) => {
  return (
    <>
      <span>{fieldValue}</span>
    </>
  );
};

export default React.memo(TableRow);
