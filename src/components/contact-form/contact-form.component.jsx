import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { SignInContainer, ButtonsContainer } from "./contact-form styles";

const defaultFormFields = {
  message: "",
  tel: "",
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { message, tel } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    alert("Message was sent");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Contact us</h2>
      <span>We will contact you as soon as we can</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Message"
          type="text"
          required
          onChange={handleChange}
          name="message"
          value={message}
        />
        <FormInput
          label="Telephone number"
          type="tel"
          required
          onChange={handleChange}
          name="tel"
          value={tel}
        />

        <ButtonsContainer>
          <Button type="submit">Send</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default ContactForm;
