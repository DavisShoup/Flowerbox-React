import Data from "../Data.js"

const Products = (data) => {
    return(
        <div className="Products">
        <img>{data.image}</img>
        <p>{data.name}</p>
        <p>{data.price}</p>
        <p>{data.tags}</p>
        </div>
    )
}

export default Products