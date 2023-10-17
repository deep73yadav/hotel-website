import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button, Card } from "react-bootstrap";
import * as Yup from "yup";
import api from "../utils/api";
import { showToast } from "../Component/Toast";
import { useNavigate,Link,useLocation } from "react-router-dom";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  mobileNo: Yup.string().required("mobile no is required"),
  date_of_birth: Yup.string().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string().required("Role is required"),
});

const RegisterForm = ({ onhide,oldData }) => {  
  const navigate = useNavigate();
  const location = useLocation()
  const data = location.state;
  console.log("use data",data);
  const [loading, setLoading] = useState(false);
  const addAdmin = async (newdata) => {
    setLoading(true);
    try {
      await api.post("auth/register", newdata);
      setLoading(false);
      navigate('/login');
      showToast("success", "You are Registered Successfully");
    } catch (error) {
      setLoading(false);
      console.log("errror found", error.message);
      showToast("error", error.message);
    }
  };
  // --------------------------------------------------------------------------Update Admin--------------------------------------

  const updateAdmin = async (id, newdata) => {
    setLoading(true);
    try {
      await api.put(`customers/updatebyid/${id}`, newdata);
      setLoading(false);
      onhide();
      showToast("success", "Admin Updated Succesfully");
    } catch (error) {
      setLoading(false);
      console.log("errror found", error.message);
      showToast("error", error.message[0]);
    }
  };
  const handleSubmitForm = (values) => {
    oldData ? updateAdmin(oldData._id, values) : addAdmin(values);
  };
  return (
    <div className="container my-5">
      <Card>
        <Card.Body>
          <Formik
            initialValues={
              oldData
                ? {
                    firstName: oldData.firstName,
                    lastName: oldData.lastName,
                    email: oldData.email,
                    mobileNo: String(oldData.mobileNo),
                    date_of_birth: oldData.date_of_birth.substring(0, 10),
                    gender: oldData.gender,
                    password: oldData.password,
                    role: "admin",
                  }
                : {
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNo: "",
                    date_of_birth: "",
                    gender: "",
                    password: "",
                    role: "admin",
                  }
            }
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            <Form>
              {
                !oldData&& 
              <h3 className="text-center mb-2 text-decoration-underline w-25 mx-auto">Registation Form</h3>
              }
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="mobileNo" className="form-label">
                      Contact No
                    </label>
                    <Field
                      type="string"
                      id="mobileNo"
                      name="mobileNo"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="mobileNo"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="date_of_birth" className="form-label">
                      Date of birth
                    </label>
                    <Field
                      type="date"
                      id="date_of_birth"
                      name="date_of_birth"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="date_of_birth"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      className="form-control"
                    >
                      <option value="" disabled>
                        {" "}
                        Select a Gender
                      </option>
                      <option value="male"> Male</option>
                      <option value="female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                {!oldData && (
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </Col>
                )}
                <Col lg={6}>
                  <div className="form-group">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <Field
                      type="text"
                      id="role"
                      name="role"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
              </Row>
              {
                loading&& <div className="w-100 d-flex justify-content-center my-1">
                <div class="spinner-border text-success" role="status">
              <span class="visually-hidden text-center ">Loading...</span>
            </div>
              </div>
            }  
              <div className="my-1 text-center">
                {oldData ? (
                  <Button
                    variant="success"
                    type="submit"
                    className="px-3 fw-semibold fs-5 text-spacing-wide"
                    style={{ letterSpacing: "1px" }}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    type="submit"
                    className="px-3 fw-semibold fs-5 text-spacing-wide"
                    style={{ letterSpacing: "1px" }}
                  >
                    Create
                  </Button>
                )}
                {
                  oldData? <Button variant="primary ms-1 px-3 fw-semibold fs-5 text-spacing-wide" type="button" onClick={onhide}>
                  Cancel
                </Button>:
                  <button type="button" className="btn btn-primary ms-3 px-4 fw-semibold fs-5 text-spacing-wide">
                      <Link
                        to="../"
                        style={{ "textDecoration": "none", color: "white" }}                        
                      >
                        Back
                      </Link>
                    </button>
                }
               {
                !oldData&&
                <p className="mt-2">
                Already have an Account, Login here
                <Link
                  className=" ps-2 fw-semibold link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                  to="/login"
                >
                  {" "}
                  Click
                </Link>
              </p>
               }
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
