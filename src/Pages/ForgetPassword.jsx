import React, { useState } from "react";
import "./page.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Component/Toast";
import api from "../utils/api";
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(null);
  const initialValues = {
    email: "",
    otp: "",
    newPassword: "",
  };

  const validationSchema = Yup.object(
    otp
      ? {
          email: Yup.string().email().required("User name is Required"),
          otp: Yup.string().required("OTP is Required"),
          newPassword: Yup.string().required("New Password is Required"),
        }
      : {
          email: Yup.string().email().required("User name is Required"),
        }
  );

  const getOtp = async (username) => {
    setLoading(true);
    try {
      const response = await api.post(`website/forgot-password`, username);
      setLoading(false);
      setOtp(response.otp);
      console.log("OTP = ", response.otp);
    } catch (error) {
      setLoading(false);
      showToast("error", error.message);
    }
  };
  const resetPass = async (newdata) => {
    setLoading(true);
    try {
      const response = await api.put(`website/reset-password`, newdata);
      console.log("response = ", response);
      setLoading(false);
      showToast("success", "Password Change Successfully");
      navigate('/');
    } catch (error) {
      setLoading(false);
      showToast("error", error.message);
    }
  };
  const handleSubmit = (values) => {
    console.log("email = ", values);
    otp ? resetPass(values) : getOtp({ email: values.email });
  };
  return (
    <div className="form-main-container">
      <div className="form-container  bg-white">
        <h3 className="mb-3">Forget Password</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div className="form-group">
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="User name"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            {!otp ?(<>
            {
                loading&&               
                  <div class="spinner-border text-success" role="status">
                <span class="visually-hidden text-center ">Loading...</span>
              </div>              
              
            }
              <button type="submit" className="login-button">
                Get OTP
              </button>
              </>
            ):(<>
              <div className="form-group">
                <Field
                  type="text"
                  id="otp"
                  name="otp"
                  className="form-control"
                  placeholder="OTP"
                />
                <ErrorMessage name="otp" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="form-control"
                  placeholder="New Password"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="error"
                />
              </div>  
              {
                loading&&
                <div class="spinner-border text-success" role="status">
                <span class="visually-hidden text-center ">Loading...</span>
              </div> 
            }          
              <button type="submit" className="login-button">
                Change Password
              </button>
              </>
            )}
            
             
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default ForgetPassword;
