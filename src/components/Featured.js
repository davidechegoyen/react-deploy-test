import Images from './Images'

import Pic1 from '../images/coolpic1.jpg'
import Pic2 from '../images/coolpic2.jpg'
import Pic3 from '../images/coolpic3.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-section">
            <div className="parent-card">
                <div className="child-card">
                    <Images source={Pic1} alt={`cool_pic_1`} classNme={`featured-img`}/>
                </div>
            </div>
            <div className="parent-card">
                <div className="child-card">
                    <Images source={Pic2} alt={`cool_pic_2`} classNme={`featured-img`}/>
                </div>
            </div>
            <div className="parent-card">
                <div className="child-card">
                    <Images source={Pic3} alt={`cool_pic_3`} classNme={`featured-img`}/>
                </div>
            </div>                      
        </div>
    )
}

export default Featured
