import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { StyledMain } from "./styled-components";
import NavbarMenu from "../../components/Navbar";
import Footer from "../../components/Footer";
import Products from "../Products";
import Gallery from "../Gallery";
import Profile from "../Profile";
import ToastNotification from "../../components/ToastNotification";

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
      <ToastNotification />
    </StyledMain>
  );
};

export default withRouter(Main);
