import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import Shop from "../shop/shop.component";
import Home from "../home/home.component";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {!currentUser ? (
        <div className="authentication-container">
          <SignInForm />
          <SignUpForm />
        </div>
      ) : (
        navigate("/menu")
      )}
    </>
  );
};

export default Authentication;
