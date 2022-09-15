import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import animationData from "../../assets/little_cottage_.json";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import Lottie from "react-lottie";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {},
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Lottie
            to="/"
            style={{ margin: "0px" }}
            options={defaultOptions}
            height={100}
            width={300}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/menu">
            MENU
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
