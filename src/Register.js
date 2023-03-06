import React from "react";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

// password that requires min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("required"),
});

// initial values for register form and set as prop in Formik component
const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const register = async (values, actions) => {
  // axios call to register user
};

const Register = () => {
  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
      onSubmit={register}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mt-24 mb-4">Register</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="firstName"
              name="firstName"
              placeholder="first name"
              value={values.firstName}
              className="border rounded-md px-3 py-2 w-full"
            />
            {errors.firstName && touched.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="lastName"
              name="lastName"
              placeholder="last name"
              value={values.lastName}
              className="border rounded-md px-3 py-2 w-full"
            />
            {errors.lastName && touched.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="email"
              value={values.email}
              className="border rounded-md px-3 py-2 w-full"
            />
            {errors.email && touched.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              className="border rounded-md px-3 py-2 w-full"
            />
            {errors.password && touched.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
