import React from "react";
import { StyledTableHeader } from "../styled-components";

const TableHeader = ({ col }) => {
  return (
    <StyledTableHeader key={col.id} style={col.styles}>
      {" "}
      {col.name}
    </StyledTableHeader>
  );
};
export default React.memo(TableHeader, (prevProps, nextProps) => {
  return prevProps.col.id === nextProps.col.id;
});
