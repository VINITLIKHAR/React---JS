// import React from "react";

// const App = () => {

//   function inputChanging() {
//     console.log('User is Typing');

//   }

//   return (
//     <div>
//       <input onChange={function(elem) {
//         console.log(elem.target.value);

//       }} type="text" placeholder='Enter Name' />
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <div onMouseMove={(elem) => {
//         console.log(elem.clientX);

//       }} className="box">

//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div onScroll={(elem) => console.log(elem.target.scrollTop)}>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Hello');
    
  }
  return (
    <div>
      <div>
        <button>Click</button>
      </div>
    </div>
  )
}

export default App
