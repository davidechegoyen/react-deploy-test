import './Images.css'

const Images = ({source,alt,onClick,classNme}) => {
    return (
        <div className="img-container">
            <img src={source} alt={alt} onClick={onClick} className={`img ${classNme}`}/>            
        </div>
    )
}

export default Images
