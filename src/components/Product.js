import React from 'react'
import './Product.css'

function Product({product}) {
    return (
        <div className="product">
            <div className="product__image">
            <img src={product.image_url} alt=""/>
            </div>
            <div className="product__info">
            <h3>{product.product_name}</h3>
            <div className="info__variants">
            { product.price_stock.map((variant)=> (
                <div key={variant.id} className="variant">
                    <div>
                    <h5>Variant</h5>
                    <div className="variant__price">
                        <p className="mrp">₹{variant.mrp}</p>
                        <p>₹{variant.selling_price}</p>
                    </div>
                    <p>{variant.name}</p>
                    <p>QTY- {variant.quantity}</p>
                    </div>
                </div>
            ))}
            </div>
            </div>
            
        </div>
    )
}

export default Product
