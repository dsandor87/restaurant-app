import { Fragment } from "react";
import Lottie from "react-lottie";
import { Outlet, Link } from "react-router-dom";
import animationData from "../../assets/little_cottage_.json";

import "./navigation.styles.scss";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
