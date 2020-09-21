import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProductList.css'
import Product from './Product'

function ProductList({id}) {

    var [products, setProducts] = useState(null)
    const [max_page, setMax_page] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios.get(`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=${currentPage}&category_id=${id}`)
        .then(response => {
          console.log(response);
          setProducts(response.data.products);
          setMax_page(response.data.num_pages)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
        
    }, [id,currentPage])

    const nextPage = () => {
        if (max_page === currentPage) {
            alert("No more Pages");
        }
        else {
            setCurrentPage(currentPage + 1)
        }
        
    }

    const previousPage = () => {
        if (currentPage <= 1) {
            alert("No previous Pages");
        }
        else {
            setCurrentPage(currentPage - 1)
        }
        
    }

    return (
        <div>
            { products && products.map((product)=>(
                <Product key={product.product_id} product={product} />
            ))}

            <div className="product__pagination">
                
                <button onClick={previousPage} >Previos</button>
                <button onClick={nextPage} >Next</button>
                
            </div>
        </div>

    )
}

export default ProductList
