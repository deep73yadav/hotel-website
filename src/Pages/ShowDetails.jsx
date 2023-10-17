import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { showToast } from "../Component/Toast";
import loadingImg from "../assets/loading.gif";
import "./page.css";
import { Container, Row, Col } from "react-bootstrap";

const ShowDetails = () => {
  const [data, setData] = useState(null);
  const GetData = async () => {
    try {
      const response = await api.get(`website/getlogininfo`);
      localStorage.setItem("cust_id", response.user._id);
      setData(response.user);
    } catch (error) {
      console.log("errror found", error);
      showToast("error", error.message);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  const col = [
    {
      name: "First Name",
      key: "firstName",
    },
    {
      name: "Last Name",
      key: "lastName",
    },
    {
      name: "Gender",
      key: "gender",
    },
    {
      name: "Emial",
      key: "email",
    },
    {
      name: "Contact No",
      key: "mobileNo",
    },
    {
      name: "Date of Birth",
      key: "date_of_birth",
    },
  ];
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
    <>
      <Container style={{ height: "100vh" }}>
        <Row className="justify-content-center">
          <Col md={10} className="mt-5">
          <h3 className="text-center">Details</h3>
            {col.map((item, index) => (
              <div key={index} className="d-flex border border-1 py-2 rounded-2 my-3">
                <strong className="mx-3">{item.name} : </strong>
                {item.key === "date_of_birth" ? (
                  <p className="mx-2">{data[item.key].substring(0, 10)}</p>
                ) : (
                  <p className="mx-2">{data[item.key]}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ShowDetails;
