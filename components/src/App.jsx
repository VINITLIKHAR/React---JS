import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import Increase from './pages/Increase'
import ProductObjects from './pages/ProductObjects'
import Mypractice from './pages/Mypractice'

const App = () => {
  // const Name = "Vinit";

  // const a = 10;
  // const b = 40;
  // // const c = a + b;

  // const [count, setCount] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [name, setName] = useState("");
  // // const [name, setName] = useState("Vinit");
  // const [age, setAge] = useState(22);
  // const [isOnline, setIsOnline] = useState(true);
  // const [name, setName] = useState("");


  // const getName = () => {
  //   return "ShopEase";
  // };

  // function increase() {
  //   setCount(count + 1);
  // }

  // function handleChange(event) {
  //   console.log(event.target.value);
  // }

  // function handleChange(event) {
  //   setName(event.target.value);
  // }


  // const names = [
  //   "Vinit",
  //   "Rahul",
  //   "Amit",
  //   "Jay"
  // ];

  // const Abcd = [
  //   {
  //     name: "vinit",
  //     age: 22
  //   },
  //   {
  //     name: "kaushik",
  //     age: 24
  //   },
  //   {
  //     name: "yash",
  //     age: 25
  //   }
  // ];


  return (
    <div>
      <Navbar />
      {/* 
      <Welcome />
      <h1>{Name}</h1>
      <h2>{a * b}</h2>
      <h1>{getName()}</h1> */}

      {/* <ProductCard /> */}

      {/* <Increase /> */}

      {/* <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
     

      <h2>
        {isLoggedIn ? "Welcome!" : "Please Login"}
      </h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Login
      </button>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

      <button onClick={increase}>
        {count}
      </button> 
       
      
      */}

      {/* <h2>{name}</h2>
      <p>{age}</p>
      <p>{!isOnline ? "Online" : "Offline"}</p> */}

      {/* <input onChange={handleChange} /> */}
      {/* <input
        value={name}
        onChange={handleChange}
      />

      <h2>Hello {name}</h2>

      {names.map((name) => (
        <div key={name}>
          <h2>{name}</h2>
          <p>₹{name}</p>
        </div>
      ))} */}

{/* 
      {Abcd.map((abcd) => (
        <div>
          <h2>{abcd.name}</h2>
          <h3>{abcd.age}</h3>
        </div>
      ))} */}
    
    {/* <ProductObjects /> */}
    <Mypractice />
      <Footer />
    </div>
  )
}

export default App


