import React from "react";
import { useFormik } from "formik";
import "./LoginForm.css";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    // validationSchema
  });
  //   console.log("Form errors", formik.errors);
  //   console.log("visited fields", formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
