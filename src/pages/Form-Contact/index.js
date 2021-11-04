import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";
import "./form-contact.css";

const ContactForm = () => {
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
            values,
            process.env.REACT_APP_USER_ID
          )
          .then(() => {
            console.log('sent')
            formik.resetForm();
          });
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <form className="myform--container" onSubmit={formik.handleSubmit}>
      {console.log(formik.isValid)}
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
          {/* <span className="myform--error">A</span> */}
          <div className={`myform-error ${formik.touched.name && formik.errors.name ? "show" : ""}`}>
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
          {/* <span className="myform--error">B</span> */}
          <div className={`myform-error ${formik.touched.email && formik.errors.email ? "show" : ""}`}>
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
          {/* <span className="myform--error">C</span> */}
          <div className={`myform-error ${formik.touched.subject && formik.errors.subject ? "show" : ""}`}>
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
          {/* <span className="myform--error">D</span> */}
          <div className={`myform-error ${formik.touched.message && formik.errors.message ? "show" : ""}`}>
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

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import * as emailjs from "emailjs-com";

// const MYForm = () => {
//   const [buttonState, setButtonState] = useState("Send Message");
//   const formik = useFormik({
//     //we have created our initailValues object in a format EmailJS accepts
//     initialValues: {
//       from_name: "", //user name
//       to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
//       subject: "", // subject of email
//       reply_to: "", // user email
//       message: "", // message of email
//     },
//     validationSchema: Yup.object({
//       from_name: Yup.string().required("* Name field is required"),
//       subject: Yup.string().required("* Subject field is required"),
//       reply_to: Yup.string().email("Invalid email address").required("* Email field is required"),
//       message: Yup.string().required("* Message field is required"),
//     }),
//     onSubmit: (values) => {
//       try {
//         emailjs
//           .send(
//             process.env.REACT_APP_SERVICE_ID,
//             process.env.REACT_APP_TEMPLATE_ID,
//             values,
//             process.env.REACT_APP_USER_ID
//           )
//           .then(() => {
//             // sentMessage.classList.add("success");
//             // sentMessage.innerHTML = CONTACT_ERROR.success;
//              console.log('Thanks')
//             // setButtonState("Send Email");
//             // setSubmitting(false);
//             formik.resetForm();
//           });
//       } catch {
//         // sentMessage.classList.add("error");
//         // sentMessage.innerHTML = CONTACT_ERROR.error;
//         setButtonState("Send Email");
//         // setSubmitting(false);
//       }
//     },
//   });
//   return (
//     <form className="formcontact" onSubmit={formik.handleSubmit}>
//       <div className="row contactform">
//         <div className="col-12 col-md-4">
//           <label htmlFor="from_name" />
//           <input
//             id="from_name"
//             name="from_name"
//             type="text"
//             autoComplete="off"
//             placeholder="YOUR NAME"
//             onChange={formik.handleChange}
//             value={formik.values.from_name}
//           />
//           <div className={`expandable ${formik.touched.from_name && formik.errors.from_name ? "show" : ""}`}>
//             {formik.errors.from_name}
//           </div>
//         </div>
//         <div className="col-12 col-md-4">
//           <label htmlFor="subject" />
//           <input
//             id="subject"
//             name="subject"
//             type="text"
//             autoComplete="off"
//             placeholder="SUBJECT"
//             onChange={formik.handleChange}
//             value={formik.values.subject}
//           />
//           <div className={`expandable ${formik.touched.subject && formik.errors.subject ? "show" : ""}`}>
//             {formik.errors.subject}
//           </div>
//         </div>
//         <div className="col-12 col-md-4">
//           <label htmlFor="reply_to" />
//           <input
//             id="reply_to"
//             type="email"
//             name="reply_to"
//             placeholder="YOUR EMAIL"
//             autoComplete="off"
//             onChange={formik.handleChange}
//             value={formik.values.reply_to}
//           />
//           <div className={`expandable ${formik.touched.reply_to && formik.errors.reply_to ? "show" : ""}`}>
//             {formik.errors.reply_to}
//           </div>
//         </div>
//         <div className="col-12">
//           <label htmlFor="message" />
//           <textarea
//             id="message"
//             name="message"
//             placeholder="YOUR MESSAGE"
//             autoComplete="off"
//             onChange={formik.handleChange}
//             value={formik.values.message}
//           />
//           <div className={`expandable ${formik.touched.message && formik.errors.message ? "show" : ""}`}>
//             {formik.errors.message}
//           </div>
//         </div>
//         <div className="col-12">
//           <button disabled={formik.isSubmitting} type="submit" className="btn main-btn">
//             <span>{buttonState}</span>
//           </button>
//         </div>
//         <div className="col-12 form-message">
//           <span id="output" className="output_message text-center text-uppercase" />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default MYForm;
