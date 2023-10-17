import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { showToast } from "./Toast";
import loadingImg from "../assets/loading.gif";
import { Button } from "react-bootstrap";
import logo from "../assets/profile.png";
import { Link } from "react-router-dom";
const ProfileLinks = () => {
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
  if (!data) {
    return (
      <p
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: "70vh" }}
      >
        <img src={loadingImg} alt="loading" width={200} height={200} />
      </p>
    );
  }
  return (
    <div className="mb-5 py-5  border rounded px-2">
      <div className="text-center w-100">
        <div className="d-flex justify-content-center">
         <Link to='/profile'> <img src={logo} alt="logo" className="w-25" /></Link>
        </div>
        <h4>
          {data.firstName} {data.lastName}
        </h4>

        <Button variant="success" className="px-4 fs-5 mt-4">
          <Link to="" className="text-white text-decoration-none">
            {" "}
            Edit
          </Link>
        </Button>
      </div>

      <div className="bg-white ">
        <hr />
        <Link to="showbooking" className="text-decoration-none text-dark">
          <strong>Your Bookings</strong>
        </Link>
        <hr />
        <Link to="changepassword" className="text-decoration-none text-dark">
          <strong>Change Password</strong>
        </Link>
        <hr />
        <Link to="" className="text-decoration-none text-dark">
          <strong>Offers</strong>
        </Link>
        <hr />
        <Link to="" className="text-decoration-none text-dark">
          <strong>History</strong>
        </Link>
      </div>
    </div>
  );
};

export default ProfileLinks;
