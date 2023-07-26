import React, { Fragment, useContext, useEffect,useState } from 'react'
import {Col,Row,Container} from "react-bootstrap";
import { DataContainer } from '../App';
import Shoplist from './Shoplist';
import { products } from '../utlis/product';
import FilterSelect from './FilterSelect';


export default function Shoppage() {
    const {addtoCart}=useContext(DataContainer);
    const [filterList,setFilterList] = useState(products.filter(item => item.category ==="mobile"));


    useEffect(()=>{
        window.scroll(0,0);
    },[]);
  
    return (
        <Fragment>
            <section className='shop-page'>
                <Container className='shop-page'>
                    <Row className='justify-content-center'>
                        <Col md={12}>
                            <FilterSelect setFilterList={setFilterList}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Shoplist productItems={filterList} addtoCart={addtoCart}/>
                </Container>
            </section>
        </Fragment>
  );
}
