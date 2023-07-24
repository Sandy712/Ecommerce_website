import { useState ,createContext, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar';
// import { products } from "./utlis/product";
import Home from "./component/Home";
import Footer from "./component/Footer";





export const DataContainer = createContext();



function App() {
  const [CartItems,setCartItems]=useState([]);
  const [selectedProduct,setSelectedProduct]=useState(null);
  

  const addtoCart=(products,num=1)=>{
    const productExit=CartItems.find((item)=>item.id===products.id)    //check the product is present in cart or not

    //if product is present then ADD +1
    if (productExit){
      setCartItems(CartItems.map((item)=>(item.id===products.id ? {...productExit,qty: productExit.qty + num}:item)))
    }
    //else product is add in CART
    else{
      setCartItems([...CartItems,{...products,qty:num}])
    }
  }

  const decreaseitem=(products)=>{
    const productExit=CartItems.find((item)=>item.id === products.id);


    //if product is ==1 then we have to remove it
    if(productExit === 1){
      setCartItems(CartItems.filter((item)=>item.id !== products.id))
    }
    //else we just decrease the quantity
    else{   
      setCartItems(CartItems.map((item)=>(item.id===products.id ? {...productExit,qty: productExit.qty -1 } :item)))
    }
  }
  
  //delete by using filter out those product !== item.id
  const deleteProduct=(product)=>{
    setCartItems(CartItems.filter((item)=>item.id !== product.id));
  }
  
  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(CartItems));
  },[CartItems])


  return(
    <DataContainer.Provider value={{CartItems,setCartItems,addtoCart,decreaseitem,deleteProduct,selectedProduct,setSelectedProduct}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>


        </Routes>
        <Footer/>

      </Router>
    </DataContainer.Provider>
  )

}
  
  export default App;
    
    
     
