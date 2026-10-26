// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)
//   const [username, setUsername] = useState('vinit')
//   const [users, setUser] = useState([10,20,30,40,50])

//   function changeNum(){
//     setNum(30)
//     setUsername('pranav')
//     setUser([60,70,80,90,100])
//   }

//   function changeA() {
//   }
//   return (
//     <div>
//       <h1>Value of a is {num} <br />{users}<br />value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jump5eNum() {
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5eNum}>Increase 5</button>
    </div>
  );
};

export default App;
