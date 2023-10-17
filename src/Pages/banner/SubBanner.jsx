import React from 'react'
import '../page.css'
import {Row,Col,Container} from 'react-bootstrap'
const SubBanner = ({children,title,subtitle}) => {
  return (
   <>
   <Container className=''>
    <Row className=''>
      <Col md={6} className='bg-success '>
        hii somthing tell me
      </Col>
    </Row>
   </Container>
   </>
  )
}

export default SubBanner