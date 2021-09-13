import './ProductsPage.css'
import Buttons from '../components/Buttons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = ({product,addToCart}) => {
    
    const [itemQuantity, setItemQuantity] = useState(1)

    const addToCartHandler = () =>{     
        addToCart(product.prodName,
                  itemQuantity,
                  product.prodImage,
                  product.prodImageAlt,
                  product.prodPrice)     
        alert("Successfully added to cart!")
    }
    
    return (
        <div className="product">    
            <div className="nav-space"></div>                          
            <h1>PRODUCT DETAILS</h1>   
            <div className="product-content">   
                <div className="product-content-img">
                    <img src={product.prodImage} alt={product.prodImageAlt} />
                </div>                          
                <div className="product-content-card">   
                    <h2>{product.prodName}</h2>                                
                    <p><strong>QUANTITY:</strong>
                       <input type="number" min="1" onChange={(event)=>{setItemQuantity(Number(event.target.value))}}/>
                    </p>
                    <Buttons onClick={addToCartHandler}>ADD TO CART</Buttons>     
                    <p><strong>PRICE: </strong> ${product.prodPrice}</p>               
                    <p><strong>DESCRIPTION</strong></p>
                    <p>{product.prodDescription}</p>
                    <div className="linkdiv"><Link to="/merch" className="link"><strong><p>Merch page</p></strong></Link>
                                             <Link to="/shopping_cart" className="link"><strong><p>Shopping Cart <i className="fas fa-shopping-cart"></i></p></strong></Link></div>
                </div>                
            </div>      

        </div>
    )
}

export default ProductsPage
