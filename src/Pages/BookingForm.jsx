import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { showToast } from "../Component/Toast";
import * as Yup from "yup";
import api from "../utils/api";

const validationSchema = Yup.object().shape({
  booking_date: Yup.date().required("Booking Date is required"),
  checkout_date: Yup.date()
    .required("Checkout Date is required")
    .test(
      "checkoutDateAfterBooking",
      "Checkout Date must be after Booking Date",
      function (value) {
        const bookingDate = this.parent.booking_date;
        if (!value || !bookingDate) return true;
        return new Date(value) > new Date(bookingDate);
      }
    ),
  room_alloted: Yup.number().required("Room Alloted is required"),
  room_type: Yup.string().required("Room Type is required"),
  identity_type: Yup.string().required("Identity Type is required"),  
});

const BookingForm = ({ onhide,hotel_id}) => { 
  const [loading,setLoading]=useState(false);
  const addBooking = async (newdata) => {
    setLoading(true);
    try {
      await api.post("website/create", newdata); 
      setLoading(false);
      onhide(false)    ;
      showToast("success", "Your hotel is booked");
    } catch (error) {
      setLoading(false);
      console.log("errror found", error.message);
      showToast("error", error.message);
    }
  };  
  
  const handleSubmit = (values) => {    
    console.log("book val ",values);
    console.log("id ",hotel_id)
    addBooking(values);
  };
  console.log("check val");
  return (
    <Formik
      initialValues={
        {
              cusId: "",
              booking_date: "",
              checkout_date: "",
              room_alloted: "",
              room_type: "",
              identity_type: "",
              hote_id: hotel_id,
            }
      }
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>         
          <Row>
          <Col lg={6}>
              <div className="form-group">
                <label htmlFor="booking_date">Booking Date</label>
                <Field
                  type="date"
                  id="booking_date"
                  name="booking_date"
                  className={`form-control ${
                    errors.booking_date && touched.booking_date
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.booking_date &&
                    touched.booking_date &&
                    errors.booking_date}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label htmlFor="checkout_date">Checkout Date</label>
                <Field
                  type="date"
                  id="checkout_date"
                  name="checkout_date"
                  className={`form-control ${
                    errors.checkout_date && touched.checkout_date
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.checkout_date &&
                    touched.checkout_date &&
                    errors.checkout_date}
                </div>
              </div>
            </Col>
            
            
          </Row>
          <Row>
            <Col lg={6}>
              <div className="form-group">
                <label htmlFor="room_type">Room Type</label>
                <Field
                  as="select"
                  id="room_type"
                  name="room_type"
                  className={`form-control ${
                    errors.room_type && touched.room_type ? "is-invalid" : ""
                  }`}
                >
                  <option value="" disabled>
                    {" "}
                    Select Room Type
                  </option>
                  <option value="Deluxe"> Deluxe</option>
                  <option value="Family">Family</option>
                  <option value="Single">Single</option>
                </Field>
                <div className="invalid-feedback">
                  {errors.room_type && touched.room_type && errors.room_type}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="form-group">
                <label htmlFor="identity_type">Identity Type</label>
                <Field
                  as="select"
                  id="identity_type"
                  name="identity_type"
                  className={`form-control ${
                    errors.identity_type && touched.identity_type
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  <option value="" disabled>
                    {" "}
                    Select Id
                  </option>
                  <option value="Addar Card"> Addhar Card</option>
                  <option value="Pan Card">Pan Card</option>
                  <option value="Voter ID">Voter ID</option>
                </Field>
                <div className="invalid-feedback">
                  {errors.identity_type &&
                    touched.identity_type &&
                    errors.identity_type}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
          <Col lg={6}>
              <div className="form-group">
                <label htmlFor="room_alloted">Room Alloted</label>
                <Field
                  type="number"
                  id="room_alloted"
                  name="room_alloted"
                  className={`form-control ${
                    errors.room_alloted && touched.room_alloted
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.room_alloted &&
                    touched.room_alloted &&
                    errors.room_alloted}
                </div>
              </div>
            </Col>
          </Row>
          {
            loading&&
            <div className="w-25 d-flex justify-content-center my-1">
              <div class="spinner-border text-success" role="status">
            <span class="visually-hidden text-center ">Loading...</span>
          </div>
            </div>
          }
          <div className="mb-1 d-flex">
            
               <Button variant="success" type="submit">
                BooK
              </Button>             
             
           

            <Button variant="primary ms-1" type="button" onClick={()=>onhide(false)}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
