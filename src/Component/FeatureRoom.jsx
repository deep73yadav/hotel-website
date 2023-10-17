import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadingImg from "../assets/loading.gif";
import api from "../utils/api";
import "./App.css";
import img from "../assets/img/rooms.jpg";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import Pagination from "./Pagination";
const FeatureRoom = () => {
  const [loading, setLoading] = useState(true);
  const [hotelData, setHotelData] = useState({
    data: [],
    totalRecords: 0,
  });
  const [query, setQuery] = useState({
    PageSize: 6,
    PageNumber: 1,
    SearchQuery: "",
    SortField: "hotel_name",
    SortOrder: "asc",
    propertyType:"",
    category:""
  });
  const [list, setList] = useState("card-container");
  // const [searchTerm, setSearchTerm] = useState('');
  const GetData = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `website/getall?search=${query.SearchQuery}&pageNumber=${query.PageNumber}&pageSize=${query.PageSize}&sortField=${query.SortField}&sortOrder=${query.SortOrder}&category=${query.category}&propertyType=${query.propertyType}`
      );
      setLoading(false);
      setHotelData({
        ...hotelData,
        data: response.data,
        totalRecords: response.totalRecords,
      });
      // console.log("response = ",response.data)
    } catch (error) {
      console.log("errror found", error);
      // showToast("error", error.message[0]);
    }
  };
  // console.log("data");
  useEffect(() => {
    GetData();
  }, [query]);
  
  const onPageChange = (currentpage) => {
    console.log("page size = ",currentpage)
    setQuery((prevApiData) => ({
      ...prevApiData,
      PageNumber: currentpage.selected + 1,
    }));
  };  
  return (
    <>   
      <Container fluid="md" className="position-relative">
        <div className="list-table-div p-5  rounded" style={{backgroundColor:"#2eb872"}}>
          <div className="input-search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) =>
                setQuery((prevApiData) => ({
                  ...prevApiData,
                  SearchQuery: e.target.value,
                }))
              }
            />            
          </div>
          <div className="bg-white mx-md-2 py-md-2 px-md-2 border border-1 rounded-3 fw-semibold text-center">
            Sort
            <select className="mx-md-2 border-1 rounded p-md-1 " onChange={(e) =>
                setQuery((prevApiData) => ({
                  ...prevApiData,
                  SortOrder: e.target.value,
                }))
              }>              
              <option value="asc">asc</option>
              <option value="desc">desc</option>
            </select>
          </div>
          <div className="bg-white mx-md-2 py-md-2 px-md-2 rounded-3 fw-semibold text-center">
            Category
            <select className="mx-md-2 border-1 rounded p-md-1 " onChange={(e) =>
                setQuery((prevApiData) => ({
                  ...prevApiData,
                  category: e.target.value,
                }))
              }>              
              <option value="">select</option>
              <option value="5 star">5 star</option>
              <option value="4 star">4 star</option>
              <option value="3 star">3 star</option>
              <option value="2 star">2 star</option>
              <option value="1 star">1 star</option>
              
            </select>
          </div>
          <div className="bg-white mx-md-2 py-md-2 px-md-2 rounded-3 fw-semibold text-center">
            Type
            <select className="mx-md-2 border-1 rounded p-md-1 " onChange={(e) =>
                setQuery((prevApiData) => ({
                  ...prevApiData,
                  propertyType: e.target.value,
                }))
              }>       
              <option value="">select</option>       
              <option value="Villa"> Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Flat">Flat</option>
              
            </select>
          </div>
          <div className="icon">
            <i onClick={() => setList("card-container")}>
              <AiOutlineTable
                size={50}
                className={list === "card-container" && "active"}
              />
            </i>
            <i onClick={() => setList("list-container")}>
              <BsCardList
                size={50}
                className={list === "list-container" && "active"}
              />
            </i>
          </div>
        </div>
        
        {loading&&<div className="loading">
        <img src={loadingImg} alt="loading..." />
        </div>}
        <Row className="main-container">
          {hotelData.data.map((item, index) => (
            <Col
              key={index}
              md={list === "card-container" ? 4 : 12}
              sm={list === "card-container" ? 6 : 12}
              className="my-2"
            >              
              <div className={` border border-3 ${list}`}>
                <img src={item.image[0]?item.image[0]:img} alt="hotel" />
                <div className="details">
                  <h3>{item.hotel_name}</h3>
                  <p>Lakhperabag Barabanki</p>
                  <p>UP, India</p>
                  <p className="text-danger fw-semibold bg-warning w-25 rounded opacity-75 ps-2">{item.category}</p>
                  <p className="text-primary fw-semibold  w-25"> {item.propertyType}</p>
                  
                  <p>
                    <strong>9.5 Excellent </strong>(1155 review)
                  </p>
                </div>
                <div className="price">
                  <p className="deal-btn">Deal of the Day</p>
                  <h2>
                    <BiRupee />
                    499
                  </h2>
                  <p>
                    + <BiRupee />
                    550 taxes and fees
                    <br />
                    per night
                  </p>
                  <Link to={`/rooms/${item._id}`} className="">
                    <button className="view-btn">View Rooms</button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="my-3 justify-content-center">
          <Col md={8}>
          <Pagination
            totalpage={hotelData.totalRecords}
            pagesize={query.PageSize}
            pageChange={onPageChange}
          />
          </Col>
        </Row>
     
      </Container>
    </>
  );
};

export default FeatureRoom;
