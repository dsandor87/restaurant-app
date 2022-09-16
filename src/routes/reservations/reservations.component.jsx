import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./reservations.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import ReservationsForm from "../../components/reservation-form/reservation-form.component";
import ContactForm from "../../components/contact-form/contact-form.component";

const Reservations = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="authentication-container">
        <ReservationsForm />
        <ContactForm />
      </div>
    </>
  );
};

export default Reservations;
