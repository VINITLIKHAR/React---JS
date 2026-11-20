import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Practice1 from './pages/Practice1'
import Practice2 from './pages/Practice2'
import Practice3 from './pages/Practice3'
import Counter from './pages/Counter'

const App = () => {
  return (
    <div>
      <Header />
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Counter /> 
      <Footer />
    </div>
  )
}

export default App
