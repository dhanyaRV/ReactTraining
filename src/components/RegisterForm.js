import React from "react";
import "./RegisterForm.css";
import { useFormik } from "formik";

const initialValues = {
  Firstname: "",
  Lastname: "",
  email: "",
  mobile: "",
  Username: "",
  DOB: "",
  Pincode: "",
  Gender: "",
  Address: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.Firstname) {
    errors.Firstname = "Required";
  }

  if (!values.Lastname) {
    errors.Lastname = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.mobile) {
    errors.mobile = "Required";
  }

  if (!values.Username) {
    errors.Username = "Required";
  }

  if (!values.DOB) {
    errors.DOB = "Required";
  }

  if (!values.Pincode) {
    errors.Pincode = "Required";
  }

  // if (!values.Gender) {
  //   errors.Gender = "Required";
  // }

  if (!values.Address) {
    errors.Address = "Required";
  }

  return errors;
};

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    // validationSchema
  });
  // console.log("Form errors", formik.errors);
  // console.log("visited fields", formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-inner">
        <h2>Register Here!</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            name="Firstname"
            id="firstname"
            placeholder="enter your first Name"
            onChange={formik.handleChange}
            value={formik.values.Firstname}
          />
          {formik.touched.Firstname && formik.errors.Firstname ? (
            <div className="error">{formik.errors.Firstname}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            name="Lastname"
            id="lastname"
            placeholder="enter your last Name"
            onChange={formik.handleChange}
            value={formik.values.Lastname}
          />
          {formik.touched.Lastname && formik.errors.Lastname ? (
            <div className="error">{formik.errors.Lastname}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="number">Mobile:</label>
          <input
            type="number"
            name="mobile"
            id="number"
            placeholder="Phone number"
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="error">{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="username">UserName:</label>
          <input
            type="username"
            name="Username"
            id="username"
            placeholder=" username"
            onChange={formik.handleChange}
            value={formik.values.Username}
          />
          {formik.touched.Username && formik.errors.Username ? (
            <div className="error">{formik.errors.Username}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="DOB"
            id="dob"
            min="1997-01-01"
            max="2021-12-31"
            onChange={formik.handleChange}
            value={formik.values.DOB}
          />
          {formik.touched.DOB && formik.errors.DOB ? (
            <div className="error">{formik.errors.DOB}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin code:</label>
          <input
            type="number"
            name="Pincode"
            id="pincode"
            placeholder="Your pincode"
            onChange={formik.handleChange}
            value={formik.values.Pincode}
          />
          {formik.touched.Pincode && formik.errors.Pincode ? (
            <div className="error">{formik.errors.Pincode}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="number">Gender:</label>
          <input
            type="radio"
            name="Gender"
            id="gender"
            onChange={formik.handleChange}
            value={formik.values.Gender}
          />
          &nbsp;&nbsp;
          <span id="male">Male</span>
          <input
            type="radio"
            name="Gender"
            id="gender"
            onChange={formik.handleChange}
            value={formik.values.Gender}
          />
          &nbsp;&nbsp;
          <span id="male">Female</span>
          {/* {formik.touched.Gender && formik.errors.Gender ? (
            <div className="error">{formik.errors.Gender}</div>
          ) : null} */}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            name="Address"
            id="address"
            placeholder="Your address"
            onChange={formik.handleChange}
            value={formik.values.Address}
          />
          {formik.touched.Address && formik.errors.Address ? (
            <div className="error">{formik.errors.Address}</div>
          ) : null}
        </div>
        <input type="submit" value="SUBMIT" name="submit" id="submit"></input>
      </div>
    </form>
  );
};

export default RegisterForm;
