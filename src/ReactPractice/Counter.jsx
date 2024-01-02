import React, {useState} from 'react'



const Counter = () => {
  const [count, setcount] = useState(100);


  return (
    <>
    <div>counter is {count}</div>
    <button onClick={()=> {
      setcount(count + 100)
    }}>Increment</button>
    <button onClick={()=> {
      setcount(count - 10)
    }}>Decrement</button>
   
   
    

    </>
    
    
  )
}

export default Counter
/*http://localhost:3000/*