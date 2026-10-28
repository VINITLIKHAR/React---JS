import React from 'react'

const App = () => {

  const user = {
    username: 'Vinit',
    age: 18,
    city: 'Ahemedabad'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);



  return (
    <div>
      App
    </div>
  )
}

export default App


// localStorage.setItem('user','Vinit')

// const user = localStorage.getItem('user')

// localStorage.removeItem('user')

// localStorage.clearItem('user')

// console.log(user);

// const age = localStorage.getItem('age','user')
// const user = localStorage.getItem('user')

// console.log(age,user);


// One-line revision

// setItem()       // Save
// getItem()       // Read
// removeItem()    // Delete one
// clear()         // Delete all
// stringify()     // Object → String
// parse()         // String → Object