import { useState } from "react"


function App() {
 const [color , setcolor] = useState("grey")
  return (
   
    <div className= "w-full h-screen " 
      style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 rounded-2xl" >
      <div className="
         flex flex-wrap justify-center gap-3  bg-white shadow-lg  rounded-3xl px-3 py-2" >
          <button onClick={()=>{setcolor("red")}} className="outline-none bg-red-800 rounded-2xl px-4" >Red</button>
          <button onClick={()=>{setcolor("blue")}} className="outline-none bg-blue-800 rounded-2xl px-4" >blue</button>
          <button onClick={()=>{setcolor("green")}} className="outline-none bg-green-800 rounded-2xl px-4" >green</button>
          <button  onClick={()=>{setcolor("yellow")}} className="outline-none bg-yellow-500   rounded-2xl px-4" >yellow</button>
          <button onClick={()=>{setcolor("purple")}} className="outline-none bg-purple-800 rounded-2xl px-4" >purple</button>
       
       
       
       
         </div>
         
    </div>
   
    </div>
   
  )
}

export default App
