import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Table from "../../components/Table";
import { TABLE_HEADER_TITLES } from "../../constants";
import { fetchProductsList } from "../../store/actions/productsActions";
import ContentWrapper from "../../components/ContentWrapper";

const StyledProducts = styled.section`
  padding: 3%;
`;

const Products = ({ fetchProductsList, productsList }) => {
  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);
  return (
    <ContentWrapper backgroundColor={"var(--backgroundColor)"}>
      <StyledProducts>
        <Table columns={TABLE_HEADER_TITLES} data={productsList}></Table>
      </StyledProducts>
    </ContentWrapper>
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
