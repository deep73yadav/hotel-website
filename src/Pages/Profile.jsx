import React from "react";

import "./page.css";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../Component/Breadcrumb/Breadcrumb";
import ProfileLinks from "../Component/ProfileLinks";
const Profile = () => {
  return (
    <>
      <Breadcrumb path={`/profile`} />
      <div className="">
        <div className="mb-5 py-5 ">
          <Container fluid="sm">
            <Row className="justify-content-evenly h-100">
              <Col md={4} className="bg-white py-2">
                <ProfileLinks />
              </Col>
              <Col md={7} className="bg-white p-2 ">
                <Outlet />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Profile;
