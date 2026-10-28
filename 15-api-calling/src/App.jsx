import axios from 'axios'

const App = () => {


  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  //   console.log(response);
    
  // }


  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  //   const data = await response.json()

  //   console.log(data);


  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(response.data);
    
  }
      
    
  // }

  // function getData() {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  // }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App


// Method Type 

// fetch()
// axios()
