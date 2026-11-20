import React, { useState } from 'react'

const Practice3 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

        const handleChangeName = (event) => {
        setName (event.target.value);
        
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

  return (
    <div>
        <input type="text"
        value={name}
        onChange={handleChangeName}
        />
         <p>Name : {name}</p>

         <input type="text"
         value={email}
         onChange={handleChangeEmail}
         />
         <p>Email : {email}</p>
    </div>
  )
}

export default Practice3