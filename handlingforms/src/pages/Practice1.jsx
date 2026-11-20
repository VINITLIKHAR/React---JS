import React, { useState } from 'react'

const Practice1 = () => {

    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName (event.target.value);
    };

  return (
    <div>
      <input type="text"
      value={name}
      onChange={handleChange}
       />

       <p>Name : {name}</p>
    </div>
  )
}

export default Practice1
