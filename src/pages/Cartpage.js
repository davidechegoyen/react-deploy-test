import './Cartpage.css'
import Buttons from '../components/Buttons'
import ShoppingCartItem from './ShoppingCartItem'
import { useState,useEffect } from 'react'



export const Cartpage = ({shoppingCart,dispatch}) => {          
    
    const [totalPrice, setTotalPrice] = useState(0)

     //Initialize the Total Price by first mapping then putting in this useEffectStatement

    let subTotalArray  = shoppingCart.map(item=>item.prodPrice*item.prodQuantity)   

     useEffect(() => {
        
        setTotalPrice(subTotalArray.reduce((a,b)=>a+b, 0))

    }, [subTotalArray,shoppingCart]) 

    return (       
        <div className="cart">             
            <div className="nav-space"></div>  
            <h1>SHOPPING CART</h1>
            <div className="cart-content">                
                    <div className="row">
                        <div className="cart-content-product space"><p><strong>PRODUCT</strong></p></div>
                        <div className="space"><p>UNIT PRICE</p></div>
                        <div className="space"><p>QUANTITY</p></div>                    
                        <div className="space"></div>    
                        <div className="space"><p>SUB TOTAL</p></div>                                       
                        <div className="space"></div>
                    </div>
                    {shoppingCart.map((item,key)=>{                    
                        return <ShoppingCartItem 
                                prodName={item.prodName} 
                                prodQuantity={item.prodQuantity} 
                                prodImage={item.prodImage}
                                prodPrice={item.prodPrice}
                                prodId={item.id}
                                dispatch={dispatch}
                                key={key}/>                               
                            })
                    }               
               
                <div>
                    <h2>TOTAL: ${totalPrice}</h2>
                    <Buttons>CHECK OUT</Buttons>
                </div>
            </div>
            
        </div>
    )
}

export default Cartpage
