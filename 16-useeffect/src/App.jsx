// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {

//   // function random(){
//   //   const a = Math.random()
//   //   console.log(a);
//   // }

//   // random()

//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function(){
//     console.log('use effect is running...');
    
//   },[num])
//   return (
//     <div>
//       <h1>value of num is {num}</h1>
//       <h1>value of num2 is {num2}</h1>
//       <button onClick={()=> {
//         setNum(num+1)
//         setNum2(num2+1)
//       }}>Click</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A ki value change ho gai');
    
  }

  function bChanging(){
    console.log('B ki value change ho gai');
    
  }

  useEffect(function(){
    aChanging()
    console.log('use effect is runing...');
    
  },[a])

  useEffect(function(){
    bChanging()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=> {
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=> {
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
