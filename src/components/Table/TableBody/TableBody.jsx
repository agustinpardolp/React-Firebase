import React from "react";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router-dom";

import TableRow from "./TableRow";

const TableBody = ({ formats, row, DATATYPE }) => {
  const rowDataHandler = (format, row) => {
    let fieldValue = "";

    switch (format.dataField) {
      case DATATYPE.DATE:
        fieldValue = new Date(
          row[format.dataField].seconds * 1000
        ).toLocaleDateString("en-US");
        break;
      default:
        fieldValue = row[format.dataField];
        break;
    }

    return (
      <td key={uuidv4()}>
        <TableRow fieldValue={fieldValue} row={row} />
      </td>
    );
  };

  return (
    <tr key={uuidv4()}>
      {formats && formats.map((format) => rowDataHandler(format, row))}
    </tr>
  );
};

export default React.memo(withRouter(TableBody), (prevProps, nextProps) => {
  return prevProps.row.id === nextProps.row.id;
});
