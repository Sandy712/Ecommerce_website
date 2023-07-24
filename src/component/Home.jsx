import React from 'react'
import { Fragment, useContext } from "react"
import { DataContainer } from "../App"
import Mainslider from './Mainslider'
import Section from './Section'
import { products } from '../utlis/product'


export default function Home() {
  const {addtoCart}=useContext(DataContainer);
  const TopProducts = products.filter(item => (item.avgRating > 4.5) && (item.category === "mobile" || item.category === "chair" || item.category === "wireless"));


  return (
    <Fragment>
      <Mainslider/>
      <Section title="Top Product" bgColor="#f6f9fc" productItems={TopProducts} addtoCart={addtoCart}/>
    </Fragment>
  )
}
