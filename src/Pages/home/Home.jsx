import React from "react";
import Banner from "../banner/Banner";
import { Row, Col, Container } from "react-bootstrap";
import "../page.css";
import Services from "../../Component/Services";
import {PiGearThin,PiUserCircleGearThin} from 'react-icons/pi'
import {BsHouseGearFill} from 'react-icons/bs'
// import FeatureRoom from '../../Component/FeatureRoom'
export const Home = () => {
  return (
    <>
      <Banner clsName="home-banner" />
      <Services />
      <div className="w-100 py-2 quick-fact-div text-white mb-5">
        <Container className="w-100">
          <h1 className="text-center">QUICK FACTS</h1>
          <Row className="mt-3 justify-content-evenly px-1">
            <Col md={5} className="my-2 border border-3 rounded-3 d-flex p-1">
              <div className="p-3">                
                <i className=""><PiGearThin size={100}/></i>
                </div>
                <div>
                  <h2>17<sup className="text-warning">+</sup> Years of experience</h2>
                <p>
                  in providing end to end Solutions for all your HR needs
                  .Helping clients focus on what they do best –grow their
                  business!
                </p>
              </div>
            </Col>
            <Col md={5} className="my-2 border border-3 rounded-3 d-flex p-1">
            <div className="p-3">                
            <i className=""><PiUserCircleGearThin size={100}/></i>
                </div>
              
                <div>
                  <h2>Servicing 200<sup className="text-warning">+</sup> clients across 400<sup className="text-warning">+</sup> locations</h2>                
                <p>
                50 percent of our engagement is from repeat clientele across multiple domains
                </p>
              </div>
            </Col>
          
            <Col md={5} className="my-2 border border-3 rounded-3 d-flex p-1">             
              <div className="p-3">                
                <i className=""><BsHouseGearFill size={100}/></i>
              </div>
                <div>
                  <h2>Across domains</h2>
                
                <p>
                Services across multiple Domains in India, APAC, USA and Europe
                </p>
              </div>
            </Col>
            <Col md={5} className="my-2 border border-3 rounded-3 d-flex p-1">
            <div className="p-3">                                
                <i className=""><PiGearThin size={100}/></i>
                </div>              
                <div>
                  <h2>In-house Team of 75<sup className="text-warning">+</sup> specialists</h2>              
                <p>
                Diverse team of professionals providing 24X7 supports with decades of domain expertise
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
