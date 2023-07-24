// Frontenend structured to how show the product information 
//Format for showing the product name,price,addtocart options,rating 


import React from 'react'
import { Container, Row } from "react-bootstrap"
import Product from './Product'

export default function Section({title,bgColor,productItems,AddToCart}) {
  return (
    <section style={{background:bgColor}}>
        <Container>
            <div className='heading'>
                <h1>{title}</h1>
            </div>
            <Row className='justify-content-center'>
                {productItems.map((productItem)=>{
                    return (
                        <Product key={productItem.id} title={title} productItem={productItem} addtocart={AddToCart}/>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}