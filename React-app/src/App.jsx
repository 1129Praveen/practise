import { useState } from 'react'
import AddProduct from './componets/AddProduct'
import ListProducts from './componets/ListProduct'
  
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Product Management</h1>
    <p>here we are going to see react main basic build blocks</p>
    <h5>welcome to react</h5>
  
    
    <AddProduct/>

   <ListProducts/>
   
    

    
    </>
  )
  
  
}
export default App