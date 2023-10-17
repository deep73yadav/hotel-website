import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="bg-dark text-white p-3">
      <Container fluid="sm">
        <Row>
          <Col md={3}  className="mt-3">
            <h4 className="mb-4">Services</h4>
            <h6 className="my-4">Manpower Outsourcing</h6>
            <h6 className="my-4">Payroll Outsourcing</h6>
            <h6 className="my-4">Managed Services</h6>
            <h6 className="my-4">PEO Service</h6>
          </Col>
          <Col md={3}  className="mt-3">
            <h4 className="mb-4">About</h4>
            <p>Team</p>
            <h4>Social Media</h4>
            <div className="d-flex justify-content-around w-50 p-1">
              <i className="border border-1 rounded-circle p-1 bg-white">
                <TfiFacebook color="rgba(0, 158, 95, 0.815)" size={30}/>
              </i>
              <i className="border border-1 rounded-circle p-1 bg-white">
                <RiLinkedinFill color="rgba(0, 158, 95, 0.815)" size={30}/>
              </i>
              <i className="border border-1 rounded-circle p-1 bg-white">
                <TfiTwitterAlt color="rgba(0, 158, 95, 0.815)" size={30}/>
              </i>
            </div>
          </Col>
          <Col md={3} className="mt-3">
            <h4 className="mb-4">Blogs</h4>           
            <p>
              How to Keep Employees Engaged and Motivated in WFH Environment </p>
              <p>
              Signs You Are an Awful Boss </p>
               <p>
              Looking at Global Expansion through Peo Services </p>
               <p>             
              Point to Consider when Outsourcing your Payrol
            </p>           
          </Col>
          <Col md={3}  className="mt-3">
            <h4 className="mb-4">Delhi NCR Presence</h4>
            <p>
              3C&D|25 Gopala Towers Rajendra Place New Delhi - 110008 , India </p>
              <p>
              504A , Suncity Success Tower , Sector 65, Gurgaon  </p>
              <p>757, Shakti Khand IV, Indrapuram, Ghaziabad, Uttar Pradesh 201014{" "}
              </p>
              <p> query@easysourceindia.com </p>
              <p>hr@easysourceindia.com  </p>
              <p>helpdesk@easysourceindia.com
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
