import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Table from "../../components/Table";
import { TABLE_HEADER_TITLES } from "../../constants";
import { fetchProductsList } from "../../store/actions/productsActions";

const StyledProducts = styled.section`
  min-height: 100vh;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
`;

const Products = ({ fetchProductsList, productsList }) => {
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);
  return (
    <StyledProducts>
      <Table columns={TABLE_HEADER_TITLES} data={productsList}></Table>
    </StyledProducts>
  );
};

export const mapStateToProps = (state) => {
  const {
    products: { data: productsList },
  } = state;
  return {
    productsList,
  };
};

export const mapDispatchToProps = {
  fetchProductsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
