import React, { useState } from "react";
import "./page.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../Component/Toast";

const Login = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    emailid: "",
    password: "",
  };

  const validationSchema = Yup.object({
    emailid: Yup.string().email().required("Email ID is Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogin = async (loginData) => {
    try {
      const response = await axios.post(`${baseURL}website/login`, loginData);
      console.log(response.data.data);
      if (response.data.data && response.data.data.access_token) {
        const token = response.data.data.access_token;
        localStorage.clear();
        localStorage.setItem("access_token", token);
        setLoading(false);
        showToast("success", "Login Successfully");
      } else {
        console.error("Access token not found in response.");
      }
    } catch (error) {
      setLoading(false);
      navigate("/login");
      console.log("log fallll");
      console.error("Login failed:", error);
      showToast("error", error.response.data.message);
    }
  };
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    console.log("Login data:", values);
    await handleLogin(values);
    if (localStorage.getItem("access_token")) {
      resetForm();
      navigate("/");
    }
  };
  return (
    <div className="form-main-container">
      <div className="form-container  bg-white">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="emailid">Email ID</label>
              <Field
                type="email"
                id="emailid"
                name="emailid"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="error" />
              {loading && (
                <div className="w-100 d-flex justify-content-center my-1">
                  <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden text-center ">Loading...</span>
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </Form>
        </Formik>
        <p className="mt-2">
          Forget Password
          <Link
            className=" ps-2 fw-semibold link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            to="/forgetpassword"
          >
            {" "}
            Click Here
          </Link>
        </p>
        <p>
          Don't have Account Register here
          <Link
            className=" ps-2 fw-semibold link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            to="/register"
          >
            {" "}
            Click
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
