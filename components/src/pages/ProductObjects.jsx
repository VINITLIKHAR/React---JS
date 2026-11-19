import React from 'react'

const ProductObjects = () => {

    const products = [
        {
            id : 1,
            title : "apple",
            price : 5000,
            category : "Mobile"
        },
        {
            id : 2,
            title : "18 pro-max",
            price : 120000,
            category : "Mobile"
        },
        {
            id : 1,
            title : "i-phone-18",
            price : 800,
            category : "Mobile"
        },
        {
            id : 1,
            title : "18-pro",
            price : 55000,
            category : "Mobile"
        },
        {
            id : 1,
            title : "mini-18",
            price : 100,
            category : "Mobile"
        },
    ]

  return (
    <div>
      
      {products.filter((product) => product.price > 1000)
        .map((product) => (
            <div key={product.id}>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <h3>{product.category}</h3>
                
            </div>
        ))
      }
    </div>
  )
}

export default ProductObjects
