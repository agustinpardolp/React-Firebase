import React from "react";
import styled from "styled-components";
import Table from "../../components/Table";
import { TABLE_HEADER_TITLES } from "../../constants";

const StyledProducts = styled.section`
  min-height: 100vh;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
`;

const Products = () => {
  return (
    <StyledProducts>
      <Table columns={TABLE_HEADER_TITLES}></Table>
    </StyledProducts>
  );
};

export default Products;
