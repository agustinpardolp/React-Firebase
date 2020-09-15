import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { StyledMain } from "./styled-components";
import NavbarMenu from "../../components/navbar";
import Footer from "../../components/footer";
import Products from "../Products";
import Gallery from "../Gallery";
import Profile from "../Profile";

const Main = () => {
  return (
    <StyledMain>
      <NavbarMenu />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/gallery" component={Gallery} />
        <Redirect to="/gallery" />
      </Switch>
      <Footer />
    </StyledMain>
  );
};

export default withRouter(Main);
