// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'vinit',age:'22'})

//   const btnCliked = ()=> {
//     const newNum = {...num};
//     newNum.user='pranav'
//     newNum.age= '22'
//     setNum(newNum);
//   }


//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnCliked}>click</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'vinit',age:23})

  const btnClicked = () => {
    setNum(prev=>({...prev,age:50}))
  }

  
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}></button>
    </div>
  )
}

export default App
