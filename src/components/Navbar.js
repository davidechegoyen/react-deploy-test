import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useState } from 'react'
const Navbar = ({shoppingCart}) => {

    const [curHamburgerState, setCurHamburgerState] = useState(false)
    const [winsize, setWinSize] = useState(window.innerWidth)
    const clickOnHamburger = () => setCurHamburgerState(!curHamburgerState)

    const updateSize = ()=>{
        setWinSize(window.innerWidth)
        setCurHamburgerState(false)
    }

    window.addEventListener('resize', updateSize)   

    if(winsize <= 769)
    {
        return (
        <div className="navigation-bar">
            <div className="nav-bar-content">
                <div className="nav-icon">
                   <Link className="nav-icon-img" to="/react-deploy-test/">Daveeys <i className="fas fa-cannabis" /></Link> 
                </div>
               
                <div className="hamburger-icon">   
                    <div className="shoppingcart nav-small">{shoppingCart.length<1?null:shoppingCart.length}<i className="fas fa-shopping-cart"></i></div>             
                    <button onClick={clickOnHamburger}><i className="fas fa-bars fa-3x"></i></button>                
                </div>                
            </div>      
            <div className={curHamburgerState?`hamburger-yes`:`hamburger-no`} >                                              
                {/* <Link className="nav-links" to='/about' onClick={clickOnHamburger}>About</Link>  */}
                <Link className="nav-links" to='/merch' onClick={clickOnHamburger}>Merch</Link>                         
                <Link className="nav-links" to='/shopping_cart' onClick={clickOnHamburger}>Shopping Cart                 
                </Link>                              
                <Link className="nav-links" to='/react-deploy-test/'onClick={clickOnHamburger}>Home</Link> 
            </div>      
        </div>
        )
    }else{
        return(
            <div className="navigation-bar">
                <div className="nav-bar-content">
                    <div className="nav-icon">
                        <Link className="nav-icon-img" to="/react-deploy-test/">Daveeys <i className="fas fa-cannabis" /></Link> 
                    </div>
                    <div >
                       {/*  <Link className="nav-links" to='/about' onClick={clickOnHamburger}>About</Link>  */}
                        <Link className="nav-links" to='/merch' onClick={clickOnHamburger}>Merch</Link>                         
                        <Link className="nav-links" to='/shopping_cart' onClick={clickOnHamburger}>Shopping Cart</Link>                         
                    </div>              
                    <div className="shoppingcart">{shoppingCart.length<1?null:shoppingCart.length}<i className="fas fa-shopping-cart"></i></div>      
                </div>                
            </div>
        )
    }    
}
export default Navbar
