import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";
import "./form-contact.css";

const ContactForm = () => {
  const history = useHistory("path");
  console.log(history);
  const [status, setStatus] = React.useState(undefined);
  const styles = {
    color: "red",
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("* Name field is required"),
      email: Yup.string().email("Invalid email address").required("* Email field is required"),
      subject: Yup.string().required("* Subject field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values) => {
      try {
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            values
            // process.env.REACT_APP_USER_ID
          )
          .then(() => {
            setStatus({ type: "success" });
            formik.resetForm();
            setTimeout(() => {
              setStatus(status);
              history.push("/home");
            }, 5000);
          });
      } catch (err) {
        setStatus({ type: "error", err });
        formik.resetForm();
        setTimeout(() => {
          setStatus(status);
        }, 3000);
      }
    },
  });
  return (
    <form className="myform--container" onSubmit={formik.handleSubmit}>
      {status?.type === "success" && (
        <p className="status--success">Thanks. John will get back to you as soon as possible</p>
      )}
      {status?.type === "error" && <p className="status--error">My Bad! An error occurred</p>}
      <div className="myform--container__body">
        <div className="myform--body__name">
          <label className="myform--name__label">
            Name:
            <input
              type="text"
              className="input--name"
              autoComplete="off"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
          </label>
          <div style={styles} className={`myform-error ${formik.touched.name && formik.errors.name ? "show" : ""}`}>
            {formik.errors.name}
          </div>
        </div>
        <div className="myform--body__email">
          <label className="myform--email__label">
            Email:
            <input
              type="email"
              className="input--email"
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </label>
          <div style={styles} className={`myform-error ${formik.touched.email && formik.errors.email ? "show" : ""}`}>
            {formik.errors.email}
          </div>
        </div>
        <div className="myform--body__subject">
          <label className="myform--subject__label">
            Subject:
            <input
              type="text"
              className="input--subject"
              name="subject"
              autoComplete="off"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
          </label>
          <div
            style={styles}
            className={`myform-error ${formik.touched.subject && formik.errors.subject ? "show" : ""}`}
          >
            {formik.errors.subject}
          </div>
        </div>
        <div className="myform--body__message">
          <label className="myform--message__label">
            Message:
            <textarea
              className="input--message"
              name="message"
              autoComplete="off"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </label>
          <div
            style={styles}
            className={`myform-error ${formik.touched.message && formik.errors.message ? "show" : ""}`}
          >
            {formik.errors.message}
          </div>
        </div>
        <div className="myform--body__btn">
          <button type="submit" className="myform--btn" disabled={!formik.isValid}>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
