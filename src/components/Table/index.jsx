import React from "react";
import styled from "styled-components";

import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";
import { Table as BoostrapTable } from "react-bootstrap";

const StyledTable = styled(BoostrapTable)`
  tr {
    text-align: center;
  }
`;

const Table = ({ columns, data }) => {
  const DATATYPE = {
    DATE: "created",
    NAME: "person_first_name",
    FULLNAME: "first_name",
    PERSON_TYPE: "person_type",
    REQUEST_TYPE: "request_type",
    STATUS: "status",
    CLIENT_STATUS: "contacts",
    ACTION: "is_active",
    ACTION_TIME: "action_time",
    SOURCE: "source",
    REASON: "cancellation_reason",
    DOWNLOAD_DOC: "doc",
  };

  let formats = [];

  const renderHeader = (columns, disableHeader) => {
    return (
      <tr>
        {columns && columns.length ? (
          columns.map((col) => {
            let currentFormat = col.format ? col.format : "text";
            formats.push({ format: currentFormat, dataField: col.dataField });
            return !disableHeader ? (
              <TableHeader key={col.id} col={col} />
            ) : null;
          })
        ) : (
          <th />
        )}
      </tr>
    );
  };

  const renderBody = (data, disableLink) => {
    if (data && data.length > 0) {
      return data.map((row) => {
        return (
          <TableBody
          // key={row.serial || row.id}
          // formats={formats}
          // row={row}
          // DATATYPE={DATATYPE}
          // hasToolTip={hasToolTip}
          // disableLink={disableLink}
          // callBack={callBack}
          // pathTo={pathTo}
          />
        );
      });
    } else
      return (
        <tr>
          <td
            align={"center"}
            colSpan={columns && columns.length > 0 ? columns.length : 1}
          >
            No hay datos disponibles
          </td>
        </tr>
      );
  };
  return (
    <StyledTable responsive striped bordered hover>
      <thead>{renderHeader(columns)}</thead>
      <tbody>{renderBody(data)}</tbody>
    </StyledTable>
  );
};

export default Table;
