
const Products = ({image, name, price, tags}) => {
    
    
    
    return(
        <div className="Products">
        <img className ="productImage" src={image}/>
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <p className="productTag">{tags}</p>
        </div>
    )
}

export default Products