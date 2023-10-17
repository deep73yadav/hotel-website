import React from 'react'
import "../page.css"
import {Row,Col,Container} from 'react-bootstrap'
import QueryForm from '../../Component/QueryForm'
const Banner = ({children,clsName}) => {
  return (
    // <div className={clsName}>
         <Container fluid className='home-banner'>
    <Row className=''>
      <Col md={6} className='banner-col '>
        <div className='text-white content-div'>
          <h6 className='text-warning mb-3'>Business driven … people focused </h6>
          <h3 className='mb-4'>Manpower Outsourcing Services India</h3>
          <p>
          For Easy Source, Manpower Outsourcing is beyond paying Salaries timely or making clients compliant. We believe in exceeding client expectations, not meeting them ! We have a human interface and support you 24X7, 7 days a week. From, Day One, you are assigned a SPOC and not a ticket number !
          </p>
          <p className=''>With 70 % client retention, need we say more?</p>
        </div>
      </Col>
      <Col md={6} className='banner-col'>
        <div className='query-div'>
        <QueryForm/>
        </div>
      </Col>
    </Row>
   </Container>
    // </div>
  )
}
export default Banner
Banner.defaultProps={
    clsName:"home-banner"
}