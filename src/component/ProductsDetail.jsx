import {React,Fragment,useState, useEffect,useContext} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DataContainer } from "../App";
import { products } from "../utlis/product";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Shoplist from "./Shoplist";


export default function ProductsDetail() {
  const [listSelected,setListSelected] =useState("desc");
  const [relatedProducts,setRelatedProducts] =useState([]);
    const {selectedProduct,setSelectedProduct,addtoCart} =useContext(DataContainer);
    const {id} =useParams();
    
    if (!selectedProduct){
      const storedproduct=localStorage.getItem(`selectedProduct-${id}`);
      setSelectedProduct(JSON.parse(storedproduct));
    }
    
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    useEffect(()=>{
      setRelatedProducts(products.filter(item=>item.category===selectedProduct?.category));
    },[selectedProduct])


  return (
    <Fragment>
        <section className="product-page">
            <title title= {selectedProduct?.productName}></title>
            <Container>
              <Row className="justify-content-center">
                <Col md={5}>
                  <img src={selectedProduct?.imgUrl} alt="/" />
                </Col>
                <Col md={7}>
                  <h2> title={selectedProduct?.productName}</h2>
                  <div className="rate">
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                <FontAwesomeIcon icon={faStar} style={{color: "#fbdf50",}}/>
                </div>
                <span>{selectedProduct?.avgRating} ratings</span>
                <div className="info">
                  <span className="price">${selectedProduct?.price}</span>
                </div>
                <p className="short-desc">${selectedProduct?.shortDesc}</p>
                <input className="qty-input" type="integer" placeholder="qty" value={quantity} onChange={handleQuantityChange}/>
                <button className="product-add" onClick={()=>addtoCart(selectedProduct,quantity)}>Add to Cart</button>
                </Col>
              </Row>
            </Container>
        </section>
        <section className="product-review">
          <Container>
            <ul>
            <li style={{color:listSelected ==="desc"?"black":"#9c9b9b"}} onClick={()=> setListSelected("desc")}>
                            Description
                        </li>
                        <li style={{color:listSelected ==="rev"?"black":"#9c9b9b"}} onClick={()=> setListSelected("rev")}>
                            Reviews ({selectedProduct?.reviews.length})
                        </li>
            </ul>
            {
              listSelected==="desc"?
              <p>{selectedProduct?.description}</p>:
              <div className="rates">
                {
                  selectedProduct?.reviews.map(rate=>(
                    <div className="rate-comment" key={rate.rating}>
                      <span>Persons</span><span>{rate.rating}(rating)</span>
                      <p>{rate.text}</p>
                      </div>
                ))}
              </div>
            }
          </Container>

        </section>
        <section className="related-product">
          <Container>
            <h2>You might also like</h2>
          </Container>
          <Shoplist productItems={relatedProducts} addtoCart={addtoCart}></Shoplist>
        </section>
    </Fragment>
    
  )
}
