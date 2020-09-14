import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  li {
    list-style: none;
  }
  &&:nth-child(1) {
    color: red;
  }
`;

const ProfileInfo = () => {
  return (
    <>
      <StyledCol xs={12} md={4}>
        <h3>Juan Garcia</h3>
        <h4>Total Sales SRL</h4>
        <h5>Sales Manager</h5>
        <ul>
          <li>email:agus@hotmail.com</li>
          <li>Phone:(+54-453-15478) </li>
          <li>email:agus@hotmail.com</li>
          <li>email:agus@hotmail.com</li>
        </ul>
      </StyledCol>
      <StyledCol xs={12} md={2}>
        <ul>
          <li>email:agus@hotmail.com</li>
        </ul>
      </StyledCol>
    </>
  );
};

export default ProfileInfo;
