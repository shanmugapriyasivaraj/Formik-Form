import React from "react";
import { useFormik } from "formik";
import "./SignUp.css";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid Email Address").required("Required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 charaters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="input-container">
          <h1>Sign Up</h1>
          <input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <br />
        <div className="input-container">
          <input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p>{formik.errors.lastName}</p>
          ) : null}
        </div>
        <br />
        <div className="input-container">
          <input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <br />
        <div className="input-container">
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUp;
