import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import { useReducer, useEffect ,useState} from 'react';
import Axios from 'axios';

import shopInventory from './data';

import Navbar from './components/Navbar';
import Maincover from './components/Maincover';
import Featured from './components/Featured';
import Footer from './components/Footer';

import Aboutpage from './pages/Aboutpage';
import Cartpage from './pages/Cartpage';
import Merchpage from './pages/Merchpage';
import ProductsPage from './pages/ProductsPage';

export const ACTIONS = {
  ADD_TO_CART:'add-to-cart',
  REMOVE_FROM_CART:'remove-from-cart',
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function App() { 

//test state
const [testData, setTestData] = useState([])
//useEffect to get Data from Data base
/* useEffect(() => {
  Axios.get('http://localhost:5000/api/shopInventory')
    .then((response)=>setTestData(response.data))
}, []) */


//Warning for people leaving the page
window.onbeforeunload = (event) => {
  const e = event || window.event;
  // Cancel the event
  e.preventDefault();
  if (e) {
    e.returnValue = ''; // Legacy method for cross browser support
  }
  return ''; // Legacy method for cross browser support
};

// Creates new Item 
const newItem=(prodName,prodQuantity,prodImage,prodImageAlt,prodPrice)=>{
  return {   
    id:Date.now(),
    prodName:prodName,       
    prodQuantity:prodQuantity,
    prodImage:prodImage,
    prodImageAlt:prodImageAlt,
    prodPrice:prodPrice
  }
}

//checks if item exists on the Cart already
const itemDuplicateChecker = (shoppingCart, addedItem)=> shoppingCart.includes(addedItem.prodName)

//Adds quantity to item that exists
const addQuantityToItem = (sc,addedItem)=>{
  return sc.map(item=>{
    if(item.prodName === addedItem.prodName){
      return {...item, prodQuantity : item.prodQuantity + addedItem.prodQuantity}
    }
    return item 
   })
}

//Function that handles different actions
const reducer =(shoppingCart , action)=>{
  switch (action.type){
    /* This code adds new Item to cart but before it returns the new cart, it will check if the item already exists in the cart. 
    if it does it just adds the quantity of the item in the cart */
    case ACTIONS.ADD_TO_CART:
        const addedItem = newItem(
          action.payload.name,
          action.payload.quantity,
          action.payload.image,
          action.payload.imageAlt,
          action.payload.price)        
        const cartItems = shoppingCart.map(item=>item.prodName)      
        if(itemDuplicateChecker(cartItems,addedItem)){                
          return addQuantityToItem(shoppingCart,addedItem)
        }
        else{          
          return [...shoppingCart,addedItem]
        }   
     
    //Remove from cart = returns new shopping cart with all the items that you did not remove //checks the cart id
    case ACTIONS.REMOVE_FROM_CART:      
      return shoppingCart.filter(item=>item.id !== action.payload.id)
    //Increment quantity of item in the cart
    case ACTIONS.INCREMENT:      
      return shoppingCart.map(item=>{
        if(item.id === action.payload.id)
        {
          return {...item, prodQuantity : action.payload.addItemQuantity}
        }
        return item
      })
    //Increment quantity of item in the cart
    case ACTIONS.DECREMENT:
       return shoppingCart.map(item=>{
        if(item.id === action.payload.id && item.prodQuantity >1)
        {
          return {...item, prodQuantity : action.payload.minusItemQuantity}
        }
        return item
      })
    default:
      return shoppingCart
  }  
}

//Shopping cart is the Array of objects that list your items in the cart
const [shoppingCart , dispatch] = useReducer(reducer,[])



//Program Actions 
const addToCart=(prodName,itemQuantity,prodImage,prodImageAlt,prodPrice)=>{
  //Action and payload(values to be used in the action)
  dispatch({
    type:ACTIONS.ADD_TO_CART, 
    //Shopping Item values 
    payload:{
      name:prodName, 
      quantity:itemQuantity,
      image:prodImage,
      imageAlt:prodImageAlt,
      price:prodPrice
    }
  })
}




console.log(testData)
  return (
    <Router>    
      <div className="App">
        <Navbar shoppingCart={shoppingCart}/>
        <Switch>
          <Route exact path="/react-deploy-test/">
            <Maincover />
            <Featured />            
          </Route>

          <Route path="/about">
            <Aboutpage />
          </Route>

          <Route path="/shopping_cart">
            <Cartpage shoppingCart={shoppingCart}
                      dispatch={dispatch}/>
          </Route>

          <Route path="/merch">
            <Merchpage shopInventory={shopInventory}/>
          </Route>

          <Route path="/products/yellow-shirt">
            <ProductsPage  product={shopInventory[0]}    
                           addToCart={addToCart}                     
                          />
          </Route>

          <Route path="/products/grey-shirt">
            <ProductsPage product={shopInventory[1]}                       
                          addToCart={addToCart}
                          />
          </Route>

        </Switch>  
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
