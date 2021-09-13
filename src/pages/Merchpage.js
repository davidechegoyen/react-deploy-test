import './Merchpage.css'
import ItemCards from '../components/ItemCards'

const Merchpage = ({shopInventory}) => {   

    return (
        <div className="merch">    
            <div className="nav-space"></div>   
            <h1>MERCH</h1> 
            <div className="merch-content">                
                {shopInventory.map((merch,key)=>{
                    return <ItemCards name={merch.prodName} 
                                      source={merch.prodImage} 
                                      prodId={merch.prodId} 
                                      price={merch.prodPrice}
                                      stock={merch.prodStock}
                                      key={key}/>
                })}                
            </div>               
        </div>
    )
}

export default Merchpage
