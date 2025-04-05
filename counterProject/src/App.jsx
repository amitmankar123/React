import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count , setCount] = useState(15);
  
  function minusCount (){
    if(count >= 1){
      setCount(count - 1);
    }
    else{
      setCount(0);
    }
  }

  const arrCount = ()=>{
  
    if(count <= 19){
      setCount(count+1); 
    }
    else{
      setCount(count-count);
    }
    
   }

  return (
    <>
      <h1>react with hooks</h1>
      <button
      onClick={arrCount}
      >add count {count} </button>
      <br />
      <br />
      <button
      onClick={minusCount}
      >minus count {count} </button>
    </>
  )
}

export default App
