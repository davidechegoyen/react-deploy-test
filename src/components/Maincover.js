import './Maincover.css'
import Buttons from './Buttons'
import { Link } from  'react-router-dom'

const Maincover = () => {
    return (
        <div className="main-cover-section">
            <h1>THE ORIGINALITY IS IN YOU,</h1>
            <h2>NOT IN WHAT YOU WEAR</h2>
            <Link to="/merch"><Buttons buttonSize="btn--medium" buttonStyle="btn--outline">SHOP NOW</Buttons></Link>
        </div>
    )
}
export default Maincover
