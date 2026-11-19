import React, { useState } from 'react'

const ProductCard = () => {

  const [quantity, setQuantity] = useState(1);

    // const price = 95000;
  return (
    <div>
        {/* <h1>iPhone</h1>
        <h2>₹{price}</h2>
        <h3>Add to Cart</h3> */}
         <h2>Wireless Mouse</h2>

      <p>Quantity: {quantity}</p>

      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>

      <button onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
    </div>
  )
}

export default ProductCard