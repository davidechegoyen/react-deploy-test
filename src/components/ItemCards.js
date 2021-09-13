import './ItemCards.css'
import {Link} from 'react-router-dom'

const ItemCards = ({source,name,alt,stock,price,prodId}) => {

    
    return (
        <div className="card">
            <div className="card-content">
                <Link to={`/products/${prodId}`}><img src={source} alt={alt} ></img></Link>
                <h2>{name}</h2>
                <p>Price: ${price?price:"N/A"}</p>
                <p>Stock: {stock>=1?stock:"Sold Out"}</p>                
            </div>            
        </div>
    )
}

export default ItemCards
