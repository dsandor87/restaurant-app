import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./reservation-form.styles.scss";

const defaultFormFields = {
  name: "",
  email: "",
  tel: "",
  numberOfPeople: "",
  date: "",
};

const ReservationsForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, tel, numberOfPeople, date } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(
      `Dear ${name} you have bookings on ${date} for ${numberOfPeople} people`
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Book a Table with us</h2>
      <span>Add your contact deatiles please</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          required
          onChange={handleChange}
          name="name"
          value={name}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Telephone number"
          type="tel"
          required
          onChange={handleChange}
          name="tel"
          value={tel}
        />

        <FormInput
          label="How Many People?"
          type="number"
          required
          onChange={handleChange}
          name="numberOfPeople"
          value={numberOfPeople}
        />
        <FormInput
          label="Date"
          type="datetime-local"
          required
          onChange={handleChange}
          name="date"
          value={date}
        />
        <Button type="submit">Make the reservation</Button>
      </form>
    </div>
  );
};

export default ReservationsForm;
