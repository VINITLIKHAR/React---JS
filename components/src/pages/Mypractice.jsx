const Mypractice = () => {

    const practice = [
        {
            id : 1,
            title : "apple",
            price : "150000",
            category : "Mobile"
        },
        {
            id : 2,
            title : "Samsung",
            price : "120000",
            category : "Mobile"
        },
        {
            id : 3,
            title : "Nokia",
            price : "90000",
            category : "Mobile"
        },
        {
            id : 4,
            title : "reyelme",
            price : "19000",
            category : "Mobile"
        },
        {
            id : 5,
            title : "Mi",
            price : "18000",
            category : "Mobile"
        },
 
    ]

  return (
    <div>
      
    {practice.filter((product) => product.price > 100000)
        .map((product) => (
            <div key={product.id}>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <h3>{product.category}</h3>
                
            </div>
        ))
      }
    </div>
  )
}

export default Mypractice