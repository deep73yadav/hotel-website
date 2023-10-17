import React from "react";
import "./App.css";
import img1 from "../assets/service/waiter.png";
import img2 from "../assets/service/fishing.png";
import img3 from "../assets/service/registered.png";
import img4 from "../assets/service/zero.png";
import img5 from "../assets/service/ques.webp";
import icon1 from "../assets/service/laptop.png";
import icon2 from "../assets/service/handshake.png";
import icon3 from "../assets/service/system.png";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Container, Col, Row, Card } from "react-bootstrap";
const Services = () => {
  const service = [
    {
      img: img1,
      title: "Manpower Outsourcing",
      info: "Outsource your manpower to us and relax! We work as an extended HR for you.",
    },
    {
      img: img2,
      title: "PEO Services",
      info: "We take care of your entire HR and admin burden by providing PEO services in India!",
    },
    {
      img: img3,
      title: "Payroll Outsourcing",
      info: "Outsource your Payroll to us and let the experts manage it in the most compliant manner!",
    },
    {
      img: img4,
      title: "Managed Service Level Engagement (SLA)",
      info: "Outsource your processes to us for optimization.",
    },
  ];
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={4} className="mt-3">
            <div className="pt-5">
              <h2>Our Services</h2>
              <p className="lh-lg">
                Easy Source provides customized HR Solutions. The HR Solutions
                include Manpower Outsourcing, Payroll Outsourcing, Managed
                Service Level Engagement (SLA )and Compliance Outsourcing
              </p>
            </div>
          </Col>
          {service.map((item,index) => (
            <Col key={index} md={4} className="mt-3">
              <Card className="h-100">
                <Card.Img src={item.img} className="w-50 m-auto mt-2 h-50" />
                <Card.Body>
                  <Card.Title className="text-center">{item.title}</Card.Title>
                  <Card.Text className="text-center">{item.info}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="w-100 bg-white mt-5 py-5">
        <Container fluid="sm">
          <Row
            className="justify-content-evenly"
            style={{ fontFamily: "Microsoft Sans Serif", fontSize: "18px" }}
          >
            <Col
              md={5}
              className="mt-auto mb-auto pt-3 d-flex flex-row-reverse"
            >
              <img src={img5} alt="ques img" className="rounded w-100 " />
            </Col>
            <Col md={5} sm={12} className="mt-3 d-flex">
              <div className="">
                <h2>Why Us?</h2>
                <p className="lh-lg">
                  Clients find that our solutions result in increased employee
                  productivity, efficiency, effective communication, improved
                  morale, and higher employee retention.
                </p>
                <div className="d-flex my-2 ">
                  <img
                    src={icon1}
                    alt="ques img"
                    className=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="ms-3 my-auto">
                    One Stop HR Solution We are a One Stop HR Solution Provider
                    for Full Services Outsourcing and HR needs
                  </p>
                </div>
                <div className="d-flex my-2">
                  <img
                    src={icon2}
                    alt="ques img"
                    className=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="ms-3 my-auto">
                    Easy Source Partners with you Easy Source Partners with you
                    to help you focus on your key deliverables
                  </p>
                </div>
                <div className="d-flex my-2 ">
                  <img
                    src={icon3}
                    alt="ques img"
                    className=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="ms-3 my-auto">
                    Accessible with a human touch We are Accessible with a human
                    touch!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
