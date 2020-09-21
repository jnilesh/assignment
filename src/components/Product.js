import React from 'react'

function Product({product}) {
    return (
        <div>
            <img src={product.image_url} alt=""/>
            <h3>{product.product_name}</h3>
            <p> price</p>
            
        </div>
    )
}

export default Product
