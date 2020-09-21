import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cat from './Cat'
import './Categories.css'

function CategoriesComponent() {

    var [categories, setCategories] = useState(null)

    useEffect(() => {
        axios.get('https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop')
        .then(response => {
          console.log(response.data.category);
          setCategories(response.data.category);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert(error)
          })
        
    }, [])

    return (
        <div className="main__category">
            { categories && categories.map((cat)=> (
                <Cat cat={cat} />
            ))}
        </div>
    )
}

export default CategoriesComponent
