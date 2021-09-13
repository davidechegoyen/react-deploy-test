import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content-box">
                <div className="footer-content c1">
                    {/* <Link className="link" to="/about"><p><strong>About us</strong></p></Link> */}
                    <Link className="link" to="/merch"><p><strong>Products</strong></p></Link>
                    <Link className="link" to="/shopping_cart"><p><strong>Shopping cart</strong></p></Link>
                </div>
                <div className="footer-content c2">
                    <Link className="link"  to="/"><p><strong>Subscribe</strong></p></Link>
                    <Link className="link"  to="/"><p><strong>E-mail list</strong></p></Link>
                    <Link className="link"  to="/"><p><strong>Investors</strong></p></Link>
                </div>
                <div className="footer-content c3">
                    <p><strong>Contact us at</strong></p>
                    <p><strong>david.edu.eche@gmail.com</strong></p>
                    <p><strong>0998999999</strong></p>
                </div>            
            </div>
            <div className="end">
                <p>© Copyright 2021 David Echegoyen</p>
                
            </div>
        </div>
       
    )
}

export default Footer
