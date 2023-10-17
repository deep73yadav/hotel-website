import React, { useState } from "react";
import './page.css'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Component/Toast";
import api from "../utils/api";
const ChangePassword = () => { 
  const navigate = useNavigate();
const [loading,setLoading]=useState(false);
  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Old Password is Required"),
    newPassword: Yup.string().required("New Password is Required"),
  });

  const changePass = async (newdata) => {
    setLoading(true);
    try {
      await api.put(`website/change-password`,newdata);
      setLoading(false);         
        showToast("success", "Password Change Successfully");  
        navigate('/');

    } catch (error) { 
        setLoading(false);      
      showToast("error",  error.message);     
    }
  };
  const handleSubmit = (values) => {  
    changePass(values); 
  };
  return (
    <div className="form-main-container">
      <div className="form-container  bg-white">
        <h3>Change Password</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="emailid">Old Password</label>
              <Field
                type="password"
                id="oldPassword"
                name="oldPassword"
                className="form-control"
              />
              <ErrorMessage name="oldPassword" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                className="form-control"
              />
              <ErrorMessage name="newPassword" component="div" className="error" />
              {loading ? (
                <p>
                  <br />
                  Loading...
                </p>
              ) : (
                ""
              )}
            </div>
            <button type="submit" className="login-button">
              Change Password
            </button>
          </Form>
        </Formik>       
      </div>      
    </div>
  );
};
export default ChangePassword;
