import { useContext, useEffect } from "react"
import { DataContainer } from "../App"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";



export default function Cartpage() {
    const { CartItem, setCartItem, addtoCart, decreaseQty, deleteProduct} =useContext(DataContainer);
    const TotalPrice= CartItem.reduce((price,item)=> price + item.qty * item.price ,0);

    useEffect(()=>{
        window.scrollTo(0,0);
        if(CartItem.length===0){
            const sortedcart=localStorage.getItem("cartItem");
            setCartItem((JSON.parse(sortedcart)));
        }
    })

  return (
    <section className="cart-item">
        <Container>
            <Row className="justify-content-center">
                <Col md={9}>
                    {CartItem.length===0 && <h1 className="no-items product">No Items in Cart</h1>}
                    {CartItem.map((item) =>{
                        const productqty=item.price*item.qty;
                        return (
                            <div className="Cart-list" key={item.id}>
                                <Row>
                                    <Col className="image-holder" sm={4} md={3}>
                                        <img src={item.imageUrl} alt="/"/>
                                    </Col>
                                    <Col sm={8} md={9}>
                                        <Row className="cart-qty justify-content-center">
                                            <Col xs={12} sm={9} className="cart-details">
                                                <h3>{item.productName}</h3>
                                                <h4>
                                                    Rs.{item.price}.00*{item.qty}
                                                    <span>${productqty}.00</span>
                                                </h4>
                                            </Col>
                                            <Col xs={12} sm={3} className="cart-control">
                                                <button className="add" onClick={()=>addtoCart(item)}>
                                                <FontAwesomeIcon icon={faPlus}/>
                                                </button>
                                                <button className="mius" onClick={()=>decreaseQty(item)}>
                                                    <FontAwesomeIcon icon={faMinus}/>
                                                </button>
                                            </Col>
                                            <button className="delete" onClick={()=>deleteProduct(item)}>
                                                <FontAwesomeIcon icon={faClose}/>
                                            </button>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        )})
                    }
                </Col>
                <Col md={3}>
                    <div className="total">
                        <h2>Cart Summary</h2>
                        <div className="d-flex">
                            <h4>Total Price:</h4>
                            <h4>Rs.{TotalPrice}.00</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}
