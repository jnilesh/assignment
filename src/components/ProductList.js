import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Categories.css'
import Product from './Product'

function ProductList({id}) {

    var [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=${id}`)
        .then(response => {
          console.log(response.data.products);
          setProducts(response.data.products);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
        
    }, [id])

    return (
        <div>
            { products && products.map((product)=>(
                <Product product={product} />
            ))}
        </div>
    )
}

export default ProductList
