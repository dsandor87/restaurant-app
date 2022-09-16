import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import animationData from "../../assets/little_cottage_.json";

import Lottie from "react-lottie";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {},
  };
  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Lottie
            to="/"
            style={{ margin: "0px" }}
            options={defaultOptions}
            height={100}
            width={300}
          />{" "}
        </LogoContainer>
        <NavLinks>
          <NavLink to="/menu">MENU</NavLink>
          {currentUser ? (
            <NavLink to="/reservations">RESEVATIONS</NavLink>
          ) : null}
          <NavLink to="/contact-us">CONTACT US</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
