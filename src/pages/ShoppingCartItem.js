import React from 'react'
import { ACTIONS } from '../App'

const ShoppingCartItem = ({prodName,prodQuantity,prodPrice,prodImage,prodImageAlt,dispatch,prodId}) => {    

    return (
        <div className="row">
            <div className="cart-content-product space"><p>{prodName}</p><img src={prodImage} alt={prodImageAlt}/></div>
            <div className="space"><p>${prodPrice}</p></div>
            <div className="space"><p>{prodQuantity}</p></div>
            <div className="add-minus-buttons">
                <button onClick={()=>dispatch({ type: ACTIONS.INCREMENT , payload: {id: prodId, addItemQuantity:prodQuantity+1}})} >+</button>
                <button onClick={()=>dispatch({ type: ACTIONS.DECREMENT , payload: {id: prodId, minusItemQuantity:prodQuantity-1}})} >-</button>
            </div>
            <div className="space"><p>${prodPrice*prodQuantity}</p></div>                       
            <button onClick={()=>dispatch({ type: ACTIONS.REMOVE_FROM_CART , payload: {id: prodId}})}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default ShoppingCartItem
