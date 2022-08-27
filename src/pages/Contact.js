import React, { useRef, useState, useEffect } from "react";
import { Form, FormRows } from "../styles/contact";
import FormRow from "../components/FormRow";
import emailjs from "@emailjs/browser";
import {
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY,
} from "../utils/index";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const initialValues = { username: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [messageStatus, setMessageStatus] = useState("");
  const [visible, setVisible] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "*Name is required!";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*Invalid email format!";
    }
    if (!values.subject) {
      errors.subject = "*Subject is required!";
    }
    if (!values.message) {
      errors.message = "*You didn't write any message!";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0 ? true : false;
  };

  const visibilityChange = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate(formValues)) {
      emailjs
        .sendForm(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          form.current,
          REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessageStatus("Sent!");
            visibilityChange();
            setFormValues(initialValues);
          },
          (error) => {
            setMessageStatus("Failed to send!");
            visibilityChange();
          }
        );
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Form name="contact" ref={form} onSubmit={sendEmail}>
      <h1>
        Contact
        {visible && (
          <span className={messageStatus === "Sent!" ? "success" : "error"}>
            {messageStatus}
          </span>
        )}
      </h1>
      <FormRows data-aos="fade-up">
        <FormRow
          name="username"
          text="Your Name"
          errors={formErrors.username}
          type="text"
          handleChange={handleChange}
          value={formValues.username}
        />
        <FormRow
          name="email"
          text="Email"
          errors={formErrors.email}
          type="text"
          handleChange={handleChange}
          value={formValues.email}
        />
        <FormRow
          name="subject"
          text="Subject"
          errors={formErrors.subject}
          type="text"
          handleChange={handleChange}
          value={formValues.subject}
        />
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          autoComplete="off"
        ></textarea>
        <span>{formErrors.message}</span>
        <button type="submit" className="btn">
          Send
        </button>
      </FormRows>
    </Form>
  );
};

export default Contact;
