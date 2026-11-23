import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Practice2 = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Email : ',email);
        console.log('Password : ',password);
        
        
    }

    const navigate = useNavigate(); 

    const backtoHome = () => {

        navigate("/");
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">
            Email:
        </label>
        <input type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">
            Password:
        </label>

        <input type="password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit' className='btn-outline'>
            Submit
        </button>


        <button onClick={backtoHome}>
            BACK TO HOME
        </button>
    </form>
  )
}

export default Practice2
