import React from "react";

const TableHeader = ({ col }) => {
  return (
    <>
      {col.sortable ? (
        <td key={col.id} style={col.styles} onClick={col.onClick}>
          {col.name}{" "}
          <i className="fas fa-sort" aria-hidden="true">
            ↕
          </i>
        </td>
      ) : (
        <td key={col.id} style={col.styles}>
          {" "}
          {col.name}
        </td>
      )}
    </>
  );
};
export default React.memo(TableHeader, (prevProps, nextProps) => {
  return prevProps.col.id === nextProps.col.id;
});
