import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { showToast } from "../Component/Toast";
import loadingImg from "../assets/loading.gif";
import { Container, Row, Col, Card } from "react-bootstrap";
const ShowBookings = () => {
  const [data, setData] = useState(null);
  const GetData = async () => {
    try {
      const response = await api.get(
        `website/getByCustomerId/${localStorage.getItem("cust_id")}`
      );
      setData(response);
    } catch (error) {
      console.log("errror found", error);
      showToast("error", error.message[0]);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  if (!data) {
    return (
      <p
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <img src={loadingImg} alt="loading" width={200} height={200} />
      </p>
    );
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <div className="text-center">
          <h3>Your bookings</h3>
        </div>
        {data &&
          data.map((item, index) => (
            <Col md={12} key={index} className="my-1 ">
              <Card>
                <Card.Body className="d-flex bg-info rounded-3">
                  <div className="w-50 mx-1 text-center">
                    <p className="">
                      <strong className="text-dark me-2">Hotel Name : </strong>
                      {item.hotel}
                    </p>
                    <p>
                      <strong>Booking Date : </strong> {item.booking_date}
                    </p>
                    <p>
                      <strong>Checkout Date : </strong>
                      {item.checkout_date}{" "}
                    </p>
                  </div>
                  <div className="w-50 mx-1 text-center pt-2">
                    <p>
                      <strong>Identity : </strong>
                      {item.identity_type}
                    </p>
                    <p>
                      <strong>Room Alloted : </strong> {item.room_alloted}
                    </p>
                    <p>
                      <strong>Room Type : </strong> {item.room_type}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ShowBookings;
