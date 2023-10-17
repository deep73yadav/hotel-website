import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import loadingImg from "../assets/loading.gif";
import "./page.css";
import api from "../utils/api";
import { showToast } from "../Component/Toast";

import BookingForm from "./BookingForm";
import Breadcrumb from "../Component/Breadcrumb/Breadcrumb";
const SingleRoom = () => {
  const [open, setOpen] = useState(false);
  const id = useParams().id;
  const [data, setData] = useState([]);
  const GetData = async () => {
    try {
      const response = await api.get(`hotels/getbyid/${id}`);
      setData(response.data);
    } catch (error) {
      console.log("errror found", error);
      showToast("error", error.message[0]);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div>
        <Breadcrumb path={`/rooms/${data.hotel_name ? data.hotel_name : ""}`} />
      </div>
      <div className="bg-white py-5">
        <Container fluid="sm" className="my-5">
          <Row>
            <Col md={6} className="p-2">
              <div className="carousel-div">
                <Carousel className="carousel">
                  {data.image ? (
                    data.image.map((item, index) => (
                      <Carousel.Item key={index} className="carousel-item   ">
                        <img
                          src={item}
                          alt="img"
                          className=" hotel-img border rounded-3"
                        />
                      </Carousel.Item>
                    ))
                  ) : (
                    <p
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: "70vh" }}
                    >
                      <img
                        src={loadingImg}
                        alt="loading"
                        width={200}
                        height={200}
                      />
                    </p>
                  )}
                </Carousel>
              </div>
            </Col>
            <Col md={6} className="d-flex  py-2 px-4">
              <div>
                <div className="">
                  <h3>{data.hotel_name}</h3>
                  <p className="p-0 m-0">
                    <strong>Details</strong> <br />
                    Hotel descriptions are concise yet informative textual
                    representations of accommodations designed to provide
                    potential guests with a snapshot of what to expect during
                    their stay.{" "}
                  </p>
                  <p className="text-danger fw-semibold bg-warning w-25 rounded opacity-75 ps-2 mt-2 mb-0">
                    {data.category}
                  </p>
                  <p className="text-primary fw-semibold  w-25 m-0 ps-2">
                    {" "}
                    {data.propertyType}
                  </p>
                  <h6>{data.address}</h6>
                  <h6>
                    {data.city}, {data.state} {data.country}
                  </h6>
                  <h6>
                    <strong>Contact No : </strong>
                    {data.contact_number}
                  </h6>
                  <h6>
                    <strong>Email : </strong>
                    {data.contact_email}
                  </h6>
                </div>
                {!open && (
                  <Button onClick={() => setOpen(true)}>Book Now</Button>
                )}
              </div>
            </Col>
          </Row>
          {open && (
            <Row className="mt-5 justify-content-center py-5 px-1">
              <Col md={10} sm={12} className="border border-3 p-2 p-md-4">
                <BookingForm onhide={setOpen} hotel_id={id} />
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};
export default SingleRoom;
