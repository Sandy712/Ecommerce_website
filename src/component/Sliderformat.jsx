import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import "./Sliderformatcss.css";
import { Link } from "react-router-dom";


export default function Sliderformat({title,desc,cover}) {
  return (
    <Container className='box' >
        <Row>
          <Col md={6}>
            <h1 className='mx-4'>{title}</h1>
            <p className='mx-4'>{desc}</p>
           <Link to="/shop">
            <button className='btn btn-primary mx-4'>Shop now</button>
            </Link> 
            
          </Col>
          <Col md={5}>
            <img className='img ' src={cover} alt="#" />
          </Col>
        </Row>

    </Container>
  )
}
