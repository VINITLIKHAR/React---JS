import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
    
  }

  return (
    <div>
      <button  onClick={btnClicked}>Click here</button>
      <button onClick={btnClicked}>explore this </button>
    </div>
  )
}

export default App   