import React from "react";
import { uuid } from "uuidv4";

import { withRouter } from "react-router-dom";
import TableRow from "./TableRow";

const TableBody = ({
  formats,
  row,
  DATATYPE,
  history,
  hasToolTip,
  disableLink,
  callBack,
  pathTo,
}) => {
  const openSelectedRow = (row, pathTo) => {
    return (
      pathTo &&
      history.push(`${pathTo[0]}${row.id}${pathTo[1] ? pathTo[1] : ""}`)
    );
  };

  // const nameHandler = (...args) => {
  //   let datafield = {
  //     name: "",
  //     toolTip: false,
  //   };
  //   if (args.toString().length > 20) {
  //     if (args.length > 1) {
  //       datafield.name = `${args[0]}, ${args[0].substring(0, 20)}...`;
  //       datafield.toolTip = true;
  //     } else {
  //       datafield.name = `${args[0].substring(0, 20)}...`;
  //       datafield.toolTip = true;
  //     }
  //   } else datafield.name = `${args[0]} ${args[1] ? `${args[1]}` : ""}`;
  //   return datafield;
  // };

  const rowDataHandler = (format, row) => {
    let fieldValue = "";

    return (
      <td
        key={uuid()}
        onClick={() => !disableLink && openSelectedRow(row, pathTo)}
      >
        <TableRow fieldValue={fieldValue} row={row} hasToolTip={hasToolTip} />
      </td>
    );
  };

  return (
    <tr key={uuid()}>
      {formats && formats.map((format) => rowDataHandler(format, row))}
    </tr>
  );
};

export default React.memo(withRouter(TableBody), (prevProps, nextProps) => {
  return prevProps.row.id === nextProps.row.id;
});
