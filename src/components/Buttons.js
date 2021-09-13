import React from 'react'
import './Buttons.css'

const STYLES = ['btn--basic', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Buttons = ({children,buttonStyle,buttonSize,type,onClick}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    return (
        <div>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            onClick={onClick} 
            >
            {children}
            </button>
        </div>
    )
}

export default Buttons
